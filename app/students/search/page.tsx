import React from "react";
import UserLayout from "@/app/components/UserLayout";
import StudentsExploreBody from "@/app/components/Students/StudentsExploreBody";

const StudentSearch = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="">
                    <StudentsExploreBody title="Search Results: 10,482" type="sub" tabs={false} addContainerClass={true} loggedIn={true}/>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentSearch