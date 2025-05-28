import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardHeader from "@/app/components/Students/DashboardHeader";
import StudentDashboardPerformance from "@/app/components/Students/StudentDashboardPerformance";

const StudentDashboard = () => (
    <div>
        <UserLayout userType="student">
            <div>
                <DashboardHeader />
            </div>
            <div>
                <StudentDashboardPerformance />
            </div>
        </UserLayout>
    </div>
)

export default StudentDashboard
