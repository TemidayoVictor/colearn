'use client';
import React from "react";
import { useParams } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import ExplorePopular from "./ExplorePopular";
import ViewCoursesBody from "./ViewCoursesBody";
import ViewCoursesHero from "./ViewCoursesHero";

const CoursesViewBody = () => {
    const params = useParams();
    const courseId = params?.course as any;

    const course = genralStore.getState().getCourseById(courseId);
    if(course) {
        courseStore.getState().setCourse(course)
    }
    
    return (
        <div>
            <ViewCoursesHero />
            <ViewCoursesBody />
            <ExplorePopular title="Student Also Bought" type="head" addContainerClass={true}/>
        </div>
    )
}

export default CoursesViewBody