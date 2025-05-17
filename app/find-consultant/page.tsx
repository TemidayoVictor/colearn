import React from "react";
import { Metadata } from "next";
import FindConsultantHero from "../components/FindConsultantHero";
import FindConsultantExplore from "../components/FindConsultantExplore";

export const metadata: Metadata = {
    title: "Find Consultant",
}

const FindConsultant = () => {
    return (
        <div>
            <FindConsultantHero />
            <FindConsultantExplore />
        </div>
    )
}

export default FindConsultant