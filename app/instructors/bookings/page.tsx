import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentBookingBody from "@/app/components/Students/StudentBookingBody";

const InstructorsBookings = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <StudentBookingBody userType = "instructor"/>
                </div>
            </UserLayout>
        </div>
    )
}

export default InstructorsBookings