'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { School, Certification } from "@/app/Types/types";
import { instructorStore } from "@/zustand/instructorStore";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";

const BecomeConsultantPreviewBody = () => {
    const schools = instructorStore((state) => state.schools);
    const certifications = instructorStore((state) => state.certifications);

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

    const {
        buttonLoader
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
            <div className="res-flex justify-between items-start mt-4">
                <div className={`view-course-content left-1 consultant`}>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Education</p>
                            {
                                <div className="flex items-center gap-2 cursor-pointer" onClick={() => openModal("add-school")}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/add-icon.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="font-semibold color-grey-text text-[.9rem]">Add New</p>
                                </div>
                            }
                        </div>

                        {
                            schools.map((item, index) => (
                                <div className="experience-box" key={index}>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold my-[.8em] text-[.9rem]">{item.name}</p>
                                        <div onClick={() => openModalSchool("edit-school", item)} className="cursor-pointer">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/edit-2.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                        </div>    
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

                <div className={`view-course-content right-1 consultant`}>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Certifications</p>
                            <div onClick={() => openModal("add-certification")}>
                                <div className="flex items-center gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/add-icon.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="font-semibold color-grey-text text-[.9rem]">Add New</p>
                                </div>
                            </div>
                        </div>

                        {
                            certifications.map((item, index) => (
                                <div className="experience-box" key={index}>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold my-[.8em] text-[.9rem]">{item.name}</p>
                                        <div onClick={() => openModalCert("edit-certification", item)} className="cursor-pointer">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/edit-2.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                        </div>    
                                    </div>
                                    <div className="flex items-center gap-2 my-[.2em]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/note.png"
                                            alt="Colearn Logo"
                                            width={16}
                                            height={16}
                                            className="object-contain"
                                        />
                                        <p className="color-grey-text font-bold text-[.9rem]">{item.organization}</p>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    showModal && 
                    <AccountModal modalType={showModal} modalClose={closeModal}/>
                }
            </div>

            <div className={`view-course-content right-1 consultant mt-4`}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Introduction Video</p>
                        <div onClick={() => openModal("change-intro-video")} className="cursor-pointer">
                            <Image
                                aria-hidden
                                src="/assets/images/edit-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="border mt-4">
                        video
                    </div>
                </div>
                
            </div>

            <div className="view-course-content right-1 consultant mt-4 btnn">
                <button className="btn btn-primary-fill full">
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please Wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Submit Appliation</span>
                                <span>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-contain"
                                    />
                                </span>
                            </div>                                        
                        )
                    }
                </button>
            </div>

        </div>
    )
}

export default BecomeConsultantPreviewBody;