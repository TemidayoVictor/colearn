import React from "react";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import DashboardTopCourses from "../Instructors/DashboardTopCourses";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";

const AdminCoursesBody = () => {
    return (
        <div className="container-3">
            <div>
                <DashboardPerformance type="Course"/>
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