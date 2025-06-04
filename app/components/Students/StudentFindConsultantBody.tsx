import React from "react";
import FindConsultantHero from "../FindConsultantHero";
import FindConsultantExplore from "../FindConsultantExplore";

const StudentFindConsultantBody = () => {
    return (
        <div>
            <FindConsultantHero loggedIn={true} />
            <FindConsultantExplore loggedIn={true} />
        </div>
    )
}

export default StudentFindConsultantBody