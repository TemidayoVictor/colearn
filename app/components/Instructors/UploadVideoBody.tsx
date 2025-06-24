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

const UploadVideoBody = () => {
    const params = useParams();
    const moduleId = params?.module as string;

    const router = useRouter(); 
    const [videos, setVideos] = useState<Video[]>([]);
    const [module, setModule] = useState<Module>();
    const newUpdate = courseStore((state) => state.newUpdate);

    const {
        openModal,
        showModal,
        closeModal,
        loading, 
        setLoading,
    } = UseCourses()

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
                    <Link href='/instructors/courses' className="flex items-center gap-2 cursor-pointer">
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
                    </Link>
                    <h2 className="title-3 desktop">Video Lessons</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step 2 of 3</p>
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

                    <div className="best-instructor-cont">
                        {
                            videos.map((item, index) => (
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
                                            <p className="font-semibold">Benson Thomas</p>
                                            <p className="color-grey-text text-[.8rem]">10 IT & Engineering Courses</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <Link href='/' className="bt-btn btn btn-primary-fill desktop">
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
                                        </Link>

                                        <Link href='/' className="mobile">
                                            <span className="underline text-[.8rem]">View Courses</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="upload-course-btns">
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

                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default UploadVideoBody
