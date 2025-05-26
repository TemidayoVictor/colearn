import React from "react";
import UserLayout from "@/app/components/UserLayout";
import InstructorSettingBody from "@/app/components/Instructors/InstructorSettingBody";

const InstructorSetting = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <InstructorSettingBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default InstructorSetting