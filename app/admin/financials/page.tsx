import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminTransactionBody from "@/app/components/Admin/AdminTransactionsBody";

const AdminFinancials = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div className="container-3">
                    <AdminTransactionBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminFinancials