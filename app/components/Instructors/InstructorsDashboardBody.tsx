import React from "react";
import DashboardPerformance from "./DashboardPerformance";
import DashboardRevenue from "./DashboardRevenue";
import DashboardTopCourses from "./DashboardTopCourses";
import DashboardTopCoursesTable from "./DashboardTopCoursesTable";
import EmptyPage from "../EmptyPage";

const InstructorsDashboardBody = () => {
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