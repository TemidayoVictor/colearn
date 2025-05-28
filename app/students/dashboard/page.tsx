import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardHeader from "@/app/components/Students/DashboardHeader";

const StudentDashboard = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <DashboardHeader />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentDashboard
