import React from "react";
import DashboardHeader from "@/app/components/Students/DashboardHeader";
import StudentDashboardPerformance from "@/app/components/Students/StudentDashboardPerformance";
import StudentCourseBox from "@/app/components/Students/StudentCourseBox";
import StudentPopularCertificatesBox from "./StudentPopularCertificatesBox";
import StudentBestInstructor from "./StudentBestInstructors";

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
                <StudentBestInstructor />
            </div>
        </div>
    )
}

export default StudentDashboardBody;