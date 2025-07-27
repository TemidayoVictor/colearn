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
    const courses = genralStore((state) => state.courses);

    useEffect(() => {
        setLoading(true);
      
        const init = async () => {
          try {
                await useAuthStudent(router);
        
                const [coursesRes, consultantsRes] = await Promise.all([
                    get_all_courses(),
                    get_all_consultants(),
                ]);
        
                if (coursesRes.success) {
                    genralStore.getState().setCourses(coursesRes.data.courses);
                } 
                
                else {
                    showErrorToast(coursesRes.message);
                }
        
                if (consultantsRes.success) {
                    genralStore.getState().setConsultants(consultantsRes.data.consultants);
                } 
                else {
                    showErrorToast(consultantsRes.message);
                }
            } 
            
            catch (error) {
                showErrorToast("Something unexpected happened");
                console.error(error);
            }
      
            courseStore.getState().setNewUpdate("reset");
            setLoading(false);
        };
      
        init();
    }, [newUpdate]);
      

    if(loading || !courses || courses.length === 0) return <Loader />
    
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