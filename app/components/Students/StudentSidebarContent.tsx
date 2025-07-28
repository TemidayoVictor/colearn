'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import Loader from "../Loader";

const StudentSidebarContent = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const pathname = usePathname();
    const {
        logoutHook
    } = useLogout();

    // if (loading) return <Loader />

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

                    <Link href='/students/explore' className={`sidebar-link ${pathname.startsWith('/students/explore') || pathname.startsWith('/students/course-detail')  ? 'active' : ''}`} >
                        {
                            pathname.startsWith('/students/explore') || pathname.startsWith('/students/course-detail') ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/global--active.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/global-3.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            )
                        }
                        <p className="text-[.9rem]">Explore</p>
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

                    <Link href='/students/cart' className={`sidebar-link ${pathname == '/students/cart' ? 'active' : ''}`}>
                        {
                            pathname == '/students/cart' ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/cart-icon-active.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/cart-icon.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            )
                        }
                        <p className="text-[.9rem]">Cart</p>
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

export default StudentSidebarContent;