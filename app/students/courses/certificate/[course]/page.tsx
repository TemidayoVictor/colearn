import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentCertificatePageBody from "@/app/components/Students/StudentCertificatePageBody";

const CertificatePage = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <StudentCertificatePageBody />
                </div>
            </UserLayout> 
        </div>
    )
}

export default CertificatePage