import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentDashboardBody from "@/app/components/Students/StudentDashboardBody";


const StudentDashboard = () => (
    <div>
        <UserLayout userType="student">
            <StudentDashboardBody />
        </UserLayout>
    </div>
)

export default StudentDashboard
