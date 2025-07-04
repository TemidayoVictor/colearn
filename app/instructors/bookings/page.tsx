import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentBookingBody from "@/app/components/Students/StudentBookingBody";
import InstructorsBookingBody from "@/app/components/Instructors/InstructorsBookingBody";

const InstructorsBookings = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <InstructorsBookingBody/>
                </div>
            </UserLayout>
        </div>
    )
}

export default InstructorsBookings