'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { checkAuth } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { enrolled_courses } from "@/services/courses";
import StudentCoursePageBox from "./StudentCoursePageBox";
import Loader from "../Loader";


const StudentCoursePageBody = () => {
    const router = useRouter();

    const user = authStore((state) => state.user);
    const userId = user?.id;

    const [loading, setLoading] = useState<Boolean>(true);
    const [selectedTab, setSelectedTab] = useState<string>('inprogress');

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await checkAuth(router); // ✅ valid usage
            if(!userId) return
            try {
                const response = await enrolled_courses(userId);
                if (response.success) {
                    console.log(response)
                    // save state globally
                    genralStore.getState().setEnrollments(response.data.courses);
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

    }, [newUpdate, userId]);

    if(loading) return <Loader />

    return (
        <div>
            <h2 className="title-2">My Courses</h2>

            <div className="mt-[1.5em]">
                <div className="in-nav no">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'inprogress' ? 'active' : ''}`} onClick={() => setSelectedTab('inprogress')}> <span>In Progress</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'completed' ? 'active' : ''}`} onClick={() => setSelectedTab('completed')}> <span>Completed</span></span>
                </div>
            </div>

            <div>
                {
                    selectedTab == 'inprogress' &&
                    <StudentCoursePageBox courseType="inprogress" />
                }

                {
                    selectedTab == 'completed' &&
                    <StudentCoursePageBox courseType="completed" />
                }
            </div>
        </div>
    )
}

export default StudentCoursePageBody;