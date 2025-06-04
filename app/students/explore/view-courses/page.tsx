import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentViewCoursesBody from "@/app/components/Students/StudentViewCoursesBody";

const StudentViewCourses = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <StudentViewCoursesBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentViewCourses