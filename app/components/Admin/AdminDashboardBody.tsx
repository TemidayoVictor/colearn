'use client';
import React, {useState, useEffect} from "react";
import AdminDashboardPerformance from "./AdminDashboardPerformance";
import AdminDashboardDetails from "./AdminDashboardDetails";
import DashboardRevenue from "../Instructors/DashboardRevenue";
import DashboardTopCourses from "../Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import Loader from "../Loader";

const AdminDashboardBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router); // ✅ valid usage
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
            <div>
                <DashboardTopCoursesTable />
            </div>
        </div>
    )
}

export default AdminDashboardBody