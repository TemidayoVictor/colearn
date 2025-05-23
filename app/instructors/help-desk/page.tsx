import React from "react";
import UserLayout from "@/app/components/UserLayout";
import HelpDeskBody from "@/app/components/Instructors/HelpDeskBody";

const HelpDesk = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <HelpDeskBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default HelpDesk;