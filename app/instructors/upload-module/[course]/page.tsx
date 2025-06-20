import React from "react";
import UserLayout from "@/app/components/UserLayout";
import UploadModuleBody from "@/app/components/Instructors/UploadModuleBody";

const UploadModule = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <UploadModuleBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default UploadModule