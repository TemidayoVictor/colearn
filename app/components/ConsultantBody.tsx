'use client';
import React, {useState, useEffect} from "react";
import HomeBookings from "./HomeBooking";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { web_data } from "@/services/user";
import HomeTutors from "./HomeTutors";
import Loader from "./Loader";

const ConsultantBody = () => {
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
        <div className="mt-[5em]">
            <HomeBookings page={true}/>
        </div>
    )
}

export default ConsultantBody