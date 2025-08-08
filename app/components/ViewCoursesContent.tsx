import React from "react";
import { courseStore } from "@/zustand/courseStore";

const ViewCoursesContent = () => {
    const course = courseStore((state) => state.course)
    return (
        <div className="view-course-content">
            <div
                className="content-sect"
                dangerouslySetInnerHTML={{ __html: course?.description || "" }}
            />
        </div>
    )
}

export default ViewCoursesContent