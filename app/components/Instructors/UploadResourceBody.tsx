'use client';
import React, {useState} from "react";
import Image from "next/image";
import { UseCourses } from "@/hooks/useCourses";
import AccountModal from "./AccountModal";
import { courseStore } from "@/zustand/courseStore";
import { Resource } from "@/app/Types/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import EmptyPage from "../EmptyPage";

const UploadResourceBody = () => {    
    const resources = courseStore((state) => state.resources);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    
    const {
        openModal,
        showModal,
        closeModal,
        openModalEditResource,
        buttonLoader,
        deleteResource,
    } = UseCourses();

    const toggleMenu = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const editResource = (item: Resource) => {
        setOpenIndex(null);
        openModalEditResource('edit-resource', item)
    };

    const deleteResourceTrigger = (id: string | undefined): void => {
        courseStore.getState().setResourceId(id);
        setOpenIndex(null);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }

    return (
        <div>
            <div className="upload-course-body">
                <h2 className="title-3 mt-2">Add and Manage Resources.</h2>
                <p className="text-[.9rem] color-grey-text mt-1"> Resources are additional learning materials for your course, such as articles, assignments, or downloadable files. You can upload them to support each module and enhance the overall learning experience.</p>
            </div>

            <div className="upload-course-btns mb-4">
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

            <div className="best-instructor-cont">
                {
                    resources.length > 0 ? (
                        resources.map((item, index) => (
                            <div className="best-instructor-box" key={index}>
                                <div className="flex items-center gap-2 left">
                                    <div>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/resource-1.png"
                                            alt="Colearn Image"
                                            width={56}
                                            height={56}
                                            className="object-cover rounded-[50%]"
                                        />
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="color-grey-text text-[.8rem] font-semibold">{item.category} | {item.type == 'document' ? 'Document' : item.type == 'link' ? 'External URL' : ''}</p>
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
                                                <button className="menu-btn" onClick={(e) => editResource(item)}>
                                                    <FontAwesomeIcon icon={faEdit} className="icon"/> Edit Resource
                                                </button>
                                                <button className="menu-btn delete" onClick={(e) => deleteResourceTrigger(item.id)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} className="icon"/> Delete Resource
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
                            <EmptyPage image="/assets/images/empty-image.png"  header="No Resources Added" content="Helpful resources like PDFs, articles, and links enhance learning. Upload your first one to support your students." imageWidth={400} imageHeight={240}/>
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
                                    Are you sure you want to delete this resource? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteResource}
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

export default UploadResourceBody