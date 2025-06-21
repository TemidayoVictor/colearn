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
import { get_modules } from "@/services/courses";
import { Module, Course } from "@/app/Types/types";

const UploadModuleBody = () => {
    const params = useParams();
    const courseId = params?.course as string;

    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);
    const [modules, setModules] = useState<Module[]>([]);
    const [course, setCourse] = useState<Course>();

    const {
        openModal,
        showModal,
        closeModal,
        newUpdate,
    } = UseCourses()

    useEffect(() => {
        const init = async () => {
            await useAuthInstructors(router);
            if (courseId) {
                try {
                    const response = await get_modules(courseId)
                    if (response.success) {
                        //  save state in page
                        setCourse(response.data.course);
                        setModules(response.data.modules);
                        
                        // save state globally
                        courseStore.getState().setCourse(response.data.course);
                        courseStore.getState().setModule(response.data.modules);
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
                // store course id in global state
                courseStore.getState().setCourseId(courseId);
                setLoading(false);
            }

        };
        init();
    }, [newUpdate]);
    
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
                    <h2 className="title-3 desktop">Modules</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step 2 of 3</p>
                </div>
            </div>

            <div>
                <h2 className="title-3 mt-3 mobile">Modules</h2>

                <div className="upload-course-form">
                    <h2 className="title-3">{course?.title}</h2>
                    <div className="upload-course-body">
                        <h2 className="title-3 mt-2">Add and Manage Modules.</h2>
                        <p className="text-[.8rem] color-grey-text mt-1"> Modules are the building blocks of your course. Each module represents a specific section or topic within the course—for example, "Introduction", "Getting Started", or "Advanced Techniques".
                        After uploading your course, you’ll be guided to create modules. Once your modules are set up, you can begin uploading videos under each module to organize your content clearly and effectively.</p>
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

                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default UploadModuleBody