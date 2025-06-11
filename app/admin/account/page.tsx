import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminAccountBody from "@/app/components/Admin/AdminAccountBody";

const AdminAccount = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div className="container-3">
                    <AdminAccountBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminAccount