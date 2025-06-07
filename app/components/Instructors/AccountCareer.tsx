'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { Experience } from "@/app/Types/types";

type AccountCareerprops = {
    type?: string
}

const experiences = [
    {
      title: "Frontend Developer",
      company: "UBSS Ltd",
      duration: "2015 - Present",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "UI Designer",
      company: "Design Co",
      duration: "2013 - 2015",
      description: "Dolores ipsum ad aliquid...",
    },
    {
      title: "UX Researcher",
      company: "Tech Solutions",
      duration: "2011 - 2013",
      description: "Quod tempora corporis voluptatum...",
    },
  ];

const AccountCareer = ({type}: AccountCareerprops) => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
    const openModal = (key: string, item?: Experience | null) => {
        setShowModal(key);
        setSelectedExperience(item || null);
    }
    const closeModal = () => setShowModal(null);
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
                                            <div onClick={() => openModal("experience", item)} className="cursor-pointer">
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
                                            <div onClick={() => openModal("view-experience", item)}>
                                                <p className="underline text-[.9rem] color-normal font-semibold">View</p>
                                            </div>
                                        )
                                    }
                                </div>
                                <p className="color-grey-text font-semibold text-[.8rem]">{item.company}</p>
                                <div className="flex items-center gap-2 my-[.5em]">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/calendar-3.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                    <p className="text-[.8rem] color-grey-text">{item.duration}</p>
                                </div>
                                <p className="color-grey-text text-[.9rem]">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={`view-course-content right-1 ${type == "admin" ? "admin" : ""}`}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Career Information</p>
                        {
                            type != "admin" &&
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
                        }
                    </div>

                    <div className="my-[1em]">
                        <p className="text-[.9rem] color-grey-text font-semibold">Primary Discipline/Expertise</p>
                        <p className="text-[.9rem]">Structural Engineer</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Skills</p>
                            
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
                <AccountModal modalType={showModal} modalClose={closeModal} experience = {selectedExperience}/>
            }
        </div>
    )
}

export default AccountCareer;