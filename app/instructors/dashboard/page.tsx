import React from "react";
import UserLayout from "@/app/components/UserLayout";
import DashboardPerformance from "@/app/components/Instructors/DashboardPerformance";
import DashboardRevenue from "@/app/components/Instructors/DashboardRevenue";
import DashboardTopCourses from "@/app/components/Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "@/app/components/Instructors/DashboardTopCoursesTable";
import EmptyPage from "@/app/components/EmptyPage";

const InstructorsDashboard = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <div>
                        <DashboardPerformance />
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
                
            </UserLayout>
        </div>
    )
} 

export default InstructorsDashboard