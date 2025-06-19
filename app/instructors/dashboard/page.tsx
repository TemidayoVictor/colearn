import React from "react";
import UserLayout from "@/app/components/UserLayout";
import InstructorsDashboardBody from "@/app/components/Instructors/InstructorsDashboardBody";



const InstructorsDashboard = () => {
    return (
        <div>
            <UserLayout>
                <InstructorsDashboardBody />
            </UserLayout>
        </div>
    )
} 

export default InstructorsDashboard