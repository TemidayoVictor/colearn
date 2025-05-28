import React from "react";
import DashboardHeader from "@/app/components/Students/DashboardHeader";
import StudentDashboardPerformance from "@/app/components/Students/StudentDashboardPerformance";
import StudentCourseBox from "@/app/components/Students/StudentCourseBox";
import StudentPopularCertificatesBox from "./StudentPopularCertificatesBox";

const StudentDashboardBody = () => {
    return (
        <div>
            <div>
                <DashboardHeader />
            </div>
            <div className="container-3">
                <StudentDashboardPerformance />
                <StudentCourseBox />
                <StudentPopularCertificatesBox />
            </div>
        </div>
    )
}

export default StudentDashboardBody;