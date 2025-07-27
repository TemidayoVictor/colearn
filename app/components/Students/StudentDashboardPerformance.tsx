import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import DashboardPerformance from "../Instructors/DashboardPerformance";

type StudentDashboardPerformanceProps = {
    progress?: number;
}

const StudentDashboardPerformance = ({progress}:StudentDashboardPerformanceProps) => {
    return (
        <div>
            <div className="student-dashboard-performance">
                <div className="left">
                    <h2 className="font-semibold text-[.9rem]">Overall Course Completion</h2>
                    <CircularProgressBar percentage={progress ? progress : 0} />
                </div>
                <div className="right">
                    <DashboardPerformance user="student"/>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboardPerformance