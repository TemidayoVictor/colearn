import React, {useEffect, useState, useRef } from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { consultantStore } from "@/zustand/consultantStore";
import { authStore } from "@/zustand/authStore";
import { genralStore } from "@/zustand/generalStore";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonLoader from "./buttonLoader";
import Image from "next/image";
import Unavailable from "./Unavailable";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const BookingForm = () => {

    const {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        duration,
        timeOptions2,
        setDuration,
        durationOptions,
        availableSlots, 
        setAvailableSlots,
        bookSession,
        buttonLoader,
        setNote,
        setSelectedUserTime,
    } = useConsultant();

    const slots = consultantStore((state) => state.slots);
    const [slotCheck, setSlotCheck] = useState<boolean>(false);

    const consultant = genralStore((state) => state.consultant);

    const [showTimeMenu, setShowTimeMenu] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const user = authStore((state) => state.user);

    const handleTimeSelect = (time: string, userTime: string) => {
        setSelectedTime(time);
        setSelectedUserTime(userTime);
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

    // use effect to handle selected date and update available slots
    useEffect(() => {
        if (selectedDate) {
            const weekday = dayjs(selectedDate).format('dddd');
            const slot = slots.find((s) => s.day === weekday && s.enabled);
            if (slot) {
                setSlotCheck(true);
                const consultantTimeZone = consultant?.instructor?.user?.timezone || 'America/New_York'; // Default to 'America/New_York' if not set
                const userTimezone = user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

                const start = parseTimeToDate(slot.start_time);
                const end = parseTimeToDate(slot.end_time);

                const filtered = timeOptions2.filter((t) => {
                    const current = parseTimeToDate(t);
                    return current >= start && current < end;
                });

                const userFormattedSlots = filtered.map((time) => ({
                    consultantTime: time,
                    userTime: convertTimeBetweenZones(time, consultantTimeZone, userTimezone, dayjs(selectedDate).format('YYYY-MM-DD'))
                }))

                setAvailableSlots(userFormattedSlots);

            } else {
                setSlotCheck(false);
                setAvailableSlots([]);
            }
        }
    }, [selectedDate, slots]);

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
            <div className="calendar">
                <h2 className="title-3 mb-4">Book Session</h2>
                
                <div className="mb-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Pick a date"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
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
                                    {selectedTime || "Select time"}
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
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className="w-full input-field"
                                >
                                    {durationOptions.map((d) => (
                                        <option key={d} value={d}>{d} minutes</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <h3 className="block mb-1 text-[.9rem] font-bold">Add Consultation Note</h3>
                                <textarea name="note" id="" placeholder="Enter a description" className="textarea" onChange={(e) => setNote(e.target.value)}></textarea>
                            </div>

                            <button className="bt-btn two btn btn-primary-fill" onClick={bookSession}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="Please Wait . . ." />
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
                                            <span>Continue</span>
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
        </div>
    )
}

export default BookingForm