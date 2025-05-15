'use client';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../components/Calendar';
import BookingInfo from '../components/BookingInfo';

const BookingCalendar = () => {
    return (

        <div className='container'>
            <div className="booking-session">
                <h2 className='title'>Book  a session with a Consultant</h2>
                <div className="booking-session-cont mt-[1.5em]">
                    <Calendar />
                    <BookingInfo/>
                </div>
            </div>
        </div>

      );
};

export default BookingCalendar;
