import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminUsersBody from "@/app/components/Admin/AdminUsersBody";

const AdminUsers = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div>
                    <AdminUsersBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminUsers