import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminVerificationBody from "@/app/components/Admin/AdminVerificatonBody";

const AdminUserVerification = () => {
    return (
        <div>
            <UserLayout userType="admin" >
                <div>
                    <AdminVerificationBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminUserVerification