import React from "react";
import Image from "next/image";

const UserHeader = () => {
    return (
        <div className="container-3 two user-header">
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
                    className="object-cover"
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
    )
}

export default UserHeader