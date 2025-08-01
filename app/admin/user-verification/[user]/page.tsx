import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminuserProfileBody from "@/app/components/Admin/AdminUserProfileBody";

const AdminUserProfile = () => {
    return (
        <div>
            <UserLayout userType="admin" >
                <div>
                    <AdminuserProfileBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminUserProfile