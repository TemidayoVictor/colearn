'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { useAuthStudent } from "@/hooks/useAuth";
import Loader from "../Loader";
import DashboardHeader from "@/app/components/Students/DashboardHeader";
import StudentDashboardPerformance from "@/app/components/Students/StudentDashboardPerformance";
import StudentCourseBox from "@/app/components/Students/StudentCourseBox";
import StudentPopularCertificatesBox from "./StudentPopularCertificatesBox";
import StudentBestInstructor from "./StudentBestInstructors";

const StudentDashboardBody = () => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); 
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    if(loading) return <Loader />

    return (
        <div>
            <div>
                <DashboardHeader />
            </div>
            <div className="container-3">
                <StudentDashboardPerformance />
                <StudentCourseBox />
                <StudentPopularCertificatesBox />
                <StudentBestInstructor />
            </div>
        </div>
    )
}

export default StudentDashboardBody;