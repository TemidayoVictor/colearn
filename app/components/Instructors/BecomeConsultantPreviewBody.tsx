'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { School, Certification } from "@/app/Types/types";
import { instructorStore } from "@/zustand/instructorStore";

const BecomeConsultantPreviewBody = () => {
    const schools = instructorStore((state) => state.schools);
    console.log(schools);

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

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
        <div className="res-flex justify-between items-start">
            <div className={`view-course-content left-1`}>
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
                                        src="/assets/images/calendar-3.png"
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

            <div className={`view-course-content right-1`}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Certifications</p>
                        <div onClick={() => openModal("career")}>
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

                    <div className="my-[1em]">
                        <p className="text-[.9rem] color-grey-text font-semibold">Primary Discipline/Expertise</p>
                        <p className="text-[.9rem]">Structural Engineer</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Skills</p>
                            <div onClick={() => openModal("skills")}>
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

                        <div className="mt-[1em]">
                            <div className="skill-tag-cont">
                                {
                                    [1,2,3,4,5].map((item, index) => (
                                        <span className="skill-tag text-[.8rem]" key={index}>UI/UX Design</span>
                                    ))
                                }
                            </div>
                        </div>
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

export default BecomeConsultantPreviewBody;