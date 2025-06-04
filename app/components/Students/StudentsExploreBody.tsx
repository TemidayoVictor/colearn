import React from "react";
import ExploreHero from "../ExploreHero";
import ExplorePopular from "../ExplorePopular";
import StudentPopularConsultant from "./StudentsPopularConsultants";

const StudentsExploreBody = () => {
    return (
        <div>
            <ExploreHero loggedIn={true}/>
            <ExplorePopular title="Explore Our Most popular courses and skills" type="head" tabs={true} addContainerClass={true} loggedIn={true}/>
            <div className="container-3">
                <StudentPopularConsultant />
            </div>
        </div>
    )
}

export default StudentsExploreBody