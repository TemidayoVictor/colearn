import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentsExploreBody from "@/app/components/Students/StudentsExploreBody";

const StudentExplore = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="">
                    <StudentsExploreBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentExplore