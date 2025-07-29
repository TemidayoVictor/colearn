'use client';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import { useAuthInstructors } from "@/hooks/useAuth";
import { instructor_dashboard } from "@/services/user";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { authStore } from "@/zustand/authStore";
import { showErrorToast } from "@/utils/toastTypes";
import DashboardPerformance from "./DashboardPerformance";
import DashboardRevenue from "./DashboardRevenue";
import DashboardTopCourses from "./DashboardTopCourses";
import DashboardTopCoursesTable from "./DashboardTopCoursesTable";


const InstructorsDashboardBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const user = authStore((state) => state.user);
    const userId = user?.id;

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        const init = async () => {
            await useAuthInstructors(router); // ✅ valid usage
            if(!userId) return
            try {
                const response = await instructor_dashboard(userId);
                if (response.success) {
                    // save state globally
                    console.log(response.data)
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
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();
    }, [newUpdate, userId]);

    if (loading) return <Loader />

    return (
        <div>
            <div className="container-3">
                    <div>
                        <DashboardPerformance type="Dashboard" />
                    </div>
                    <div className="dashboard-flex spacing-inter">
                        <DashboardRevenue style="two"/>
                        {/* <DashboardTopCourses /> */}
                    </div>
                    <div>
                        <DashboardTopCoursesTable />
                    </div>
                </div>
        </div>
    )
}

export default InstructorsDashboardBody