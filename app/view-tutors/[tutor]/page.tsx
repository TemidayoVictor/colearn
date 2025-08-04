import React from "react";
import { Metadata } from "next";
import TutorsViewBody from "@/app/components/TutorsViewBody";

export const metadata: Metadata = {
    title: "View Tutors",
}

const ViewTutors = () => {
    return (
        <div>
            <TutorsViewBody />
        </div>
    )
}

export default ViewTutors