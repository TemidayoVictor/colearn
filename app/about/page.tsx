import React from "react";
import { Metadata } from "next";
import AboutHero from "@/app/components/AboutHero";
import AboutWe from "@/app/components/AboutWe";
import AboutDo from "@/app/components/AboutDo";
import HomeReviews from "@/app/components/HomeReviews";

export const metadata: Metadata = {
    title: "About Us",
}

const About = () => (
    <div>
        <AboutHero />
        <AboutWe />
        <AboutDo />
        <HomeReviews/>
    </div>
)

export default About