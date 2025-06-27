import React from "react";
import UserLayout from "@/app/components/UserLayout";
import BecomeConsultantBody from "@/app/components/Instructors/BecomeConsultantBody";

const BecomeConsultant = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <BecomeConsultantBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default BecomeConsultant