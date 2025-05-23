'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserSidebarProps = {
    onMenuClick: () => void;
};

const UserSidebar = ({onMenuClick}:UserSidebarProps) => {
    const pathname = usePathname();
    return (
        <div className="">
            <aside>
                <div className="container-3 sidebar-logo flex items-center justify-between">
                    <div className="flex">
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
                    </div>
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

                <div className="sidebar-body container-3">
                    <div>
                        <div>
                            <Link href='/instructors/dashboard' className={`sidebar-link ${pathname == '/instructors/dashboard' ? 'active' : ''}`} >
                                {
                                    pathname == '/instructors/dashboard' ? (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/element-2-1-active.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                    ) : (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/element-2-1.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                    )
                                }
                                <p className="text-[.9rem]">Dashboard</p>
                            </Link>

                            <Link href='/instructors/courses' className={`sidebar-link ${pathname == '/instructors/courses' || pathname == '/instructors/upload-course' || pathname == '/instructors/course-page' ? 'active' : ''}`}>
                                {
                                    pathname == '/instructors/courses' || pathname == '/instructors/upload-course' || pathname == '/instructors/course-page' ? (

                                        <Image
                                            aria-hidden
                                            src="/assets/images/teacher-active.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />

                                    ) : (

                                        <Image
                                            aria-hidden
                                            src="/assets/images/teacher.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />

                                    )
                                }
                                <p className="text-[.9rem]">Course Management</p>
                            </Link>

                            <Link href='/' className="sidebar-link">
                                <Image
                                    aria-hidden
                                    src="/assets/images/people.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                                <p className="text-[.9rem]">Community</p>
                            </Link>
                        </div>

                        <div className="sidebar-break">

                            <Link href='/instructors/account' className={`sidebar-link ${pathname == '/instructors/account' ? 'active' : ''}`}>
                                {
                                    pathname == '/instructors/account' ? (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/profile-circle-active.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />

                                    ) : (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/profile-circle.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                    )
                                }
                                <p className="text-[.9rem]">Account</p>
                            </Link>

                            <Link href='/instructors/subscription' className={`sidebar-link ${pathname == '/instructors/subscription' ? 'active' : ''}`}>
                                {
                                    pathname == '/instructors/subscription' ? (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/moneys-active.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                    ) : (
                                        <Image
                                            aria-hidden
                                            src="/assets/images/moneys.png"
                                            alt="Colearn Image"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                    )
                                }
                                <p className="text-[.9rem]">Subscription</p>
                            </Link>

                            <Link href='/instructors/payment-transactions' className={`sidebar-link ${pathname == '/instructors/payment-transactions' ? 'active' : ''}`}>
                            {
                                pathname == '/instructors/payment-transactions' ? (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/note-active.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/note.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                    />
                                )
                            }
                                <p className="text-[.9rem]">Payment Transaction</p>
                            </Link>

                            <Link href='/' className="sidebar-link">
                                <Image
                                    aria-hidden
                                    src="/assets/images/setting-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                                <p className="text-[.9rem]">Settings</p>
                            </Link>

                        </div>
                    </div>
                    <div className="sidebar-break">
                        <Link href='/instructors/help-desk' className={`sidebar-link ${pathname == '/instructors/help-desk' ? 'active' : ''}`}>
                            {
                                pathname == '/instructors/help-desk' ? (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/help-active.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/help-2.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                    />
                                )
                            }          
                            <p className="text-[.9rem]">Help Desk</p>
                        </Link>

                        <Link href='/' className="sidebar-link">
                            <Image
                                aria-hidden
                                src="/assets/images/teacher.png"
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />
                            <p className="text-[.9rem]">Become a Consultant</p>
                        </Link>
                        <Link href='/' className="sidebar-link">
                            <Image
                                aria-hidden
                                src="/assets/images/logout.png"
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />
                            <p className="text-[.9rem] color-error">Log Out</p>
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default UserSidebar