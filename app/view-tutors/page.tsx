import React from "react";
import { Metadata } from "next";
import ViewTutorsHero from "../components/ViewTutorsHero";
import ViewTutorsBody from "../components/ViewTutorsBody";

export const metadata: Metadata = {
    title: "View Tutors",
}

const ViewTutors = () => {
    return (
        <div>
            <ViewTutorsHero marginTop/>
            <ViewTutorsBody />
        </div>
    )
}

export default ViewTutors