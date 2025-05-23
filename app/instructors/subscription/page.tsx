import React from "react";
import SubscriptionBody from "@/app/components/Instructors/SubscriptionBody";
import UserLayout from "@/app/components/UserLayout";

const Subscription = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <SubscriptionBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default Subscription;