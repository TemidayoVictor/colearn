import React, { ReactNode } from "react";
import UserSidebar from "./UserSidebar";
import UserMain from "./UserMain";

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout = ({children}: UserLayoutProps) => {
    return (
        <div className="user-layout">
            <div className="sidebar">
                <UserSidebar />
            </div>
            <div className="main">
                <UserMain />
                {children}
            </div>
        </div>
    )
}

export default UserLayout