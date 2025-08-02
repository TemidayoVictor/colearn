'use client';
import React, {useEffect, useState} from "react";
import { showErrorToast } from "@/utils/toastTypes";
import { web_data } from "@/services/user";
import { genralStore } from "@/zustand/generalStore";
import HomeHero from "./HomeHero";
import HomeCourseList from "./HomeCourseList";
import HomeCertCourses from "./HomeCertCourses";
import HomeBenefits from "./HomeBenefits";
import HomeTutors from "./HomeTutors";
import HomeBooking from "./HomeBooking";
import HomeBanner from "./HomeBanner";
import HomeReviews from "./HomeReviews";
import HomeFaq from "./HomeFaq";
import Loader from "./Loader";

const HomeBody = () => {
    
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            try {
                const response = await web_data();

                if (response.success) {
                    console.log(response)
                    genralStore.getState().setWeb(response.data)
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            setLoading(false);
        };
        init();

    }, []);

    if(loading) return <Loader />
    return (
        <div>
            <HomeHero />

            <HomeCourseList />

            <HomeCertCourses />

            <HomeBenefits />
            
            <HomeTutors />

            <HomeBooking />

            <HomeBanner title="Become a Tutor and Instructor on CoLearn" subtitle="Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut." link="/" linkTitle="Register" />

            <HomeReviews />

            <HomeFaq />
        </div>
    )
}

export default HomeBody