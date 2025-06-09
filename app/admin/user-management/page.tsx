import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminManagementBody from "@/app/components/Admin/AdminManagementBody";

const AdminUserManagement = () => {
    return (
        <div>
            <UserLayout userType="admin" >
                <div>
                    <AdminManagementBody/>
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminUserManagement