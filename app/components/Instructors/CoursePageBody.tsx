'use client';
import React, {useEffect, useState} from "react";
import { useAuthInstructors } from "@/hooks/useAuth";
import { get_course_data, get_course_student } from "@/services/courses";
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
                const [dataRes, courseRes] = await Promise.all([
                    get_course_data(courseId),
                    get_course_student(courseId),
                ]);
                
                if (dataRes.success) {
                    // save state globally
                    console.log(dataRes.data)
                    genralStore.getState().setData(dataRes.data);
                } 
    
                else {
                    showErrorToast(dataRes.message)
                    console.log(dataRes)
                }

                if (courseRes.success) {
                    // save state globally
                    console.log(courseRes.data)
                    genralStore.getState().setCourse(courseRes.data.course);
                } 
    
                else {
                    showErrorToast(courseRes.message)
                    console.log(courseRes)
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
                    <CourseContentBody type="instructor" />
                </div>
                <div className="right">
                    <CourseContentReviews />
                </div>
            </div>
        </div>
    )
}

export default CoursePageBody