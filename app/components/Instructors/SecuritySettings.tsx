'use client';
import React, {useState} from "react";
import Image from "next/image";
import ChangeEmail from "./ChangeEmail";

const SecuritySettings = () => {
    const [selectedTab, setSelectedTab] = useState<string>('email');
    return (
        <div>
            <div className="security-settings-cont">
                <h2 className="title-2">Account Security Settings</h2>
                <p className="color-grey-text text-[.8rem]">Have security control over your account</p>

                <div className="security-settings-body">
                    <div className="security-settings-links">
                        <div className={`security-setting-link ${selectedTab == 'email' ? 'active' : ''} `} onClick={() => setSelectedTab('email')}>
                            <div className="flex items-center gap-2">
                                <Image
                                    aria-hidden
                                    src={`/assets/images/${selectedTab == 'email' ? 'sms-active.png' : 'sms.png'}`}
                                    alt="Colearn Image"
                                    width={24}
                                    height={24}
                                    className="object-cover"
                                />
                                <p className="text-[.9rem]">Change Email</p>
                            </div>

                            <Image
                                aria-hidden
                                src={`/assets/images/${selectedTab == 'email' ? 'arrow-setting-active.png' : 'arrow-setting.png'}`}
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />                            
                        </div>
                        <div className={`security-setting-link ${selectedTab == 'password' ? 'active' : ''} `} onClick={() => setSelectedTab('password')}>
                            <div className="flex items-center gap-2">
                                <Image
                                    aria-hidden
                                    src={`/assets/images/${selectedTab == 'password' ? 'lock-active.png' : 'lock.png'}`}
                                    alt="Colearn Image"
                                    width={24}
                                    height={24}
                                    className="object-cover"
                                />
                                <p className="text-[.9rem]">Change Password</p>
                            </div>

                            <Image
                                aria-hidden
                                src={`/assets/images/${selectedTab == 'password' ? 'arrow-setting-active.png' : 'arrow-setting.png'}`}
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />                            
                        </div>
                        <div className={`security-setting-link ${selectedTab == 'deactivate' ? 'active' : ''} `} onClick={() => setSelectedTab('deactivate')}>
                            <div className="flex items-center gap-2">
                                <Image
                                    aria-hidden
                                    src={`/assets/images/${selectedTab == 'deactivate' ? 'profile-delete-active.png' : 'profile-delete.png'}`}
                                    alt="Colearn Image"
                                    width={24}
                                    height={24}
                                    className="object-cover"
                                />
                                <p className="text-[.9rem]">Deactivate Account</p>
                            </div>

                            <Image
                                aria-hidden
                                src={`/assets/images/${selectedTab == 'deactivate' ? 'arrow-setting-active.png' : 'arrow-setting.png'}`}
                                alt="Colearn Image"
                                width={20}
                                height={20}
                                className="object-cover"
                            />                            
                        </div>
                    </div>

                    <div className="security-settings-content">
                        <ChangeEmail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecuritySettings