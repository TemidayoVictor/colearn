import React from "react";
import ExploreHero from "../ExploreHero";
import ExplorePopular from "../ExplorePopular";
import StudentPopularConsultant from "./StudentsPopularConsultants";

type StudentsExploreBodyProps = {
   title: string 
   type: string
   tabs: boolean
   addContainerClass: boolean
   loggedIn?: boolean 
}

const StudentsExploreBody = ({title, type, tabs, addContainerClass, loggedIn}: StudentsExploreBodyProps) => {
    return (
        <div>
            <ExploreHero loggedIn={loggedIn}/>
            <ExplorePopular title={title} type={type} tabs={tabs} addContainerClass={addContainerClass} loggedIn={loggedIn}/>
            <div className="container-3">
                <StudentPopularConsultant />
            </div>
        </div>
    )
}

export default StudentsExploreBody