import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentFindConsultantBody from "@/app/components/Students/StudentFindConsultantBody";

const StudentFindConsultant = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <StudentFindConsultantBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentFindConsultant