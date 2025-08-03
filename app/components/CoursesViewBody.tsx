import React from "react";
import ExplorePopular from "./ExplorePopular";
import ViewCoursesBody from "./ViewCoursesBody";
import ViewCoursesHero from "./ViewCoursesHero";

const CoursesViewBody = () => {
    return (
        <div>
            <ViewCoursesHero />
            <ViewCoursesBody />
            <ExplorePopular title="Student Also Bought" type="head" addContainerClass={true}/>
        </div>
    )
}

export default CoursesViewBody