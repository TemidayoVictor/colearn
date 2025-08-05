'use client';
import React, {useEffect, useState} from "react";
import { instructor_data_web } from "@/services/user";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { useParams } from "next/navigation";
import ViewTutorsHero from "../ViewTutorsHero";
import ViewTutorsBody from "../ViewTutorsBody";
import Loader from "../Loader";

const ViewInstructorBody = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const params = useParams();
    const userId = params?.tutor as any;

    useEffect(() => {
        const init = async () => {
            if(!userId) return
            try {
                const response = await instructor_data_web(userId);
                if (response.success) {
                    // save state globally
                    console.log(response.data)
                    genralStore.getState().setData(response.data);
                    genralStore.getState().setCourses(response.data.courses);
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
    }, [userId]);

    if (loading) return <Loader />
    return (
        <div>
            <ViewTutorsHero/>
            <ViewTutorsBody loggedIn />
        </div>
    )
}

export default ViewInstructorBody