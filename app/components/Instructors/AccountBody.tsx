'use client';
import React, {useState} from "react";
import AccountAbout from "./AccountAbout";
import AccountCareer from "./AccountCareer";

const AccountBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('about');
    return (
        <div className="container-3">
            <div className="in-nav three mb-[1.5em]">
                <span className={`in-nav-link color-grey-text ${selectedTab == 'about' ? 'active' : ''}`} onClick={() => setSelectedTab('about')}>About</span>
                <span className={`in-nav-link color-grey-text ${selectedTab == 'career' ? 'active' : ''}`} onClick={() => setSelectedTab('career')}>Career</span>
            </div>

            <div>
                {
                   selectedTab == 'about' &&
                   <AccountAbout />
                }

                {
                    selectedTab == 'career' &&
                    <AccountCareer />
                }
            </div>
        </div>
    )
}

export default AccountBody;