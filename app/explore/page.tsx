import React from "react";
import { Metadata } from "next";
import ExploreHero from "../components/ExploreHero";
import ExplorePopular from "../components/ExplorePopular";

export const metadata: Metadata = {
    title: "Explore",
}

const Explore = () => {
    return (
        <div>
            <ExploreHero />
            <ExplorePopular title="Explore Our Most popular courses and skills" type="head" tabs={true}/>
        </div>   
    )
}

export default Explore