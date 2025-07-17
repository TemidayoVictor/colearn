'use client';
import React, {useState, useEffect} from "react";
import ViewTutorsHero from "../ViewTutorsHero";
import AccountBody from "./AccountBody";
import { showErrorToast } from "@/utils/toastTypes";
import { courseStore } from "@/zustand/courseStore";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import { useAuthInstructors } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { instructor_experiences } from "@/services/onboarding";
import Loader from "../Loader";

const InstructorAccountBody = () => {

    const instructor = authStore((state) => state.instructor);
    const instructorId = instructor?.id;

    const [loading, setLoading] = useState<Boolean>(true);
    const newUpdate = courseStore((state) => state.newUpdate);

    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthInstructors(router); // ✅ valid usage
            if(!instructorId) return
            try {
                const response = await instructor_experiences(instructorId);
                if (response.success) {
                    console.log(response)
                    instructorStore.getState().setExperiences(response.data.experiences);
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

    }, [newUpdate, instructorId]);

    if(loading) return <Loader />
    
    return (
        <div>
            <div>
                <ViewTutorsHero />
                <div>
                    <AccountBody />
                </div>
            </div>
        </div>
    )
}

export default InstructorAccountBody