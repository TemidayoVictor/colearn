import React from "react";
import UserLayout from "@/app/components/UserLayout";
import ViewTutorsHero from "@/app/components/ViewTutorsHero";
import ViewTutorsBody from "@/app/components/ViewTutorsBody";

const StudentViewTutors = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <ViewTutorsHero/>
                    <ViewTutorsBody loggedIn={true}/>
                </div>
            </UserLayout> 
        </div>
    )
}

export default StudentViewTutors