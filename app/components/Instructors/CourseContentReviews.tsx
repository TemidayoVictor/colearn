import React from "react";
import ViewCoursesTestimonials from "../ViewCoursesTestimonials";
import { genralStore } from "@/zustand/generalStore";

const CourseContentReviews = () => {
    const reviewsNumber = genralStore((state) => state.course?.reviews)?.length;
    return (
        <div className="course-content-reviews">
            <div className="flex justify-between items-center mb-4">
                <h2 className="title-2">All Reviews</h2>
                <p className="font-semibold">({reviewsNumber})</p>
            </div>
            <ViewCoursesTestimonials />
        </div>
    )
}

export default CourseContentReviews;