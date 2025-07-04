import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentsExploreBody from "@/app/components/Students/StudentsExploreBody";

const StudentExplore = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="">
                    <StudentsExploreBody title="Explore Our Most popular courses and skills" type="head" tabs={true} addContainerClass={true} loggedIn={true}/>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentExplore