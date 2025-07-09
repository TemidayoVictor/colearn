'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { useAuthStudent } from "@/hooks/useAuth";
import { get_all_consultants } from "@/services/consultant";
import { get_all_courses } from "@/services/courses";
import { showErrorToast } from "@/utils/toastTypes";
import Loader from "../Loader";
import ExploreHero from "../ExploreHero";
import ExplorePopular from "../ExplorePopular";
import StudentPopularConsultant from "./StudentsPopularConsultants";

type StudentsExploreBodyProps = {
   title: string 
   type: string
   tabs: boolean
   addContainerClass: boolean
   loggedIn?: boolean 
}

const StudentsExploreBody = ({title, type, tabs, addContainerClass, loggedIn}: StudentsExploreBodyProps) => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    // fetch courses
    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); 
            // fetch all consultants
            try {
                const response = await get_all_courses();
                
                if (response.success) {
                    // save state globally
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

            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    // fetch the consultants
    useEffect(() => {
        setLoading(true);
        const init = async () => {
            try {
                const response = await get_all_consultants();
                if (response.success) {
                    // save state globally
                    genralStore.getState().setConsultants(response.data.consultants);
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
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    if(loading) return <Loader />
    
    return (
        <div>
            <ExploreHero loggedIn={loggedIn}/>
            <ExplorePopular title={title} type={type} tabs={tabs} addContainerClass={addContainerClass} loggedIn={loggedIn}/>
            <div className="container-3">
                <StudentPopularConsultant />
            </div>
        </div>
    )
}

export default StudentsExploreBody