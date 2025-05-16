import React from "react";
import { Metadata } from "next";
import ViewCoursesHero from "../components/ViewCoursesHero";
import ViewCoursesBody from "../components/ViewCoursesBody";
import ExplorePopular from "../components/ExplorePopular";

export const metadata: Metadata = {
    title: "View Courses",
}

const ViewCourses = () => {
    return (
        <div>
            <ViewCoursesHero />
            <ViewCoursesBody />
            <ExplorePopular title="Student Also Bought" type="head"/>
        </div>
    )
}

export default ViewCourses