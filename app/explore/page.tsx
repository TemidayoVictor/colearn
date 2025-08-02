import React from "react";
import { Metadata } from "next";
import ExploreHero from "../components/ExploreHero";
import ExplorePopularGeneral from "../components/ExplorePopularGeneral";

export const metadata: Metadata = {
    title: "Explore",
}

const Explore = () => {
    return (
        <div>
            <ExploreHero />
            <ExplorePopularGeneral/>
        </div>   
    )
}

export default Explore