'use client';
import React, {useState, useEffect} from "react";
import { get_certificate } from "@/services/courses";
import { checkAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { showErrorToast } from "@/utils/toastTypes";
import { Enrollment } from "@/app/Types/types";
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader";

const StudentCertificatePageBody = () => {
    const params = useParams();
    const courseId = params?.course as string;

    const router = useRouter();
    const [loading, setLoading] = useState<Boolean>(true);

    const [cert, setCert] = useState<Enrollment>()

    const user = authStore((state) => state.user);
    const userId = user?.id;

    const formatDate = (dateString: string | undefined | null) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).format(date);
    };

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await checkAuth(router); // ✅ valid usage
            if(!userId || !courseId) return
            try {
                const response = await get_certificate(userId, courseId);
                if (response.success) {
                    // save cart on page
                    setCert(response.data.certificate)
                    // save state globally
                } 
    
                else {
                    showErrorToast(response.message)
                    router.push('/students/courses')
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            setLoading(false);
        };
        init();

    }, [userId, courseId]);

    if(loading) return <Loader />

    return (
        <div>
            <div>
                <Link href='/students/courses' className="flex items-center gap-2 cursor-pointer">
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
                    <h2 className="title-3">Course Certification</h2>
                </div>
            </div>

            <div className="student-certificate-body spacing-inter">
                <div className="left">
                    <div>
                        <p className="font-semibold mb-4"> {cert?.course.title} </p>
                        <div className="cerificate-content">
                            <div className="left-2">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src={cert?.course.instructor?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${cert?.course.instructor?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                        alt="Colearn Logo"
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <Image
                                        aria-hidden
                                        src="/assets/images/success-check.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain ab-img left-[65%] top-[70%]"
                                    />
                                </div>
                            </div>
                            <div className="right-2">
                                <p className="font-semibold">Completed by {cert?.user?.first_name} {cert?.user?.last_name}</p>
                                <p className="color-grey-text text-[.7rem]">{formatDate(cert?.completed_at)}</p>
                                {/* <p className="font-semibold">36 hours (approximately)</p> */}
                                <p className="text-[.8rem]"><span className="font-semibold mr-1">Instructor:</span> {cert?.course.instructor.user?.first_name} {cert?.course.instructor.user?.last_name}</p>
                                <p className="text-[.9rem]">{cert?.user?.first_name} {cert?.user?.last_name}'s account is verified. CoLearn certifies their successful completion of {cert?.course.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="right">
                    <div className="certificate-box">

                    </div>
                    <div className="res-flex gap-2 mt-3">
                        <button className="bt-btn btn btn-primary-fill ">
                            <span>
                                <Image
                                    aria-hidden
                                    src="/assets/images/download-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </span>
                            <span>Download Certficate</span>
                        </button>
                        
                        <button className="bt-btn btn normal">
                            <span>Share Certificate</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default StudentCertificatePageBody