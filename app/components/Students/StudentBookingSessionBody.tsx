import React from "react";
import Calendar from "../Calendar";
import BookingInfo from "../BookingInfo";

const StudentBookingSessionBody = () => {
    return (
        <div>
            <div className='container'>
                <div className="booking-session two">
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
        </div>
    )
}

export default StudentBookingSessionBody