import React from "react";
import UserLayout from "@/app/components/UserLayout";
import SetAvailabilityBody from "@/app/components/Instructors/SetAvailabilityBody";

const SetAvailability = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <SetAvailabilityBody />
                </div>
            </UserLayout>
        </div>
    )
}
export default SetAvailability