import React from "react";
import UserLayout from "@/app/components/UserLayout";
import ViewInstructorBody from "@/app/components/Students/ViewInstructorBody";

const ViewInstructor = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <ViewInstructorBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default ViewInstructor