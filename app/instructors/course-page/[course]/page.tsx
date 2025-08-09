'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import CoursePageBody from "@/app/components/Instructors/CoursePageBody";

const CoursePage = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <CoursePageBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default CoursePage;