'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import AccountModal from "./AccountModal";
import { courseStore } from "@/zustand/courseStore";
import { Module } from "@/app/Types/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import EmptyPage from "../EmptyPage";

const UploadModuleBody = () => {    
    const modules = courseStore((state) => state.modules);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const {
        openModal,
        showModal,
        closeModal,
        openModalEditModule,
        buttonLoader,
        deleteModule,
    } = UseCourses();

    const toggleMenu = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const editModule = (item: Module) => {
        setOpenIndex(null);
        openModalEditModule('edit-module', item)
    };

    const deleteModuleTrigger = (id: string | undefined): void => {
        courseStore.getState().setModuleId(id);
        setOpenIndex(null);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }

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
                    modules.length > 0 ? (
                        modules.map((item, index) => (
                            <div className="best-instructor-box" key={index}>
                                <div className="flex items-center gap-2 left">
                                    <div>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/module-1.png"
                                            alt="Colearn Image"
                                            width={56}
                                            height={56}
                                            className="object-cover rounded-[50%]"
                                        />
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="color-grey-text text-[.8rem] font-semibold">{item.videos_count ? `${item.videos_count} Video Content${item.videos_count > 1 ? 's' : ''}`  : 'No Video Uploaded'}</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="menu-trigger" onClick={() => toggleMenu(index)}>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </button>
                                        
                                    {
                                        openIndex === index &&
                                        <div>
                                            <div className="menu-overlay active" onClick={() => setOpenIndex(null)}></div>
                                            <div className="bottom-menu slide-up">
                                            <div className="menu-actions">
                                                {/* <button className="menu-btn">
                                                    <FontAwesomeIcon icon={faEye} className="icon" /> View Course
                                                </button> */}
                                                <Link href={`/instructors/manage-video/${item.id}`} className="menu-btn">
                                                    <FontAwesomeIcon icon={faEye} className="icon"/> View Videos
                                                </Link>
                                                <button className="menu-btn" onClick={(e) => editModule(item)}>
                                                    <FontAwesomeIcon icon={faEdit} className="icon"/> Edit Module
                                                </button>
                                                <button className="menu-btn delete" onClick={(e) => deleteModuleTrigger(item.id)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} className="icon"/> Delete Module
                                                </button>
                                                <button className="menu-btn cancel" onClick={() => toggleMenu(index)}>
                                                    <FontAwesomeIcon icon={faTimes} className="icon"/> Cancel
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                
                            </div>
                        ))
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png"  header="No Modules Yet" content="Organize your course by creating modules. Start now by adding your first module to structure your content." imageWidth={400} imageHeight={240}/>
                        </div>
                    )
                }
                {
                    deleteModal &&
                    <div>
                        <AnimatePresence>
                            <motion.div
                                className="modal-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                className="bg-white rounded-2xl p-6 w-[80%] max-w-md shadow-xl"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                >
                                <h2 className="title-3">Confirm Delete</h2>
                                <p className="text-[.9rem] color-grey-text">
                                    Are you sure you want to delete this module? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteModule}
                                    className="px-4 py-2 bg-red-600 text-white text-[.8rem] rounded-md hover:bg-red-700 transition"
                                    >
                                    {
                                        buttonLoader ? (
                                            <ButtonLoader content="Deleting . . . "/>
                                        ) : (
                                            'Delete'
                                        )
                                    }

                                    </button>
                                </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
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