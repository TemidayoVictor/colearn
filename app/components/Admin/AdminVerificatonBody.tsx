import React from "react";
import DashboardPerformance from "../Instructors/DashboardPerformance";

const AdminVerificationBody = () => {
    return (
        <div className="container-3">
            <DashboardPerformance user="admin" type="verification"/>
        </div>
    )
}

export default AdminVerificationBody