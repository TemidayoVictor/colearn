import React from "react";

type BookingDetailsProps = {
    displayType?: string | null
}

const BookingDetails = ({displayType}: BookingDetailsProps) => {
    return (
        <div>
            {
                displayType == 'reschedule' &&
                <div>
                    <h2 className="title-3">Booking Details</h2>
                </div>
            }

            {
                displayType == 'cancel' &&
                <div>
                    <h2 className="title-3">Cancel Booking</h2>
                </div>
            }
        </div>
    )
}

export default BookingDetails