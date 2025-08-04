import React from "react";
import UtilitiesBody from "@/app/components/Admin/UtilitiesBody";
import UserLayout from "@/app/components/UserLayout";

const Utilities = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div>
                    <UtilitiesBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default Utilities