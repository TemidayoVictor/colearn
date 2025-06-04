import React from "react";
import UserLayout from "@/app/components/UserLayout";
import InstructorSettingBody from "@/app/components/Instructors/InstructorSettingBody";

const StudentSetting = () => {
    return (
        <div>
            <UserLayout userType="student">
                <InstructorSettingBody userType="student"/>
            </UserLayout> 
        </div>
    )
}

export default StudentSetting