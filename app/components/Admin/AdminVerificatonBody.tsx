import React from "react";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import AdminVerificationTable from "./AdminVerificationTable";

const AdminVerificationBody = () => {
    return (
        <div className="container-3">
            <DashboardPerformance user="admin" type="verification"/>
            <div>
                <AdminVerificationTable />
            </div>
        </div>
    )
}

export default AdminVerificationBody