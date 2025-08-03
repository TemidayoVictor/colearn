import React from "react";
import { Metadata } from "next";
import CoursesViewBody from "@/app/components/CoursesViewBody";

export const metadata: Metadata = {
    title: "View Courses",
}

const ViewCourses = () => {
    return (
        <div>
            <CoursesViewBody />
        </div>
    )
}

export default ViewCourses