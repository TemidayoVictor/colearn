import React from "react";
import Image from "next/image";
import ViewCoursesTestimonials from "../ViewCoursesTestimonials";

const CourseContentReviews = () => {
    return (
        <div className="course-content-reviews">
            <div className="flex justify-between items-center mb-4">
                <h2 className="title-2">All Reviews</h2>
                <p className="font-semibold">(32)</p>
            </div>
            <ViewCoursesTestimonials />
        </div>
    )
}

export default CourseContentReviews;