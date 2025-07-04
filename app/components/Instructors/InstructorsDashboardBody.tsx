'use client';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import { useAuthInstructors } from "@/hooks/useAuth";
import DashboardPerformance from "./DashboardPerformance";
import DashboardRevenue from "./DashboardRevenue";
import DashboardTopCourses from "./DashboardTopCourses";
import DashboardTopCoursesTable from "./DashboardTopCoursesTable";
import EmptyPage from "../EmptyPage";
import ButtonLoader from "../buttonLoader";


const InstructorsDashboardBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const init = async () => {
            await useAuthInstructors(router); // ✅ valid usage
            setLoading(false);
        };
        init();
    }, []);

    if (loading) return <Loader />

    return (
        <div>
            <div className="container-3">
                    <div>
                        <DashboardPerformance type="Dashboard" />
                    </div>
                    <div className="dashboard-flex spacing-inter">
                        <DashboardRevenue />
                        <DashboardTopCourses />
                    </div>
                    <div>
                        <DashboardTopCoursesTable />
                    </div>

                    <div>
                        <EmptyPage image="/assets/images/empty-image.png" link="/" linkTitle="Upload Course" header="Let Get You Started!!" content="Get started! Upload your first course and share your knowledge with the world." imageWidth={400} imageHeight={240}/>
                    </div>

                </div>
        </div>
    )
}

export default InstructorsDashboardBody