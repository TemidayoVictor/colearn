import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import DashboardPerformance from "../Instructors/DashboardPerformance";

const StudentDashboardPerformance = () => {
    return (
        <div className="container-3">
            <div className="student-dashboard-performance">
                <div className="left">
                    <h2 className="font-semibold text-[.9rem]">Overall Course Performance</h2>
                    <CircularProgressBar percentage={90} />
                </div>
                <div className="right">
                    <DashboardPerformance user="student"/>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboardPerformance