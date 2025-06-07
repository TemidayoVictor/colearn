'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const AdminSideBarContent = () => {
    const pathname = usePathname();
    return (
        <div className="sidebar-body container-3">
            <div>
                <div>
                    <Link href='/admin/dashboard' className={`sidebar-link ${pathname == '/admin/dashboard' ? 'active' : ''}`} >
                        {
                            pathname == '/admin/dashboard' ? (
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

                    <Link href='/admin/courses' className={`sidebar-link ${pathname.startsWith('/admin/courses')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/admin/courses')  ? (

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

                    <Link href='/admin/user-verification' className={`sidebar-link ${pathname.startsWith('/admin/user-verification') ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/admin/user-verification') ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-admin-active.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />

                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-admin.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            )
                        }
                        <p className="text-[.9rem]">User Verification</p>
                    </Link>
                </div>

                <Link href='/admin/users' className={`sidebar-link ${pathname.startsWith('/admin/users')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/admin/users')  ? (

                                <Image
                                    aria-hidden
                                    src="/assets/images/calendar-3-active.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />

                            ) : (

                                <Image
                                    aria-hidden
                                    src="/assets/images/people.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />

                            )
                        }
                        <p className="text-[.9rem]">User Management</p>
                    </Link>

                <div className="sidebar-break">
                <Link href='/students/account' className={`sidebar-link ${pathname == '/students/account' ? 'active' : ''}`}>
                        {
                            pathname == '/students/account' ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-2user.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />

                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-2user.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            )
                        }
                        <p className="text-[.9rem]">Roles and Permissions</p>
                    </Link>
                    <Link href='/students/account' className={`sidebar-link ${pathname == '/students/account' ? 'active' : ''}`}>
                        {
                            pathname == '/students/account' ? (
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
                </div>
            </div>
            <div className="sidebar-break">
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
    )
}

export default AdminSideBarContent