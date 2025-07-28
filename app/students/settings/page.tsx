import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentSettingsBody from "@/app/components/Students/StudentSettingsBody";

const StudentSetting = () => {
    return (
        <div>
            <UserLayout userType="student">
                <StudentSettingsBody />
            </UserLayout> 
        </div>
    )
}

export default StudentSetting