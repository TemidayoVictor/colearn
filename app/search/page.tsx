import React from "react";
import { Metadata } from "next";
import ExploreHero from "../components/ExploreHero";
import ExplorePopular from "../components/ExplorePopular";

export const metadata: Metadata = {
    title: "Search",
}

const Search = () => {
    return (
        <div>
            <ExploreHero />
            <ExplorePopular title="Search Results: 10,482" type="sub" />
        </div>
    )
}

export default Search