import React from "react";
import UserLayout from "@/app/components/UserLayout";
import HelpDeskBody from "@/app/components/Instructors/HelpDeskBody";

const StudentHelpDesk = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <HelpDeskBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentHelpDesk