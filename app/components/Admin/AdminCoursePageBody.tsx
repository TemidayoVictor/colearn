'use client';
import React from "react";
import CourseRevenue from "../Instructors/CourseRevenue";
import CourseContentBody from "../Instructors/CourseContentBody";
import CourseContentReviews from "../Instructors/CourseContentReviews";

const AdminCoursePageBody = () => {
    return(
        <div >
            <div>
                <div>
                    <CourseRevenue link='/instructors/courses' type='admin'/>
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
        </div>
    )
}

export default AdminCoursePageBody
