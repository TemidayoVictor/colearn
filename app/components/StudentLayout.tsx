'use client';
import React, {ReactNode, useState} from "react";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";

interface StudentLayoutProps {
    children: ReactNode;
}

const StudentLayout = ({children}:StudentLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="user-layout">
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <StudentSidebar onMenuClick={() => setSidebarOpen(prev => !prev)} />
            </div>
            <div className="main user-cover-mobile">
                <StudentHeader onMenuClick={() => setSidebarOpen(prev => !prev)}/>
                {children}
            </div>
        </div>
    )
}

export default StudentLayout;