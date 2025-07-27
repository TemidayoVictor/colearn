import React from "react";
import UserLayout from "@/app/components/UserLayout";
import CourseDetailsPageBody from "@/app/components/Students/CourseDetailsPageBody";

const CourseDetailsPage = () => {
    return (
        <div>
            <UserLayout userType="student">
                <CourseDetailsPageBody />
            </UserLayout>
        </div>
    )
}

export default CourseDetailsPage;