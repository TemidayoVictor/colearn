'use client';
import React, {useState, useEffect, useRef} from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { genralStore } from "@/zustand/generalStore";
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

const BookingRescheduleConsultant = () => {
    const {
        timeOptions2,
        availableSlots, 
        setAvailableSlots,
        handleRescheduleChange,
        buttonLoader,
        rescheduleBooking, 
        setRescheduleBooking,
        rescheduleSessionConsultant,
    } = useConsultant();

    const booking = genralStore((state) => state.booking);

    const slots = consultantStore((state) => state.slots);
    const [slotCheck, setSlotCheck] = useState<boolean>(false);

    const [showTimeMenu, setShowTimeMenu] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleTimeSelect = (time: string, userTime: string) => {
        setRescheduleBooking((prev) => ({ ...prev, start_time: time, user_time: userTime }));
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
            setRescheduleBooking({
                id: booking?.id || "",  
                date: booking?.date  || "",
                start_time: booking?.start_time || "",
                note: booking?.consultant_note || "",
                user_time: booking?.user_time || "",
                user_date: booking?.date || "",
                type: 'consultant',
            });
        };

        init();

    }, []);

    useEffect(() => {
        if (rescheduleBooking.date) {
            const weekday = dayjs(rescheduleBooking.date).format('dddd');
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
                    userTime: convertTimeBetweenZones(time, consultantTimeZone, userTimezone, dayjs(rescheduleBooking.date).format('YYYY-MM-DD'))
                }))

                setAvailableSlots(userFormattedSlots);

            } else {
                setSlotCheck(false);
                setAvailableSlots([]);
            }
        }
    }, [rescheduleBooking.date, slots]);

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
            <div>
                <div>
                    <h2 className="title-3">Reschedule Details</h2>
                    <p className="color-grey-text text-[.8rem]">Reschedule the consultancy session request from <span className="color-darker font-bold">{`${booking?.user?.first_name} ${booking?.user?.last_name}`}</span></p>
                </div>

                <div className="mb-4 mt-8">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Pick a date"
                            value={rescheduleBooking.date ? dayjs(rescheduleBooking.date) : null}
                            onChange={(newValue) => {
                                setRescheduleBooking((prev) => ({
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

                {
                    slotCheck ? (
                        <>
                            <div className="relative mb-4">
                                <label className="block mb-1 text-[.9rem] font-bold">Propose a New Time</label>

                                <button
                                    className="input-field w-full text-start"
                                    onClick={() => setShowTimeMenu(true)}
                                >
                                    {rescheduleBooking.start_time || "Select time"}
                                </button>

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
                                                        <span>{time.consultantTime}</span> <span className="color-grey-text">[ {time.userTime} in client's time]</span>
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
                                <h3 className="block mb-1 text-[.9rem] font-bold">Kindly add a reason for Rescheduling</h3>
                                <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={rescheduleBooking.note} onChange={handleRescheduleChange}></textarea>
                            </div>

                            <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={rescheduleSessionConsultant}>
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
                        <Unavailable content="You're currently not available on this day. To allow bookings, please update your availability settings" />
                    )
                }
            </div>
        </div>
    )
}

export default BookingRescheduleConsultant;