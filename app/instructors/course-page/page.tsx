import React from "react";
import UserLayout from "@/app/components/UserLayout";
import CourseContentBody from "@/app/components/Instructors/CourseContentBody";
import CourseContentReviews from "@/app/components/Instructors/CourseContentReviews";
import CourseRevenue from "@/app/components/Instructors/CourseRevenue";

const CoursePage = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <div>
                        <CourseRevenue link='/instructors/courses'/>
                    </div>
                    <div className="course-content container-3b">
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