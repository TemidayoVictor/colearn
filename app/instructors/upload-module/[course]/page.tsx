import React from "react";
import UserLayout from "@/app/components/UserLayout";
import UploadModuleBody from "@/app/components/Instructors/UploadModuleBody";

type UploadModuleProps = {
    params: {
        course: string
    }
}

const UploadModule = ({params}: UploadModuleProps) => {
    const { course } = params
    return (
        <div>
            <UserLayout>
                <div>
                    <UploadModuleBody course_id = {course}/>
                </div>
            </UserLayout>
        </div>
    )
}

export default UploadModule