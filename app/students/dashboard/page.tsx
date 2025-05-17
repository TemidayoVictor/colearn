import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardPerformance from "@/app/components/Students/DashboardPerformance";

const StudentDashboard = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <DashboardPerformance />
                </div>
            </UserLayout>
        </div>
    )
} 

export default StudentDashboard