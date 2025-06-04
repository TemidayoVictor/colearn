'use client';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';

export default function Calendar() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <div className="calendar">
      <h2 className="title-2 mb-4">Choose a Date</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Pick a date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          minDate={dayjs()}
          slotProps={{
            textField: { fullWidth: true },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
