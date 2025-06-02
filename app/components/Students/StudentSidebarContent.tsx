'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StudentSidebarContent = () => {
    const pathname = usePathname();
    return (
        <div className="sidebar-body container-3">
            <div>
                <div>
                    <Link href='/students/dashboard' className={`sidebar-link ${pathname == '/students/dashboard' ? 'active' : ''}`} >
                        {
                            pathname == '/students/dashboard' ? (
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

                    <Link href='/students/courses' className={`sidebar-link ${pathname.startsWith('/students/courses') || pathname.startsWith('/students/view-course')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/students/courses') || pathname.startsWith('/students/view-course')  ? (

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
                        <p className="text-[.9rem]">My Courses</p>
                    </Link>

                    <Link href='/students/bookings' className={`sidebar-link ${pathname.startsWith('/students/bookings')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/students/bookings')  ? (

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
                        <p className="text-[.9rem]">Booking</p>
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

                    <Link href='/students/settings' className={`sidebar-link ${pathname == '/students/settings' ? 'active' : ''}`}>
                        
                        {
                            pathname == '/students/settings' ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/setting-active.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/setting-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            )
                        }
                        
                        <p className="text-[.9rem]">Settings</p>
                    </Link>

                </div>
            </div>
            <div className="sidebar-break">
                <Link href='/students/help-desk' className={`sidebar-link ${pathname == '/students/help-desk' ? 'active' : ''}`}>
                    {
                        pathname == '/students/help-desk' ? (
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

export default StudentSidebarContent;