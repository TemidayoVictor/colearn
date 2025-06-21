import React from "react";
import UserLayout from "@/app/components/UserLayout";
import UploadVideoBody from "@/app/components/Instructors/UploadVideoBody";

const UploadVideo = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <UploadVideoBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default UploadVideo