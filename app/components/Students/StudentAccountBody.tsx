'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { showErrorToast } from "@/utils/toastTypes";
import { useAuthStudent } from "@/hooks/useAuth";
import { authStore } from "@/zustand/authStore";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { user_profile } from "@/services/user";
import { User } from "@/app/Types/types";
import AccountModal from "../Instructors/AccountModal";
import Loader from "../Loader";

const StudentAccountBody = () => {
    const router = useRouter();

    const user = authStore((state) => state.user);
    const userId = user?.id;

    const [showModal, setShowModal] = useState<string | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [userProfile, setUserProfile] = useState<User | null>(null);
    const [certifications, setCertifications] = useState<string>('')

    const newUpdate = courseStore((state) => state.newUpdate);
    
    const openModal = (key: string) => {
        setShowModal(key);
    }
    
    const closeModal = () => setShowModal(null);

    
    useEffect(() => {
        setLoading(true);
        const init = async () => {
            closeModal();
            await useAuthStudent(router); // ✅ valid usage
            if(!userId) return
            try {
                const response = await user_profile(userId);
                if (response.success) {
                    console.log(response)
                    setUserProfile(response.data.user);
                    setCertifications(response.data.completedCourses);
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

    }, [newUpdate, userId]);

    if(loading) return <Loader />
    
    return (
        <div className="student-account">
            <div>
                <h2 className="title-2">Profile</h2>
            </div>

            <div className="details-sect">
                <Image
                    aria-hidden
                    src={userProfile?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${userProfile?.profile_photo}` : "/assets/images/course-img-2.png"}
                    alt="Colearn Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-[.3em]"
                />
                <h2 className="font-semibold"> {userProfile?.first_name} {userProfile?.last_name} </h2>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="title-3">Account Information</h2>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => openModal("personal")}>
                    <Image
                        aria-hidden
                        src="/assets/images/edit-pen.png"
                        alt="Colearn Logo"
                        width={16}
                        height={16}
                        className="object-contain rounded-[50%]"
                    />
                    <p className="color-grey-text text-[.8rem] font-semibold">Edit Profile</p>
                </div>
            </div>

            <div className="mt-4">
                <div className="acct-details res">
                    <p className="left">Email Address</p>
                    <p className="right"> {userProfile?.email} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Phone</p>
                    <p className="right">+{userProfile?.country_phone_code} {userProfile?.student?.phone} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Gender</p>
                    <p className="right"> {userProfile?.student?.gender} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Language</p>
                    <p className="right">
                        {
                            Array.isArray(userProfile?.student?.languages)
                            ? userProfile?.student?.languages.join(", ")
                            : JSON.parse(userProfile?.student?.languages || '[]').join(", ")
                        }
                    </p>
                </div>
                <div className="acct-details">
                    <p className="left">Country</p>
                    <p className="right"> {userProfile?.student?.country} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Certifications</p>
                    <p className="right"> {certifications} </p>
                </div>
            </div>

            <div>
                {
                    showModal && 
                    <AccountModal modalType={showModal} modalClose={closeModal}/>
                }
            </div>
        </div>
    )
}

export default StudentAccountBody