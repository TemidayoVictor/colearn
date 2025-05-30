import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentLectureBody from "@/app/components/Students/StudentLectureBody";

const Lecture = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <StudentLectureBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default Lecture