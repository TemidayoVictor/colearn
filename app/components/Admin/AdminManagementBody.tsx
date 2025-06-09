import React from "react";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import AdminVerificationTable from "./AdminVerificationTable";

const AdminManagementBody = () => {
    return (
        <div>
            <div className="container-3">
                <DashboardPerformance user="admin" type="management"/>
                <div>
                    <AdminVerificationTable type="management"/>
                </div>
            </div>
        </div>
    )
}

export default AdminManagementBody