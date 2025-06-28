'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { School, Certification } from "@/app/Types/types";
import { instructorStore } from "@/zustand/instructorStore";
import { useConsultant } from "@/hooks/useConsultant";
import ButtonLoader from "../buttonLoader";

const BecomeConsultantPreviewBody = () => {
    const schools = instructorStore((state) => state.schools);
    const certifications = instructorStore((state) => state.certifications);

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

    const {
        fileInputRef,
        handleFileChangeb,
        buttonLoader,
        handleImageClickb,
        fileName,
        submitIntroVideo,

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
                    </div>

                    <div className={`upload-course-video`}>
                        <div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                name="video"
                                accept="video/*,.mkv,.avi,.mov,.flv,.webm"
                                onChange={(e) => handleFileChangeb(e)}
                                className="d-none"
                                disabled={buttonLoader}
                            />

                            <Image
                                aria-hidden
                                src="/assets/images/video-upload.png"
                                alt="Colearn Logo"
                                width={76}
                                height={64}
                                className="object-contain"
                                onClick={handleImageClickb}
                            />
                        </div>
                        <p className="text-[.9rem] font-semibold">Upload a file by clicking the image</p>
                        <p className="text-[.8rem] color-grey-text text-center">Supported formats: MP4, AVI, MOV, FLV, WebM</p>
                        {
                            fileName && (
                            <p className="text-center text-[.8rem] font-semibold">
                                Selected File: {fileName}
                            </p>
                            )
                        }
                    </div>

                    <button className="btn btn-primary-fill full" onClick={submitIntroVideo}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please Wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Continue</span>
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
        </div>
    )
}

export default BecomeConsultantPreviewBody;