import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";

const StudentCourseBox = () => {
    const enrollments = genralStore((state) => state.enrollments)
    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Your Courses</h2>
                <Link href="/students/explore" className="text-[.9rem] underline color-normal">All Courses</Link>
            </div>
            <div className="courses-container student">
                {
                    enrollments.length > 0 ? (
                        enrollments.map((item, index) => (
                            <Link href='course-page' className="course-box" key={index}>
                                <div className="course-top">
                                    <Image
                                        aria-hidden
                                        src={item.course.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.course.thumbnail}` : "/assets/images/course-img-2.png"}
                                        alt="Colearn Image"
                                        width={254}
                                        height={233}
                                        className="object-cover rounded-[.5em] w-[100%]"
                                    />
                                </div>
                                <div className="course-bottom">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="w-[75%]">
                                            <p className="font-bold text-res-1"> {item.course.title} </p>
                                            <p className="text-res-2 color-grey-text font-semibold"> {item.course.instructor.user?.first_name} {item.course.instructor.user?.last_name}</p>
                                        </div>
                                        <div>
                                            <Image
                                                aria-hidden
                                                src={item.course.instructor?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.course.instructor?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Image"
                                                width={44}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
    
                                    <div>
                                        <div className="progress-container">
                                            <div className="progress-bar two" style={{ width: `${index * 10}%` }}></div>
                                        </div>
                                        <p className="text-res-2 mb-2 mt-1">Completed <span className="font-semibold">{index * 10}%</span></p>
                                    </div>
    
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            
                                            <div className="flex items-center gap-1">
                                                <div>
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/moneys-3.png"
                                                        alt="Colearn Image"
                                                        width={20}
                                                        height={20}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className="text-res-2">$ {item.course.price} </p>
                                            </div>
    
                                            <div className="flex items-center gap-1">
                                                <div>
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/people-3.png"
                                                        alt="Colearn Image"
                                                        width={20}
                                                        height={20}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className="text-res-2">134 Enrolled</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="mt-4 text-center">You have not enrolled for any courses</p>
                    )
                }
            </div>
        </div>
    )
}

export default StudentCourseBox;