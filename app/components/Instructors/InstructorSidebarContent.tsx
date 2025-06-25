'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import Loader from "../Loader";

const InstructorSidebarContent = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {
        logoutHook
    } = useLogout();

    // if (loading) return <Loader />

    const pathname = usePathname();
    return (
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

                    <Link href='/instructors/courses' className={`sidebar-link ${pathname == '/instructors/courses' || pathname.startsWith('/instructors/upload') || pathname == '/instructors/course-page' ? 'active' : ''}`}>
                        {
                            pathname == '/instructors/courses' || pathname.startsWith('/instructors/upload') || pathname == '/instructors/course-page' ? (

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

                    <Link href='/instructors/bookings' className={`sidebar-link ${pathname.startsWith('/instructors/bookings')  ? 'active' : ''}`}>
                        {
                            pathname.startsWith('/instructors/bookings')  ? (

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
                        <p className="text-[.9rem]">Booking Management</p>
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

                    <Link href='/instructors/settings' className={`sidebar-link ${pathname == '/instructors/settings' ? 'active' : ''}`}>
                        
                        {
                            pathname == '/instructors/settings' ? (
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

export default InstructorSidebarContent;