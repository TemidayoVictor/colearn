import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import AccountModal from "./AccountModal";
import { authStore } from "@/zustand/authStore";

type AccountAboutprops = {
    type?: string
}

const AccountAbout = ({type}:AccountAboutprops) => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const user = authStore((state) => state.user);
    const instructor = authStore((state) => state.instructor);

    return (
        <div className="res-flex justify-between items-start">
            <div className={`view-course-content left-1 ${type == "admin" ? "admin" : ""}`}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Personal Information</p>
                        {
                            type != "admin" &&
                            <div onClick={() => openModal("personal")} className="cursor-pointer">
                                <Image
                                    aria-hidden
                                    src="/assets/images/edit-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        }
                    </div>

                    <div className="">
                        <div className="res-flex justify-between mt-3">
                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Full Name</p>
                                <p className="text-[.9rem]"> {user?.first_name} {user?.last_name} </p>
                            </div>
                        </div>

                        <div className="res-flex justify-between mt-3">
                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Email Address</p>
                                <p className="text-[.9rem]">{user?.email}</p>
                            </div>
                        </div>

                        <div className="res-flex justify-between mt-3">
                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Country</p>
                                <p className="text-[.9rem]">{instructor?.country}</p>
                            </div>

                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Language</p>
                                <p className="text-[.9rem]">
                                    {
                                        Array.isArray(instructor?.languages)
                                        ? instructor.languages.join(", ")
                                        : JSON.parse(instructor?.languages || '[]').join(", ")
                                    }
                                </p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Social Media</p>
                        {
                            type != "admin" &&
                            <div onClick={() => openModal("social")} className="cursor-pointer">
                                <Image
                                    aria-hidden
                                    src="/assets/images/edit-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        }
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        {
                            instructor?.linkedin_url && (
                                <Link href={instructor?.linkedin_url}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/facebook-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            )
                        }

                        {
                            instructor?.twitter_url && (
                                <Link href={instructor?.twitter_url}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/X-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            ) 
                        }

                        {
                            instructor?.youtube_url && (
                                <Link href={instructor?.youtube_url}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/instagram-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            )  
                        }
                        
                    </div>
                </div>

            </div>
            <div className={`view-course-content right-1 ${type == "admin" ? "admin" : ""}`}>
                <div className="flex items-center justify-between">
                    <p className="font-bold">Bio</p>
                    {
                        type != "admin" &&
                        <div onClick={() => openModal("bio")} className="cursor-pointer">
                            <Image
                                aria-hidden
                                src="/assets/images/edit-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    }
                </div>
                <div className="account-bio">
                    <p>{instructor?.bio}</p>
                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default AccountAbout;