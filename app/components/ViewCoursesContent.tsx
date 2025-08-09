import React from "react";
import { courseStore } from "@/zustand/courseStore";

const ViewCoursesContent = () => {
    const course = courseStore((state) => state.course)
    return (
        <div>
            <div className="view-course-content">
                <div
                    className="content-sect"
                    dangerouslySetInnerHTML={{ __html: course?.description || "" }}
                />
            </div>

            <div className="view-course-content mt-4">
                <h2 className="title-3">Who can enroll</h2>
                <div
                    className="content-sect"
                    dangerouslySetInnerHTML={{ __html: course?.who_can_enroll || "" }}
                />
            </div>
        </div>
    )
}

export default ViewCoursesContent