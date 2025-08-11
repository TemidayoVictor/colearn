'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentCoursePageBody from "@/app/components/Students/StudentCoursePageBody";
import { Suspense } from "react";

const StudentCourses = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <Suspense fallback={<div>Loading...</div>}>
                        <StudentCoursePageBody />
                    </Suspense>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentCourses;