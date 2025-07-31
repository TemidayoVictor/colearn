'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { admin_courses } from "@/services/admin";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import DashboardTopCourses from "../Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";
import Loader from "../Loader";

const AdminCoursesBody = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router);
            try {
                const response = await admin_courses();
                console.log(response)
                if (response.success) {
                    // save state globally
                    genralStore.getState().setData(response.data);
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

    if (loading) return <Loader />
    return (
        <div className="container-3">
            <div>
                <DashboardPerformance type="Course" subType='Admin'/>
            </div>
            <div className="spacing-inter res-flex justify-between">
                <DashboardTopCourses title="Top 6 Selling Instructors" type="sellers"/>
                <DashboardTopCourses title="Top Selling Courses"/>
            </div>
            <div>
                <DashboardTopCoursesTable type="admin"/>
            </div>
        </div>
    )
}

export default AdminCoursesBody