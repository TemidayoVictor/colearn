import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentCartBody from "@/app/components/Students/StudentCartBody";

const StudentCart = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <StudentCartBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentCart