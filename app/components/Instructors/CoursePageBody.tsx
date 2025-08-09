import React from "react";
import CourseRevenue from "./CourseRevenue";
import CourseContentBody from "./CourseContentBody";
import CourseContentReviews from "./CourseContentReviews";

const CoursePageBody = () => {
    return (
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
    )
}

export default CoursePageBody