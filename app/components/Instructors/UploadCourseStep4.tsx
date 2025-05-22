import React from "react";
import Image from "next/image";
import Link from "next/link";   
import EmptyPage from "../EmptyPage";

const UploadCourseStep4 = () => {
    return (
        <div>
            <EmptyPage image="/assets/images/success.png" link="/" linkTitle="Proceed to course data page" header="Course Created  Successfully" content="You're ready to teach! Your course is now available for students to purchase and enroll." imageWidth={192} imageHeight={200} centerHeader={true}/>
        </div>
    )
}

export default UploadCourseStep4;