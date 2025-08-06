import React from "react";
import UserLayout from "@/app/components/UserLayout";
import TutorsBody from "@/app/components/TutorsBody";

const StudentInstructor = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div>
                    <TutorsBody loggedIn={true}/>
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentInstructor