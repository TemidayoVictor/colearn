'use client';
import React, { ReactNode, useState } from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";

interface UserLayoutProps {
    children: ReactNode;
    userType?: string;
}

const UserLayout = ({children, userType}: UserLayoutProps) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="user-layout">
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <UserSidebar onMenuClick={() => setSidebarOpen(prev => !prev)} userType = {userType} />
            </div>
            <div className="main user-cover-mobile">
                <UserHeader onMenuClick={() => setSidebarOpen(prev => !prev)} userType = {userType}/>
                {children}
            </div>
        </div>
    )
}

export default UserLayout