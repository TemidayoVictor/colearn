import React from "react";
import AdminVerificationTable from "./AdminVerificationTable";

const AdminUsersBody = () => {
    return (
        <div className="container-3">
            <div>
                <h2 className="title-2">Administrative Users</h2>
                <div>
                    < AdminVerificationTable type="admin-users"/>
                </div>
            </div>
        </div>
    )
}

export default AdminUsersBody