'use client';
import React, {useEffect, useState} from "react";
import { useAuthInstructors } from "@/hooks/useAuth";
import { get_course_data } from "@/services/courses";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import CourseRevenue from "./CourseRevenue";
import CourseContentBody from "./CourseContentBody";
import CourseContentReviews from "./CourseContentReviews";
import Loader from "../Loader";

const CoursePageBody = () => {

    const params = useParams();
    const courseId = params?.course as string;

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const init = async () => {
            await useAuthInstructors(router); // ✅ valid usage
            if(!courseId) return
            try {
                const response = await get_course_data(courseId);
                if (response.success) {
                    // save state globally
                    console.log(response.data)
                    genralStore.getState().setData(response.data);
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
            // courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();
    }, [courseId]);

    if (loading) return <Loader />

    return (
        <div>
            <div>
                <CourseRevenue link='/instructors/courses'/>
            </div>
            <div className="course-content container-3b">
                <div className="left">
                    <CourseContentBody />
                </div>
                <div className="right">
                    <CourseContentReviews />
                </div>
            </div>
        </div>
    )
}

export default CoursePageBody