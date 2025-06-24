'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import UploadCourseForm from "./UploadCourseForm";
import Link from "next/link";
import { useAuthInstructors } from "@/hooks/useAuth";
import Loader from "../Loader";
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { UseCourses } from "@/hooks/useCourses";
import { Course } from "@/app/Types/types";
import { get_course_details_edit } from "@/services/courses";
import { showErrorToast } from "@/utils/toastTypes";
import { courseStore } from "@/zustand/courseStore";

const EditCourseBody = () => {
    const params = useParams();
    const courseId = params?.course as string;

    const router = useRouter(); 
    const [course, setCourse] = useState<Course>();

    const [step, setStep] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const updateStep = (newstep: number) => {
        setStep(newstep);
    }

    useEffect(() => {
        const init = async () => {
          await useAuthInstructors(router); // ✅ valid usage
            
            if (courseId) {
                try {
                    const response = await get_course_details_edit(courseId)
                    if (response.success) {
                        //  save state in page
                        setCourse(response.data.course);

                        // save state globally
                        courseStore.getState().setCourse(response.data.course);
                        courseStore.getState().setCourseId(response.data.course.id);
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
            }

          setLoading(false);
        };

        init();
    }, []);

    if(loading) return <Loader />
    
    return (
        <div>
            
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
                    {
                        step < 3 &&
                        <h2 className="title-3 desktop">Create Course</h2>
                    }
                </div>
                <div>
                    {
                        step < 3 &&
                        <p className="text-[.9rem] color-grey-text">Step {step + 1} of 3</p>
                    }
                </div>
            </div>

            <div>
                {
                    step < 3 &&
                    <h2 className="title-3 mt-3 mobile">Edit Course</h2>
                }
                <UploadCourseForm sendData={updateStep} type='edit'/>
            </div>

        </div>
    )
}

export default EditCourseBody