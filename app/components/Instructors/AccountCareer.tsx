'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { Experience, ExperienceType } from "@/app/Types/types";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

type AccountCareerprops = {
    type?: string
}


const AccountCareer = ({type}: AccountCareerprops) => {
    const instructor = authStore((state) => state.instructor);

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
    const openModal = (key: string, item?: Experience | null) => {
        setShowModal(key);
        setSelectedExperience(item || null);
    }

    const openModalTwo = (key: string, item: ExperienceType | null) => {
        instructorStore.getState().setExperience(item);
        setShowModal(key);
    }
    const closeModal = () => setShowModal(null);

    const experiences = instructorStore((state) => state.experiences)
    return (
        <div className="res-flex justify-between items-start">
            <div className={`view-course-content left-1 ${type == "admin" ? "admin" : ""}`}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Experiences</p>
                        {
                            type != "admin" &&
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => openModal("addexperience")}>
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
                        experiences.map((item, index) => (
                            <div className="experience-box" key={index}>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold my-[.8em] text-[.9rem]">{item.title}</p>
                                    {
                                        type != "admin" ? (
                                            <div onClick={() => openModalTwo("editexperience", item)} className="cursor-pointer">
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/edit-2.png"
                                                    alt="Colearn Logo"
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                
                                            </div>
                                            // <div onClick={() => openModal("view-experience", item)}>
                                            //     <p className="underline text-[.9rem] color-normal font-semibold cursor-pointer">View</p>
                                            // </div>
                                        )
                                    }
                                </div>
                                <p className="color-grey-text font-semibold text-[.8rem]">{item.organization}</p>
                                <div className="flex items-center gap-2 my-[.5em]">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/calendar-3.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                    <p className="text-[.8rem] color-grey-text">{item.start_date ? dayjs(item.start_date.toString()).format("Do MMMM, YYYY") : "No date available"} - {item.currently_working ? "Current" : item.end_date ? dayjs(item.end_date.toString()).format("Do MMMM, YYYY") : "No date available"}</p>
                                </div>
                                <p className="color-grey-text text-[.9rem]">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={`view-course-content right-1 ${type == "admin" ? "admin" : ""}`}>
                <div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Disciplines</p>
                            
                            {
                                type != "admin" &&
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
                            }
                        </div>

                        <div className="mt-[1em]">
                            <div className="skill-tag-cont">
                                {
                                    (Array.isArray(instructor?.disciplines)
                                        ? instructor.disciplines
                                        : JSON.parse(instructor?.disciplines || '[]')
                                    ).map((item: string, index: number) => (
                                        <span className="skill-tag text-[.8rem]" key={index}>
                                        {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal} experience = {selectedExperience}/>
            }
        </div>
    )
}

export default AccountCareer;