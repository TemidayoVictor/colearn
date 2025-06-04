import React from "react";
import ViewCoursesHero from "../ViewCoursesHero";
import ViewCoursesBody from "../ViewCoursesBody";
import ExplorePopular from "../ExplorePopular";

const StudentViewCoursesBody = () => {
    return (
        <div>
            <ViewCoursesHero loggedIn={true} />
            <ViewCoursesBody />
            <ExplorePopular title="Student Also Bought" type="head" loggedIn={true} addContainerClass={true}/>
        </div>
    )
}

export default StudentViewCoursesBody