import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentAccountBody from "@/app/components/Students/StudentAccountBody";

const StudentAccountPage = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <StudentAccountBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentAccountPage