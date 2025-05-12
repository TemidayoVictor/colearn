import React from "react";
import { Metadata } from "next";
import BecomeTutorHero from "../components/BecomeTutorHero";
import BecomeTutorBegin from "../components/BecomeTutorBegin";
import BecomeTutorStart from "../components/BecomeTutorStart";
import HomeBanner from "../components/HomeBanner";
import HomeFaq from "../components/HomeFaq";

export const metadata: Metadata = {
    title: "Become a Tutor",
}

const BecomeTutor = () => {
    return (
        <div>
            <BecomeTutorHero />
            <BecomeTutorBegin />
            <BecomeTutorStart />
            <HomeBanner title="You won’t have to do it alone." subtitle="Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. " link="/" linkTitle="Become a Tutor Now" />
            <HomeFaq />
        </div>
    )
}

export default BecomeTutor