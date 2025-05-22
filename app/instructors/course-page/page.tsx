import React from "react";
import UserLayout from "@/app/components/UserLayout";
import CourseContentBody from "@/app/components/Instructors/CourseContentBody";

const CoursePage = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <div>
                        <CourseContentBody />
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}

export default CoursePage;