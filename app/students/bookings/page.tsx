import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentBookingBody from "@/app/components/Students/StudentBookingBody";

const StudentBooking = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <StudentBookingBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentBooking