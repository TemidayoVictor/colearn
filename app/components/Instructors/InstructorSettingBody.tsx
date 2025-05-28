'use client';
import React, {useState} from "react";
import SecuritySettings from "./SecuritySettings";
import BankSettings from "./BankSettings";
import NotificationSettings from "./NotificationSettings";

const InstructorSettingBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('security');
    return (
        <div className="container-3">
            <div className="in-nav flex items-center justify-between in-nav-top">
                <div className="in-nav two scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'security' ? 'active' : ''}`} onClick={() => setSelectedTab('security')}> <span>Security</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'bank' ? 'active' : ''}`} onClick={() => setSelectedTab('bank')}> <span>Bank & Payment Settings</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'notification' ? 'active' : ''}`} onClick={() => setSelectedTab('notification')}> <span>Notification Settings</span></span>
                </div>
            </div>

            <div className="spacing-inter">
                {
                    selectedTab === 'security' &&
                    <div>
                        <SecuritySettings />
                    </div>
                }

                {
                    selectedTab == 'bank' &&
                    <div>
                        <BankSettings />
                    </div>
                }

                {
                    selectedTab == 'notification' &&
                    <div>
                        <NotificationSettings />
                    </div>
                }
            </div>
        </div>
    )
}

export default InstructorSettingBody