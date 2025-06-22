import React from "react";
import UserLayout from "@/app/components/UserLayout";
import UploadCourseDataBody from "@/app/components/Instructors/UploadCourseDataBody";

const UploadCourseData = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <UploadCourseDataBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default UploadCourseData