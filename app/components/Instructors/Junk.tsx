'use client';
import React, { useState } from 'react';

type Slot = {
  day: string;
  start_time: string;
  end_time: string;
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SetAvailabilityBody = () => {

    const [slots, setSlots] = useState<Slot[]>([]);

    const addSlot = () => {
    setSlots([...slots, { day: 'Monday', start_time: '', end_time: '' }]);
    };

    const removeSlot = (index: number) => {
    setSlots(slots.filter((_, i) => i !== index));
    };

    const updateSlot = (index: number, field: keyof Slot, value: string) => {
    const updatedSlots = [...slots];
    updatedSlots[index][field] = value;
    setSlots(updatedSlots);
    };

    const handleSubmit = () => {
    console.log(slots); // Send this to backend
    };

    return (
        <div className="container-3">
            <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Set Your Availability</h2>

      {slots.map((slot, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4 items-end">
          <div>
            <label className="block text-sm font-medium">Day</label>
            <select
              value={slot.day}
              onChange={(e) => updateSlot(index, 'day', e.target.value)}
              className="w-full border p-2 rounded"
            >
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Start Time</label>
            <input
              type="time"
              value={slot.start_time}
              onChange={(e) => updateSlot(index, 'start_time', e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">End Time</label>
            <input
              type="time"
              value={slot.end_time}
              onChange={(e) => updateSlot(index, 'end_time', e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <button
              onClick={() => removeSlot(index)}
              className="text-red-600 hover:underline mt-6"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex gap-4 mt-6">
        <button
          onClick={addSlot}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Slot
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Availability
        </button>
      </div>
    </div>
        </div>
    )
}

export default SetAvailabilityBody