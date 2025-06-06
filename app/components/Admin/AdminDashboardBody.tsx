import React from "react";
import AdminDashboardPerformance from "./AdminDashboardPerformance";
import AdminDashboardDetails from "./AdminDashboardDetails";
import DashboardRevenue from "../Instructors/DashboardRevenue";
import DashboardTopCourses from "../Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";

const AdminDashboardBody = () => {
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