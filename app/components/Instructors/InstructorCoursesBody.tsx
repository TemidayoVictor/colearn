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
import { get_all_instructor_courses } from "@/services/courses";
import { instructor_dashboard } from "@/services/user";
import { showErrorToast } from "@/utils/toastTypes";
import { genralStore } from "@/zustand/generalStore";

const InstructorsCoursesBody = () => {

    const router = useRouter();
    const newUpdate = courseStore((state) => state.newUpdate);

    const user = authStore((state) => state.user);
    const userId = user?.id;

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
                    // const response = await 
                    const [courseRes, dataRes] = await Promise.all([
                        get_all_instructor_courses(instructorId),
                        instructor_dashboard(userId),
                    ]);
                    if (courseRes.success) {
                        // save state globally
                        courseStore.getState().setCourses(courseRes.data.courses);
                    } 
        
                    else {
                        showErrorToast(courseRes.message)
                        console.log(courseRes)
                    }

                    if (dataRes.success) {
                        // save state globally
                        genralStore.getState().setData(dataRes.data);
                    } 
        
                    else {
                        showErrorToast(dataRes.message)
                        console.log(dataRes)
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