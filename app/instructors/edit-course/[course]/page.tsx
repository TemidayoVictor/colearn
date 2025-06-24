import React from "react";
import UserLayout from "@/app/components/UserLayout";
import EditCourseBody from "@/app/components/Instructors/EditCourseBody";

const EditCourse = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <EditCourseBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default EditCourse