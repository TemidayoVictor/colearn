import React from "react";
import UserLayout from "@/app/components/UserLayout";
import InstructorAccountBody from "@/app/components/Instructors/InstructorAccountBody";

const AccountPage = () => {
    return (
        <div>
            <UserLayout>
                <InstructorAccountBody />
            </UserLayout>
        </div>
    )
}

export default AccountPage;