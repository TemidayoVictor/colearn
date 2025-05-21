import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardPerformance from "@/app/components/Instructors/DashboardPerformance";
import CoursesBody from "@/app/components/Instructors/CoursesBody";

const InstructorsCourses = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <div>
                        <DashboardPerformance type="Course" />
                    </div>
                    <div>
                        <CoursesBody />
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}

export default InstructorsCourses