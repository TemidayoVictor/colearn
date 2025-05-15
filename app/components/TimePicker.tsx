'use client';
import React, { useState } from "react";

interface TimePickerProps {
  selectedDate: Date | null;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedDate }) => {
  const [selectedTime, setSelectedTime] = useState<string>("");

  const times: string[] = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="time-picker-container">
      <h3>Select a time</h3>
      {selectedDate ? (
        <div className="time-picker">
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Select a time</option>
            {times.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p>Please select a date first</p>
      )}
      {selectedTime && (
        <div className="selected-time">
          <p>Selected Time: {selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
