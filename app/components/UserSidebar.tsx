'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstructorSidebarContent from "./Instructors/InstructorSidebarContent";
import StudentSidebarContent from "./Students/StudentSidebarContent";
import AdminSideBarContent from "./Admin/AdminSideBarContent";

type UserSidebarProps = {
    onMenuClick: () => void;
    userType?: string;
};

const UserSidebar = ({onMenuClick, userType}:UserSidebarProps) => {
    return (
        <div className="">
            <aside>
                <div className="container-3 sidebar-logo flex items-center justify-between">
                    <Link href='/' className="flex">
                        <Image
                            aria-hidden
                            src="/assets/images/favicon-logo-2.png"
                            alt="Colearn Image"
                            width={45}
                            height={40}
                            className="object-cover desktop"
                        />
                        <Image
                            aria-hidden
                            src="/assets/images/logo-2-blue.png"
                            alt="Colearn Image"
                            width={103}
                            height={40}
                            className="object-cover"
                        />
                    </Link>
                    <Image
                        aria-hidden
                        src="/assets/images/sidebar-close.png"
                        alt="Colearn Image"
                        width={24}
                        height={24}
                        className="object-cover mobile"
                        onClick={onMenuClick}
                    />
                </div>

                {
                    !userType &&  
                    <InstructorSidebarContent />
                }

                {
                    userType == "student" &&
                    <StudentSidebarContent />
                }

                {
                    userType == "admin" &&
                    <AdminSideBarContent />
                }
            </aside>
        </div>
    )
}

export default UserSidebar