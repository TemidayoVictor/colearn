'use client';
import React, {useState}  from "react";
import Image from "next/image";
import Link from "next/link";
import Notification from "./Instructors/Notification";
import { authStore } from "@/zustand/authStore";
import { useAdmin } from "@/hooks/useAdmin";
import { UseCourses } from "@/hooks/useCourses";
import Stripe from 'stripe';

type UserHeaderProps = {
    onMenuClick: () => void;
    userType?: string;
};

const UserHeader = ({onMenuClick}:UserHeaderProps) => {
    const [openNotification, setOpenNotification] = useState<boolean | null>(false);
    const user = authStore((state) => state.user) 
    const {sendMail} = useAdmin();
    const {stripeCheckout} = UseCourses();

    return (
        <div>
            <div className="container-3 two user-header desktop">
                <div>
                    <h2 className="text-[1.2rem]">Hello, {user?.first_name} {user?.last_name} ⛅</h2>
                    <p className="color-grey-text text-[.8rem]">Welcome to Colearn</p>
                </div>

                {/* <div className="flex gap-2">   
                    <Image
                        aria-hidden
                        src="/assets/images/language-square.png"
                        alt="Colearn Logo"
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                    <Image
                        aria-hidden
                        src="/assets/images/help-3.png"
                        alt="Colearn Logo"
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                    <Image
                        aria-hidden
                        src="/assets/images/notification.png"
                        alt="Colearn Logo"
                        width={24}
                        height={24}
                        className="object-cover cursor-pointer"
                        onClick={() => setOpenNotification(prev => !prev)}
                    />
                    <Image
                        aria-hidden
                        src="/assets/images/user-pro-img.png"
                        alt="Colearn Logo"
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                </div> */}
            </div>

            <div className="container-3 mobile user-header-mobile">
                <Link href="/">
                    <Image
                        aria-hidden
                        src="/assets/images/logo-2.png"
                        alt="Colearn Logo"
                        width={104}
                        height={32}
                        className="object-contain mobile"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    {/* <Image
                        aria-hidden
                        src="/assets/images/notification-bing.png"
                        alt="Colearn Logo"
                        width={32}
                        height={32}
                        className="object-contain mobile"
                        onClick={() => setOpenNotification(prev => !prev)}
                    /> */}

                    <Image
                        aria-hidden
                        src="/assets/images/menu-3.png"
                        alt="Colearn Logo"
                        width={32}
                        height={32}
                        className="object-contain mobile"
                        onClick={onMenuClick}
                    />

                </div>
            </div>
            <Notification onNotificationClick={() => setOpenNotification(prev => !prev)} openNotification={openNotification} />
        </div>
    )
}

export default UserHeader