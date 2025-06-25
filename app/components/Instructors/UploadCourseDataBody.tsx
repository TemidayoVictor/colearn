'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthInstructors } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { UseCourses } from "@/hooks/useCourses";
import Loader from "../Loader";
import { showErrorToast } from "@/utils/toastTypes";
import { useParams } from 'next/navigation';
import { courseStore } from "@/zustand/courseStore";
import { get_course_details } from "@/services/courses";
import { Course } from "@/app/Types/types";
import UploadModuleBody from "./UploadModuleBody";
import UploadResourceBody from "./UploadResourceBody";

const UploadCourseDataBody = () => {
    const params = useParams();
    const courseId = params?.course as string;

    const router = useRouter(); 
    const [course, setCourse] = useState<Course>();

    const [selectedTab, setSelectedTab] = useState<string>('Modules');
    const newUpdate = courseStore((state) => state.newUpdate);

    const {
        loading, 
        setLoading,
        buttonLoader,
        publishCourse,
    } = UseCourses()

    useEffect(() => {
        // set loading
        setLoading(true);

        const init = async () => {
            await useAuthInstructors(router);
            if (courseId) {
                try {
                    const response = await get_course_details(courseId)
                    if (response.success) {
                        //  save state in page
                        setCourse(response.data.course);
                        
                        // save state globally
                        courseStore.getState().setCourse(response.data.course);
                        courseStore.getState().setModules(response.data.course.modules);

                        const modules = response.data.course.modules;
                        const allModuleVideos = (modules || []).flatMap((module: any) => module.videos ?? []);

                        courseStore.getState().setVideos(allModuleVideos);
                        courseStore.getState().setResources(response.data.course.resources);
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
            }

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
                    <h2 className="title-3 desktop">{selectedTab}</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step 2 of 3</p>
                </div>
            </div>

            <div>
                <h2 className="title-3 mt-3 mobile">{selectedTab}</h2>

                <div className="upload-course-form">
                    
                    <div className="in-nav four mb-[1.5em]">
                        <span className={`in-nav-link color-grey-text ${selectedTab == 'Modules' ? 'active' : ''}`} onClick={() => setSelectedTab('Modules')}>Modules</span>
                        <span className={`in-nav-link color-grey-text ${selectedTab == 'Resources' ? 'active' : ''}`} onClick={() => setSelectedTab('Resources')}>Resources</span>
                    </div>

                    <div>
                        <div className="mb-4 flex items-start justify-between">
                            <h2 className="title-3 w-[75%]">{course?.title}</h2>
                            {
                                course?.is_published ? (
                                    <p className="success">Published</p>
                                ) :

                                (
                                    <button className="flex items-center justify-center gap-2 btn btn-success btn-small" onClick={publishCourse}>
                                        <div className="bt-btn two">
                                            <span> 
                                                {
                                                    buttonLoader ? ('Loading') : ('Publish')
                                                }
                                            </span>
                                        </div>                                        
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    
                    {
                        selectedTab == 'Modules' &&
                        <UploadModuleBody />
                    }

                    {
                        selectedTab == 'Resources' &&
                        <UploadResourceBody />
                    }

                </div>
            </div>
            
        </div>
    )
}

export default UploadCourseDataBody