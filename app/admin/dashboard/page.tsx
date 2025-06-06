import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminDashboardBody from "@/app/components/Admin/AdminDashboardBody";

const AdminDashboard = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div className="container-3">
                    <AdminDashboardBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminDashboard