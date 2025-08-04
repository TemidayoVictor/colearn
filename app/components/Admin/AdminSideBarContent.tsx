'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";


const AdminSideBarContent = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const pathname = usePathname();
    const {
        logoutHook
    } = useLogout();

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

                <Link href='/admin/user-management' className={`sidebar-link ${pathname.startsWith('/admin/user-management')  ? 'active' : ''}`}>
                    {
                        pathname.startsWith('/admin/user-management')  ? (

                            <Image
                                aria-hidden
                                src="/assets/images/people-active.png"
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

                    <Link href='/admin/courses' className={`sidebar-link ${pathname.startsWith('/admin/courses') || pathname.startsWith('/admin/view')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/admin/courses') || pathname.startsWith('/admin/view') ? (

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

                    <Link href='/admin/bookings' className={`sidebar-link ${pathname.startsWith('/admin/bookings')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/admin/bookings')  ? (

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
                                    src="/assets/images/calendar-3b.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />

                            )
                        }
                        <p className="text-[.9rem]">Bookings Overview</p>
                    </Link>

                    <Link href='/admin/financials' className={`sidebar-link ${pathname == '/admin/financials' ? 'active' : ''}`}>
                        {
                            pathname == '/admin/financials' ? (
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
                        <p className="text-[.9rem]">Financials</p>
                    </Link>

                </div>

                <div className="sidebar-break">
                    
                    <Link href='/admin/utilities' className={`sidebar-link ${pathname == '/admin/utilities' ? 'active' : ''}`}>
                        {
                            pathname == '/admin/utilities' ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-2user-active.png"
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
                        <p className="text-[.9rem]">Utilities</p>
                    </Link>

                    <Link href='/admin/admin-users' className={`sidebar-link ${pathname == '/admin/admin-users' ? 'active' : ''}`}>
                        {
                            pathname == '/admin/admin-users' ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/profile-2user-active.png"
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
                    <Link href='/admin/account' className={`sidebar-link ${pathname == '/admin/account' ? 'active' : ''}`}>
                        {
                            pathname == '/admin/account' ? (
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
                <button className="sidebar-link" onClick={() => logoutHook(setLoading)}>
                    <Image
                        aria-hidden
                        src="/assets/images/logout.png"
                        alt="Colearn Image"
                        width={20}
                        height={20}
                        className="object-cover"
                    />
                    <p className="text-[.9rem] color-error">Log Out</p>
                </button>
            </div>
        </div>
    )
}

export default AdminSideBarContent