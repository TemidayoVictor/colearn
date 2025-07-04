'use client';
import React, {useState, useEffect, useRef} from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { get_consultant } from "@/services/consultant";
import { consultantStore } from "@/zustand/consultantStore";
import Unavailable from "./Unavailable";
import ButtonLoader from "./buttonLoader";
import Image from "next/image";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTimes } from "@fortawesome/free-solid-svg-icons";

dayjs.extend(utc);
dayjs.extend(timezone);


const BookingUpdate = () => {
    const {
        updateBooking,
        setUpdateBooking,
        timeOptions2,
        availableSlots, 
        setAvailableSlots,
        handleUpdateChange,
        durationOptions,
        buttonLoader,
        updateSession,
    } = useConsultant();

    const booking = genralStore((state) => state.booking);
    const consultantId = String(booking?.consultant_id || booking?.consultant?.id || '');

    const slots = consultantStore((state) => state.slots);
    const [slotCheck, setSlotCheck] = useState<boolean>(false);

    const [showTimeMenu, setShowTimeMenu] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleTimeSelect = (time: string, userTime: string) => {
        setUpdateBooking((prev) => ({ ...prev, start_time: time, user_start_time: userTime }));
        setShowTimeMenu(false);
    };
    
    const parseTimeToDate = (time: string): Date => {
        return dayjs(time, ['h:mm A']).toDate();
    };

    const convertTimeBetweenZones = (
        time: string,
        fromZone: string,
        toZone: string,
        date: string
        ): string => {
        const fullTime = dayjs.tz(`${date} ${time}`, 'YYYY-MM-DD hh:mm A', fromZone);
        return fullTime.tz(toZone).format('hh:mm A');
    };

    useEffect(() => {
        const init = async () => {
            setUpdateBooking({
                id: booking?.id || "",  
                date: booking?.date  || "",
                start_time: booking?.start_time || "",
                user_start_time: booking?.user_time || "",
                duration: booking?.duration || 0,
                note: booking?.note || "",
                consultant_date: booking?.consultant_date || "",
            });
        };

        init();

    }, []);
    
    useEffect(() => {
        if (!booking) return;
        const init = async () => {
            try {
                const response = await get_consultant(consultantId);
                if (response.success) {
                    // save state globally
                    genralStore.getState().setConsultant(response.data.consultant);
                    consultantStore.getState().setSlots(response.data.consultant.slots);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
        };
        init();

    }, [booking]);

    // use effect to handle selected date and update available slots
    useEffect(() => {
        if (updateBooking.date) {
            const weekday = dayjs(updateBooking.date).format('dddd');
            const slot = slots.find((s) => s.day === weekday && s.enabled);
            if (slot) {
                setSlotCheck(true);
                const consultantTimeZone = booking?.consultant?.instructor?.user?.timezone || 'America/New_York'; // Default to 'America/New_York' if not set
                const userTimezone = booking?.user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

                const start = parseTimeToDate(slot.start_time);
                const end = parseTimeToDate(slot.end_time);

                const filtered = timeOptions2.filter((t) => {
                    const current = parseTimeToDate(t);
                    return current >= start && current < end;
                });

                const userFormattedSlots = filtered.map((time) => ({
                    consultantTime: time,
                    userTime: convertTimeBetweenZones(time, consultantTimeZone, userTimezone, dayjs(updateBooking.date).format('YYYY-MM-DD'))
                }))

                setAvailableSlots(userFormattedSlots);

            } else {
                setSlotCheck(false);
                setAvailableSlots([]);
            }
        }
    }, [updateBooking.date, slots]);

    // use effect to close the time menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
            ) {
            setShowTimeMenu(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <h2 className="title-3 mb-4">Update Booking</h2>
            <div className="mb-4 mt-8">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Pick a date"
                        value={updateBooking.date ? dayjs(updateBooking.date) : null}
                        onChange={(newValue) => {
                            setUpdateBooking((prev) => ({
                                ...prev,
                                date: newValue ? newValue.format("YYYY-MM-DD") : "",
                            }));
                        }}
                        minDate={dayjs()}
                        slotProps={{
                        textField: { fullWidth: true },
                        }}
                    />
                </LocalizationProvider>
            </div>

                {/* <div className="mb-4">
                    <label className="block font-medium mb-1">Date</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div> */}

                {/* <div className="mb-4">
                    <label className="block font-medium mb-1">Start Time</label>
                    <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    >
                        <option value="">Select time</option>
                        {availableSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div> */}

                {
                    slotCheck ? (
                        <>
                            <div className="relative mb-4">
                                <label className="block mb-1 text-[.9rem] font-bold">Start Time</label>

                                <button
                                    className="input-field w-full text-start"
                                    onClick={() => setShowTimeMenu(true)}
                                >
                                    {updateBooking.start_time || "Select time"}
                                </button>

                                <div className="mt-2">
                                    <p className=" color-grey-text text-[.9rem]"> {`${updateBooking.user_start_time} in your time`}</p>
                                </div>

                                {
                                    showTimeMenu && (
                                        <>
                                            <div className="menu-overlay active" onClick={() => setShowTimeMenu(false)}></div>
                                            <div className="bottom-menu slide-up time" ref={modalRef}>
                                                <div className="menu-actions">
                                                {availableSlots.map((time, index) => (
                                                    <button
                                                    key={index}
                                                    className="menu-btn"
                                                    onClick={() => handleTimeSelect(time.consultantTime, time.userTime)}
                                                    >
                                                    <FontAwesomeIcon icon={faClock} className="icon" />
                                                        <span>{time.consultantTime}</span> <span className="color-grey-text">[ {time.userTime} In Your Time]</span>
                                                    </button>
                                                ))}

                                                <button className="menu-btn cancel" onClick={() => setShowTimeMenu(false)}>
                                                    <FontAwesomeIcon icon={faTimes} className="icon" />
                                                    Cancel
                                                </button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-[.9rem] font-bold">Duration (mins)</label>
                                <select
                                    value={updateBooking.duration}
                                    onChange={handleUpdateChange}
                                    className="w-full input-field"
                                    name="duration"
                                >
                                    {durationOptions.map((d) => (
                                        <option key={d} value={d}>{d} minutes</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <h3 className="block mb-1 text-[.9rem] font-bold">Add Consultation Note</h3>
                                <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={updateBooking.note} onChange={handleUpdateChange}></textarea>
                            </div>

                            <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={updateSession}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="Updating . . ." />
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
                                            <span>Update</span>
                                            <span>
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/arrow-right.png"
                                                    alt="Colearn Logo"
                                                    width={12}
                                                    height={12}
                                                    className="object-contain"
                                                />
                                            </span>
                                        </div>                                        
                                    )
                                }
                            </button>
                        </>
                    ) : (
                        <Unavailable />
                    )
                }
        </div>
    )
}

export default BookingUpdate