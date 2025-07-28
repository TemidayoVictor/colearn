'use client';
import React, {useState, useEffect} from "react";
import { genralStore } from "@/zustand/generalStore";
import SecuritySettings from "../Instructors/SecuritySettings";
import BankSettings from "../Instructors/BankSettings";
import NotificationSettings from "../Instructors/NotificationSettings"
import { useRouter } from "next/navigation";
import { useAuthStudent } from "@/hooks/useAuth";
import { authStore } from "@/zustand/authStore";
import { showErrorToast } from "@/utils/toastTypes";
import { courseStore } from "@/zustand/courseStore";
import { get_coupons } from "@/services/courses";
import Loader from "../Loader";

type InstructorSettingBodyProps = {
    userType?: string
}

const StudentSettingsBody = ({userType}: InstructorSettingBodyProps) => {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState<string>('security');
    const [loading, setLoading] = useState<Boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); // ✅ valid usage
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    if(loading) return <Loader />

    return (
        <div className="container-3">
            <div className="in-nav flex items-center justify-between in-nav-top">
                <div className="in-nav two scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'security' ? 'active' : ''}`} onClick={() => setSelectedTab('security')}> <span>Security</span></span>
                    {
                        userType == 'student' ? (
                            ''
                        ) : (
                            <>
                                <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'bank' ? 'active' : ''}`} onClick={() => setSelectedTab('bank')}> <span>Bank & Payment Settings</span></span>
                            </>
                            
                        )
                    }
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

export default StudentSettingsBody