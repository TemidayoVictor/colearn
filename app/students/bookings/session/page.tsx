import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentBookingSessionBody from "@/app/components/Students/StudentBookingSessionBody";

const StudentBookingSession = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <StudentBookingSessionBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentBookingSession