'use client';
import React, {useState} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import AccountModal from "./AccountModal";
import { School, Certification } from "@/app/Types/types";
import { instructorStore } from "@/zustand/instructorStore";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";
import ReactPlayer from "@/utils/reactPlayer";  

type Props = {
    type?: string;
}

const AccountInfo = ({type}: Props) => {
    const instructor = genralStore((state) => state.instructor);
    const schools = instructor?.schools;

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

    const {
        buttonLoader,
        submitApplication,
    } = useConsultant();

    const openModal = (key: string) => {
        setShowModal(key);
    }
    
    const openModalSchool = (key: string, item: School | null) => {
        setShowModal(key);
        instructorStore.getState().setSchool(item);
    }

    const openModalCert = (key: string, item: Certification | null) => {
        setShowModal(key);
        instructorStore.getState().setCert(item);
    }

    const closeModal = () => setShowModal(null);
    return (
        <div>
            {
                type == 'education' && 
                <div className="res-flex justify-between items-start mt-4">
                    <div className={`view-course-content left-1 consultant admin`}>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-bold">Education</p>
                                
                            </div>

                            {
                                schools?.map((item, index) => (
                                    <div className="experience-box" key={index}>
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold my-[.8em] text-[.9rem]">{item.name}</p>
                                            {/* <div onClick={() => openModalSchool("edit-school", item)} className="cursor-pointer">
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/edit-2.png"
                                                    alt="Colearn Logo"
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>     */}
                                        </div>
                                        <p className="color-grey-text font-bold text-[.9rem]">{item.degree}</p>
                                        <div className="flex items-center gap-2 my-[.5em]">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/ic_deals-3.png"
                                                alt="Colearn Logo"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem] font-semibold color-grey-text">{item.field_of_study}</p>
                                        </div>
                                        <div className="flex items-center gap-2 my-[.5em]">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/calendar-3.png"
                                                alt="Colearn Logo"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                            <div className="flex gap-3">
                                                <p className="text-[.9rem] font-semibold color-grey-text">{item.start_year}</p>
                                                <p className="text-[.9rem] font-semibold color-grey-text"> - </p>
                                                <p className="text-[.9rem] font-semibold color-grey-text">{item.end_year}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }

            {
                type == 'video' &&
                <div className="w-full max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full aspect-video bg-black">
                        <video
                        src={
                            instructor?.intro_video_url
                            ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${instructor.intro_video_url}`
                            : undefined
                        }
                        controls
                        className="w-full h-full object-cover rounded-t-xl"
                        >
                        Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 bg-gray-50">
                        {/* <div className="flex gap-3">
                            <button
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-md transition"
                            >
                                ← Previous
                            </button>

                            <button
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-md transition"
                            >
                                Next →
                            </button>
                        </div>

                        <button
                            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-md transition"
                        >
                            ✅ Mark as Complete
                        </button> */}
                    </div>
                </div>
            }

        </div>
    )
}

export default AccountInfo;