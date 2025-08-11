'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentBookingBody from "@/app/components/Students/StudentBookingBody";
import { Suspense } from "react";

const StudentBooking = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <Suspense fallback={<div>Loading...</div>}>
                        <StudentBookingBody userType = "student" />
                    </Suspense>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentBooking