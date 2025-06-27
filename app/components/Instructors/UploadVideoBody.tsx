'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthInstructors } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import AccountModal from "./AccountModal";
import { showErrorToast } from "@/utils/toastTypes";
import { useParams } from 'next/navigation';
import { courseStore } from "@/zustand/courseStore";
import { get_module_details } from "@/services/courses";
import { Module, Video } from "@/app/Types/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import EmptyPage from "../EmptyPage";

const UploadVideoBody = () => {
    const params = useParams();
    const moduleId = params?.module as string;

    const router = useRouter(); 
    const [videos, setVideos] = useState<Video[]>([]);
    const [module, setModule] = useState<Module>();
    const newUpdate = courseStore((state) => state.newUpdate);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const {
        openModal,
        showModal,
        closeModal,
        loading, 
        setLoading,
        openModalEditVideo,
        buttonLoader,
        deleteVideo,
    } = UseCourses()

    const toggleMenu = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const editVideo = (item: Video) => {
        setOpenIndex(null);
        openModalEditVideo('edit-video', item)
    };

    const deleteVideoTrigger = (id: string | undefined): void => {
        courseStore.getState().setVideoId(id);
        setOpenIndex(null);
        setDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }

    useEffect(() => {
        
        // set loading
        setLoading(true);

        const init = async () => {
            await useAuthInstructors(router);
            if (moduleId) {
                try {
                    const response = await get_module_details(moduleId)
                    if (response.success) {
                        //  save state in page
                        setModule(response.data.module);
                        setVideos(response.data.module.videos);
                        
                        // save state globally
                        courseStore.getState().setModule(response.data.module);
                        courseStore.getState().setVideos(response.data.module.videos);
                        courseStore.getState().setResources(response.data.module.resources);
                    } 
        
                    else {
                        showErrorToast(response.message)
                        console.log(response)
                    }
                }

                catch(error: any) {
                    showErrorToast('Something unexpected happened')
                    console.log(error)
                }
                // store module id in global state
                courseStore.getState().setModuleId(moduleId);
            }

            closeModal(); // always close modal when useEffect is triggered
            setLoading(false);
            courseStore.getState().setNewUpdate('reset');

        };
        init();
    }, [newUpdate]);

    if(loading) return <Loader />
    
    return (
        <div className="container-3">
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 cursor-pointer" onClick={() => router.back()}>
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/left-arrow.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[.9rem] font-semibold">Back</p>
                    </button>
                    <h2 className="title-3 desktop">Video Lessons</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step 3 of 3</p>
                </div>
            </div>

            <div>
                <h2 className="title-3 mt-3 mobile">Video Lessons</h2>

                <div className="upload-course-form">
                    <h2 className="title-3">Module: {module?.title}</h2>
                    <div className="upload-course-body">
                        <h2 className="title-3 mt-2">Add and Manage Videos.</h2>
                        <p className="text-[.9rem] color-grey-text mt-1">Videos are the main content your students will engage with. After creating modules, upload relevant videos under each to deliver your lessons in a clear and structured way.</p>
                    </div>

                    <div className="upload-course-btns mb-4">
                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={(e) => openModal('add-video')}>
                            <div className="bt-btn two">
                                <span>Add New Video</span>
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
                            videos.length > 0 ? (
                                videos.map((item, index) => (
                                    <div className="best-instructor-box" key={index}>
                                        <div className="flex items-center gap-2 left">
                                            <div>
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/video-1.png"
                                                    alt="Colearn Image"
                                                    width={48}
                                                    height={48}
                                                    className="object-cover rounded-[50%]"
                                                />
                                            </div>
                                            <div className="w-[70%]">
                                                <p className="font-semibold">{item.title}</p>
                                                <p className="color-grey-text text-[.8rem] font-semibold">Duration | {item.duration} minutes</p>
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
                                                        <button className="menu-btn" onClick={(e) => editVideo(item)}>
                                                            <FontAwesomeIcon icon={faEdit} className="icon"/> Edit Video
                                                        </button>
                                                        <button className="menu-btn delete" onClick={(e) => deleteVideoTrigger(item.id)}>
                                                            <FontAwesomeIcon icon={faTrashAlt} className="icon"/> Delete Video
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
                                    <EmptyPage image="/assets/images/empty-image.png"  header="No Videos Yet" content="You haven’t added any videos to this module. Start by uploading your first lesson and bring your course to life!" imageWidth={400} imageHeight={240}/>
                                </div>
                            )
                        }
                    </div>
                </div>
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
                                    Are you sure you want to delete this video? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteVideo}
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

export default UploadVideoBody
