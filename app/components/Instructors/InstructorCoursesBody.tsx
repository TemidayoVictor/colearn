'use client';
import React, {useEffect} from "react";
import DashboardPerformance from "./DashboardPerformance";
import CoursesBody from "./CoursesBody";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";
import { useAuthInstructors } from "@/hooks/useAuth";
import { get_all_courses } from "@/services/courses";
import { showErrorToast } from "@/utils/toastTypes";

const InstructorsCoursesBody = () => {

    const router = useRouter();
    const newUpdate = courseStore((state) => state.newUpdate);

    const {
        loading,
        setLoading,
    } = UseCourses();


    useEffect(() => {
        // set loading
        setLoading(true);

        const init = async () => {
            await useAuthInstructors(router);
            const instructorId = authStore.getState().instructor?.id;
            
            if (instructorId) {
                try {
                    const response = await get_all_courses(instructorId)
                    if (response.success) {
                        // save state globally
                        courseStore.getState().setCourses(response.data.courses);
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
            }
            
            setLoading(false);
            courseStore.getState().setNewUpdate('reset');
        };

        init();

    }, [newUpdate]);

    if(loading) return <Loader />

    return (
        <div className="container-3">
            <div>
                <DashboardPerformance type="Course" />
            </div>
            <div>
                <CoursesBody />
            </div>
        </div>
    )
}

export default InstructorsCoursesBody