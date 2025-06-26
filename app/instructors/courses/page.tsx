import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardPerformance from "@/app/components/Instructors/DashboardPerformance";
import CoursesBody from "@/app/components/Instructors/CoursesBody";
import InstructorsCoursesBody from "@/app/components/Instructors/InstructorCoursesBody";

const InstructorsCourses = () => {
    return (
        <div>
            <UserLayout>
                <InstructorsCoursesBody />
            </UserLayout>
        </div>
    )
}

export default InstructorsCourses