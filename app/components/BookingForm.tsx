import React, {useEffect, useState} from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { consultantStore } from "@/zustand/consultantStore";
import dayjs from "dayjs";

const BookingForm = () => {

    const slots = consultantStore((state) => state.slots);
    

    const parseTimeToDate = (time: string): Date => {
        return dayjs(time, ['h:mm A']).toDate();
    };

    const [availableSlots, setAvailableSlots] = useState<string[]>([]);

    const {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        duration,
        timeOptions2,
        setDuration,
        durationOptions,
    } = useConsultant();

    useEffect(() => {
        if (selectedDate) {
            const weekday = dayjs(selectedDate).format('dddd');
            const slot = slots.find((s) => s.day === weekday && s.enabled);
            console.log(slot);
            if (slot) {
            
            const start = parseTimeToDate(slot.start_time);
            const end = parseTimeToDate(slot.end_time);

            console.log("Start:", start);
            console.log("End:", end);
            console.log("All options:", timeOptions2.map(parseTimeToDate));

            const filtered = timeOptions2.filter((t) => {
                const current = parseTimeToDate(t);
                return current >= start && current < end;
            });

            setAvailableSlots(filtered);

            } else {
            setAvailableSlots([]);
            }
        }
    }, [selectedDate, slots]);

    return (
        <div>
            <div className="calendar">
                <div className="mb-4">
                    <label className="block font-medium mb-1">Date</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
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
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Duration (mins)</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full border px-3 py-2 rounded"
                    >
                        {durationOptions.map((d) => (
                            <option key={d} value={d}>{d} minutes</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default BookingForm