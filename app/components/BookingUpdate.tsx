'use client';
import React, {useState, useEffect, useRef} from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { get_consultant } from "@/services/consultant";
import { consultantStore } from "@/zustand/consultantStore";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);


const BookingUpdate = () => {
    const {
        updateBooking,
        setUpdateBooking,
        timeOptions2,
        availableSlots, 
        setAvailableSlots,
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
                duration: booking?.duration || "",
                note: booking?.note || "",
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

    return (
        <div>
            <h2 className="title-3">Update Booking</h2>
        </div>
    )
}

export default BookingUpdate