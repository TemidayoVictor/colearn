import React from "react";
import { courseStore } from "@/zustand/courseStore";

const ViewCoursesContent = () => {
    const course = courseStore((state) => state.course)
    return (
        <div className="view-course-content">
            <div className="content-sect">
                <p>{course?.description}</p>
            </div>
            
        </div>
    )
}

export default ViewCoursesContent