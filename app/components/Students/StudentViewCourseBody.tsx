'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";
import { checkAuth } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { useParams } from "next/navigation";
import { get_course_details } from "@/services/courses";
import StudentViewCourseContent from "./StudentViewCourseContent";
import StudentViewCourseArticle from "./StudentViewCourseArticle";
import StudentViewCourseTest from "./StudentViewCourseTest";
import StudentViewCourseMenu from "./StudentViewCourseMenu";
import StudentViewCourseMaterial from "./StudentViewCourseMaterial";
import AdminViewCourseMaterial from "../Admin/AdminViewCourseMaterial";
import Loader from "../Loader";

type Props = {
    type?: string
}

const StudentViewCourseBody = ({type}: Props) => {
    const params = useParams();
    const courseId = params?.course as string;

    const [selectedTab, setSelectedTab] = useState<string>('overview');
    const [courseTitle, setCourseTitle] = useState<string>('');

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    }

    const router = useRouter();
    
    const user = authStore((state) => state.user);
    const userId = user?.id;

    const [loading, setLoading] = useState<Boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await checkAuth(router); // ✅ valid usage
            if(!courseId || !userId) return
            try {
                const response = await get_course_details(courseId, userId);
                if (response.success) {
                    console.log(response)
                    // save state globally
                    courseStore.getState().setCourse(response.data.course);

                    // save course title
                    setCourseTitle(response.data.course.title);
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

    }, [newUpdate, courseId, userId]);

    if(loading) return <Loader />

    return (
        <div>
            <div>
                <Link href={ type == 'admin' ? '/admin/courses' : '/students/courses'} className="flex items-center gap-2 cursor-pointer">
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
                <div>
                    <h2 className="title-3">{courseTitle}</h2>
                </div>

                <div className="student-view-course-body">
                    <div className="left">
                        <StudentViewCourseMenu selectedTab={selectedTab} changeTab = {handleTabChange}/>
                    </div>
                    <div className="right">
                        {
                            selectedTab == "overview" &&
                            <div>
                                <StudentViewCourseContent />
                            </div>
                        }

                        {
                            selectedTab == "material" && user?.type != "admin" &&
                            <StudentViewCourseMaterial />
                        }

                        {
                            selectedTab == "material" && user?.type == "admin" &&
                            <AdminViewCourseMaterial />
                        }

                        {
                            selectedTab == "articles" &&
                            <div>
                                <StudentViewCourseArticle />
                            </div>
                        }

                        {
                            selectedTab == "test" &&
                            <div>
                                <StudentViewCourseTest />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentViewCourseBody