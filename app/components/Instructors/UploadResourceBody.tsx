'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import AccountModal from "./AccountModal";
import { courseStore } from "@/zustand/courseStore";

const UploadResourceBody = () => {    
    const resources = courseStore((state) => state.resources);
    const {
        openModal,
        showModal,
        closeModal,
        openModalEditResource,
    } = UseCourses();
    return (
        <div>
            <div className="upload-course-body">
                <h2 className="title-3 mt-2">Add and Manage Resources.</h2>
                <p className="text-[.9rem] color-grey-text mt-1"> Resources are additional learning materials for your course, such as articles, assignments, or downloadable files. You can upload them to support each module and enhance the overall learning experience.</p>
            </div>

            <div className="best-instructor-cont">
                {
                    resources.map((item, index) => (
                        <div className="best-instructor-box" key={index}>
                            <div className="flex items-center gap-2 left">
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/avatars-2.png"
                                        alt="Colearn Image"
                                        width={56}
                                        height={56}
                                        className="object-cover rounded-[50%]"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="color-grey-text text-[.8rem]">10 IT & Engineering Courses</p>
                                </div>
                            </div>
                            <div className="right">
                                <button className="bt-btn btn btn-primary-fill desktop" onClick={(e) => openModalEditResource('edit-resource', item)}>
                                    <span>View Courses</span>
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
                                </button>

                                <button className="mobile" onClick={(e) => openModalEditResource('edit-resource', item)}>
                                    <span className="underline text-[.8rem]">View Courses</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="upload-course-btns">
                <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={(e) => openModal('add-resource')}>
                    <div className="bt-btn two">
                        <span>Add New Resource</span>
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
                </button>
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default UploadResourceBody