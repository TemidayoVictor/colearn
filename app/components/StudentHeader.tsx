'use client';
import react, {useState} from 'react';
import Image from "next/image";
import Notification from "./Instructors/Notification";

type StudentHeaderProps = {
    onMenuClick: () => void;
};

const StudentHeader = ({onMenuClick}:StudentHeaderProps) => {
    const [openNotification, setOpenNotification] = useState<boolean | null>(false);
    return (
        <div>
            <div className="container-3 two user-header desktop">
                <div>
                    <h2 className="text-[1.2rem]">Hello, Favi Ayomide ⛅</h2>
                    <p className="color-grey-text text-[.8rem]">Welcome to your dashboard</p>
                </div>

                <div className="flex gap-2">   
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
                </div>
            </div>

            <div className="container-3 mobile user-header-mobile">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/logo-2.png"
                        alt="Colearn Logo"
                        width={104}
                        height={32}
                        className="object-contain mobile"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        aria-hidden
                        src="/assets/images/notification-bing.png"
                        alt="Colearn Logo"
                        width={32}
                        height={32}
                        className="object-contain mobile"
                        onClick={() => setOpenNotification(prev => !prev)}
                    />

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

export default StudentHeader;