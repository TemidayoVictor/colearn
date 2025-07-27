'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { authStore } from "@/zustand/authStore";
import { useAuthStudent } from "@/hooks/useAuth";
import { genralStore } from "@/zustand/generalStore";
import Loader from "../Loader";
import DashboardHeader from "@/app/components/Students/DashboardHeader";
import StudentDashboardPerformance from "@/app/components/Students/StudentDashboardPerformance";
import StudentCourseBox from "@/app/components/Students/StudentCourseBox";
import StudentPopularCertificatesBox from "./StudentPopularCertificatesBox";
import StudentBestInstructor from "./StudentBestInstructors";
import { showErrorToast } from "@/utils/toastTypes";
import { student_dashboard } from "@/services/user";

const StudentDashboardBody = () => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);
    const [totalProgress, setTotalProgress] = useState<number>(0);

    const user = authStore((state) => state.user);
    const userId = user?.id;
    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); 
            if(!userId) return
            try {
                const response = await student_dashboard(userId);
                
                if (response.success) {
                    // save state globally
                    console.log(response)
                    genralStore.getState().setEnrollments(response.data.enrollments);
                    genralStore.getState().setInstructors(response.data.instructors);
                    genralStore.getState().setCourses(response.data.popularCourses);
                    setTotalProgress(response.data.totalProgress);
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

    }, [newUpdate, userId]);

    if(loading) return <Loader />

    return (
        <div>
            <div>
                <DashboardHeader />
            </div>
            <div className="container-3">
                <StudentDashboardPerformance progress={totalProgress}/>
                <StudentCourseBox />
                <StudentPopularCertificatesBox />
                <StudentBestInstructor />
            </div>
        </div>
    )
}

export default StudentDashboardBody;