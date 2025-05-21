import React from "react";
import UserLayout from "@/app/components/UserLayout";
import UploadCourseBody from "@/app/components/Instructors/UploadCourseBody";

const UploadCourse = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <UploadCourseBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default UploadCourse