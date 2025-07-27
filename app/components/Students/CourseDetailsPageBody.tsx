'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { useAuthStudent } from "@/hooks/useAuth";
import { useParams } from "next/navigation";
import { get_course_details } from "@/services/courses";
import CourseContentBody from "../Instructors/CourseContentBody";
import CourseContentReviews from "../Instructors/CourseContentReviews";
import Loader from "../Loader";
import { showErrorToast } from "@/utils/toastTypes";

const CourseDetailsPageBody = () => {
    const router = useRouter();
    
    const params = useParams();
    const courseId = params?.course as string;

    const [loading, setLoading] = useState<Boolean>(true);
    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); // ✅ valid usage
            if(!courseId) return
            try {
                const response = await get_course_details(courseId);
                if (response.success) {
                    console.log(response)
                    // save state globally
                    genralStore.getState().setCourse(response.data.course);
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
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate, courseId]);

    if(loading) return <Loader />

    return (
        <div className="course-content container-3b">
            <div className="left">
                <CourseContentBody type="student" />
            </div>
            <div className="right mt-2">
                <CourseContentReviews />
            </div>
        </div>
    )
}

export default CourseDetailsPageBody;