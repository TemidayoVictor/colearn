'use client';
import React, {useState, useEffect} from "react";
import { genralStore } from "@/zustand/generalStore";
import SecuritySettings from "./SecuritySettings";
import BankSettings from "./BankSettings";
import NotificationSettings from "./NotificationSettings";
import CouponSettings from "./CouponSettings";
import { useRouter } from "next/navigation";
import { useAuthInstructors } from "@/hooks/useAuth";
import { authStore } from "@/zustand/authStore";
import { showErrorToast } from "@/utils/toastTypes";
import { courseStore } from "@/zustand/courseStore";
import { get_coupons } from "@/services/courses";
import Loader from "../Loader";

type InstructorSettingBodyProps = {
    userType?: string
}

const InstructorSettingBody = ({userType}: InstructorSettingBodyProps) => {
        const router = useRouter();
    const [selectedTab, setSelectedTab] = useState<string>('security');
    const [loading, setLoading] = useState<Boolean>(true);
    const instructor = authStore((state) => state.instructor);
    const instructorId = instructor?.id;

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthInstructors(router); // ✅ valid usage
            if(!instructorId) return
            try {
                const response = await get_coupons(instructorId);
                if (response.success) {
                    // save state globally
                    genralStore.getState().setCoupons(response.data.coupons);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate, instructorId]);

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
                                <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'coupon' ? 'active' : ''}`} onClick={() => setSelectedTab('coupon')}> <span>Coupon Settings</span></span>
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
                    selectedTab == 'coupon' &&
                    <div>
                        <CouponSettings />
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