import React from 'react';
import { Metadata } from "next";
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../components/Calendar';
import BookingInfo from '../components/BookingInfo';

export const metadata: Metadata = {
    title: "Book Session",
}

const BookingCalendar = () => {
    return (

        <div className='container'>
            <div className="booking-session">
                <h2 className='title'>Book  a session with a Consultant</h2>
                <div className="booking-session-cont mt-[1.5em]">
                    <div className="component">
                        <Calendar />
                    </div>
                    <div className="component">
                        <BookingInfo/>
                    </div>
                </div>
            </div>
        </div>

      );
};

export default BookingCalendar;
