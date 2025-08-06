import React from "react";
import UserLayout from "@/app/components/UserLayout";
import ConsultantBody from "@/app/components/ConsultantBody";

const StudentConsultants = () => {
    return (
        <div>
             <UserLayout userType="student">
                <div>
                    <ConsultantBody loggedIn={true}/>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentConsultants