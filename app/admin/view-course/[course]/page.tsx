import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentViewCourseBody from "@/app/components/Students/StudentViewCourseBody";

const ViewCoursePage = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div className="container-3">
                    <StudentViewCourseBody type="admin"/>
                </div>
            </UserLayout>
        </div>
    )
}

export default ViewCoursePage;