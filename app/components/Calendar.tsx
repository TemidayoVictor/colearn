// components/DayCalendar.tsx
'use client';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Calendar() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <div className='calendar'>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={{ before: new Date() }} // ⛔ disables all dates before today
        showOutsideDays
        modifiersClassNames={{
          selected: 'bg-blue-500 text-white',
          today: 'text-blue-500 font-semibold',
          disabled: 'text-gray-400 opacity-50 cursor-not-allowed',
        }}
      />
    </div>
  );
}
