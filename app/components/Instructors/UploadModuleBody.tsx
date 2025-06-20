'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthInstructors } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import AccountModal from "./AccountModal";

type UploadModuleBodyProps = {
    course_id: string
}

const UploadModuleBody = ({course_id}: UploadModuleBodyProps) => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const {
        buttonLoader,
        uploadModule,
        formData2,
        errors2,
        handleInputChange2,
        openModal,
        showModal,
        closeModal,
    } = UseCourses()

    useEffect(() => {
        const init = async () => {
          await useAuthInstructors(router);
          
          setLoading(false);
        };
        init();
    }, []);
    
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
                    <h2 className="title-3">Course Title</h2>
                    <div className="upload-course-body">
                        <h2 className="title-3 mt-2">Add and Manage Modules.</h2>
                        <p className="text-[.8rem] color-grey-text mt-1"> Modules are the building blocks of your course. Each module represents a specific section or topic within the course—for example, "Introduction", "Getting Started", or "Advanced Techniques".
                        After uploading your course, you’ll be guided to create modules. Once your modules are set up, you can begin uploading videos under each module to organize your content clearly and effectively.</p>
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