import React from "react";
import UserLayout from "@/app/components/UserLayout";
import CourseContentBody from "@/app/components/Instructors/CourseContentBody";
import CourseContentReviews from "@/app/components/Instructors/CourseContentReviews";

const CoursePage = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <div className="course-content">
                        <div className="left">
                            <CourseContentBody />
                        </div>
                        <div className="right">
                            <CourseContentReviews />
                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}

export default CoursePage;