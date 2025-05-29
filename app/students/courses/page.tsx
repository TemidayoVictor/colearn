import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentCoursePageBody from "@/app/components/Students/StudentCoursePageBody";

const StudentCourses = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <StudentCoursePageBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentCourses;