import React from "react";
import UserLayout from "@/app/components/UserLayout";
import ViewTutorsHero from "@/app/components/ViewTutorsHero";
import AccountBody from "@/app/components/Instructors/AccountBody";

const AccountPage = () => {
    return (
        <div>
            <UserLayout>
                <ViewTutorsHero />
                <div>
                    <AccountBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default AccountPage;