'use client';
import React, {useState} from "react";
import Image from "next/image";

const SecuritySettings = () => {
    const [selectedTab, setSelectedTab] = useState<string>('email');
    return (
        <div>
            <div className="security-settings-cont">
                <h2 className="title-2">Account Security Settings</h2>
                <p className="color-grey-text text-[.8rem]">Have security control over your account</p>

                <div className="security-settings-body">
                    <div className="security-settings-links">
                        <div>
                            <div>
                                <Image
                                    aria-hidden
                                    src="/assets/images/sms-active.png"
                                    alt="Colearn Image"
                                    width={24}
                                    height={24}
                                    className="object-cover"
                                />
                                <p>Change Email</p>
                            </div>

                            <Image
                                aria-hidden
                                src="/assets/images/arrow-setting-active.png"
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />                            
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecuritySettings