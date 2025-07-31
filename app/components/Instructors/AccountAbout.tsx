import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import AccountModal from "./AccountModal";
import { authStore } from "@/zustand/authStore";
import { genralStore } from "@/zustand/generalStore";

type AccountAboutprops = {
    type?: string
}

const AccountAbout = ({type}:AccountAboutprops) => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const authUser = authStore((state) => state.user);
    const authInstructor = authStore((state) => state.instructor);

    const generalUser = genralStore((state) => state.user)
    const generalInstructor = genralStore((state) => state.instructor);

    const user = type == "admin" ? generalUser : authUser;
    const instructor = type == "admin" ? generalInstructor : authInstructor;

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
                        <div className="justify-between mt-3">
                            <div className="experience-box">
                                <div className="flex items-center justify-between">
                                    <p className="color-grey-text font-bold text-[.9rem]">Full Name</p>
                                    {
                                        type != "admin" &&
                                        <div onClick={() => openModal("edit-name")} className="cursor-pointer">
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

            </div>
            <div className={`view-course-content right-1 ${type == "admin" ? "admin" : ""}`}>
                <div className="flex items-center justify-between">
                    <p className="font-bold">Title</p>
                    {
                        type != "admin" &&
                        <div onClick={() => openModal("edit-instructor-data")} className="cursor-pointer">
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
                    <p>{instructor?.title}</p>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Professional Headline</p>
                    <p className="capitalize"> {instructor?.professional_headline} </p>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Category</p>
                    <p className="capitalize"> {instructor?.category} </p>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Bio</p>
                    <p> {instructor?.bio} </p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Social Media</p>
                        {/* {
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
                        } */}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        {
                            instructor?.linkedin_url && (
                                <Link href={instructor?.linkedin_url && !instructor?.linkedin_url.startsWith("http") ? `https://${instructor?.linkedin_url}`: instructor?.linkedin_url || "#"}>
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
                                <Link href={instructor?.twitter_url && !instructor?.twitter_url.startsWith("http") ? `https://${instructor?.twitter_url}`: instructor?.twitter_url || "#"}>
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
                                <Link href={instructor?.youtube_url && !instructor?.youtube_url.startsWith("http") ? `https://${instructor?.youtube_url}`: instructor?.youtube_url || "#"}>
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

                        {
                            instructor?.website && (
                                <Link href={instructor?.website && !instructor?.website.startsWith("http") ? `https://${instructor?.website}`: instructor?.website || "#"}>
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
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default AccountAbout;