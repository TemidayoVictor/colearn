'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import AccountModal from "./AccountModal";
import { courseStore } from "@/zustand/courseStore";

const UploadModuleBody = () => {    
    const modules = courseStore((state) => state.modules);
    const {
        openModal,
        showModal,
        closeModal,
        openModalEditModule,
    } = UseCourses();
    return (
        <div>
            <div className="upload-course-body">
                <h2 className="title-3 mt-2">Add and Manage Modules.</h2>
                <p className="text-[.9rem] color-grey-text mt-1"> Modules are key sections of your course—like "Introduction" or "Advanced Topics". After creating your course, you’ll create modules and add videos under each to keep your content organized.</p>
            </div>

            <div className="upload-course-btns mb-4">
                <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={(e) => openModal('add-module')}>
                    <div className="bt-btn two">
                        <span>Add New Module</span>
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

            <div className="best-instructor-cont">
                {
                    modules.map((item, index) => (
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
                                <button className="bt-btn btn btn-primary-fill desktop" onClick={(e) => openModalEditModule('edit-module', item)}>
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

                                <button className="mobile" onClick={(e) => openModalEditModule('edit-module', item)}>
                                    <span className="underline text-[.8rem]">View Courses</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default UploadModuleBody