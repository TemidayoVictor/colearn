'use client';
import React, {useState, useEffect} from "react";
import AdminDashboardPerformance from "./AdminDashboardPerformance";
import AdminDashboardDetails from "./AdminDashboardDetails";
import DashboardRevenue from "../Instructors/DashboardRevenue";
import DashboardTopCourses from "../Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";
import { genralStore } from "@/zustand/generalStore";
import { admin_dashboard } from "@/services/admin";
import { showErrorToast } from "@/utils/toastTypes";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import Loader from "../Loader";

const AdminDashboardBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router);
            try {
                const response = await admin_dashboard();
                
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
        <div>
            <AdminDashboardPerformance />
            <AdminDashboardDetails />
            <div className="dashboard-flex spacing-inter">
                <DashboardRevenue type="countries"/>
                <DashboardTopCourses/>
            </div>
            {/* <div>
                <DashboardTopCoursesTable />
            </div> */}
        </div>
    )
}

export default AdminDashboardBody