import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type UserNotificationProps = {
    onNotificationClick: () => void;
    openNotification: boolean | null;
};

const Notification = ({onNotificationClick, openNotification}: UserNotificationProps) => {
    return (
        <div className={`notification-box-container container-3 ${openNotification ? 'active' : ''}`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Notification {openNotification}</h2>
                <div>
                    {/* <Image
                        aria-hidden
                        src="/assets/images/close-circle.png"
                        alt="Colearn Logo"
                        width={16}
                        height={16}
                        className="object-contain"
                        onClick={onNotificationClick}
                    /> */}
                    <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={onNotificationClick}/>
                </div>
            </div>

            <div>
                {
                    [1, 2, 3, 4].map((item, index) => (
                        <div className="notification-box" key={index}>
                            <small className="font-semibold">New</small>
                            <div className="notification-content">
                                <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="text-[.8rem]">John Doe, James Mel and 2 others enroll for your UI/UX Design Bootcamp Vol.1 Course. 2h</p>
                                <Image
                                    aria-hidden
                                    src="/assets/images/notification-img.png"
                                    alt="Colearn Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain rounded-[.2em]"
                                />
                            </div>
                            <div className="notification-content">
                                <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="text-[.8rem]">John Doe, James Mel and 2 others enroll for your UI/UX Design Bootcamp Vol.1 Course. 2h</p>
                            </div>
                            <div className="notification-content two">
                                <p className="font-bold text-[.8rem]">Welcome Aboard Favy</p>
                                <p className="text-[.8rem]">John Doe, James Mel and 2 others enroll for your UI/UX Design Bootcamp Vol.1 Course. 2h</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notification;