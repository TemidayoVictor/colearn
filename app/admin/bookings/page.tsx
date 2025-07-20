import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminBookingBody from "@/app/components/Admin/AdminBookingBody";

const AdminBookings = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div>
                    <AdminBookingBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AdminBookings