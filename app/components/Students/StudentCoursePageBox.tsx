import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyPage from "../EmptyPage";
import { genralStore } from "@/zustand/generalStore";

type StudentCoursePageBoxProps = {
    courseType: string 
}

const StudentCoursePageBox = ({courseType}: StudentCoursePageBoxProps) => {
    const courses = genralStore((state) => state.enrollments)
    console.log(courses)
    return (
        <div>
            {
                (courses ?? []).length > 0 ? (
                    <div className="spacing-inter">
                        {
                            courses.map((item, index) => (
                                <div className="student-course-page-box spacing-inter bod-grey rounded-[.5em] p-2" key={index}>
                                    <div className="top flex items-center justify-between">
                                        <div className="left">
                                            <p className="font-bold">{item.course.title}</p>    
                                        </div>
                                        <div className="right flex items-end justify-end desktop-flex">
                                            <Link href='/students/view-course' className="bt-btn btn btn-small normal">
                                                <span>View Course</span>
                                                {/* <span>
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/arrow-right-black.png"
                                                        alt="Colearn Logo"
                                                        width={20}
                                                        height={20}
                                                        className="object-contain"
                                                    />
                                                </span> */}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="middle">
                                        <div className="left">
                                            <Image
                                                aria-hidden
                                                src={item?.course?.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.course?.thumbnail}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Logo"
                                                width={80}
                                                height={80}
                                                className="object-contain rounded-[.5em]"
                                            />
                                        </div>
                                        <div className={`right ${courseType == "completed" ? "" : "full"}`}>
                                            <div>
                                                <p className="font-semibold">{item.course.title}</p>
                                            </div>
                                            <div className="text-[.8rem] flex items-center gap-1">
                                                <p>By</p>
                                                <p>|</p>
                                                <p>{item.course.instructor.user?.first_name} {item.course.instructor.user?.last_name}</p>
                                            </div>
                                        </div>
                                        {
                                            courseType == "completed" &&
                                            <div className="cert desktop">
                                                <Link href="/students/courses/certificate" className="underline color-normal text-[.9rem]" >View Certificate</Link>
                                            </div>
                                        }
                                    </div>
                                    <div className="bottom">
                                        <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/monitor.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">{item.course.total_duration} hour{item.course.total_duration && item.course.total_duration > 1 ? 's' : ''} on-demand video</p>
                                        </div>
            
                                        {/* <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/help-2.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">1 Practice Test</p>
                                        </div> */}
            
                                        {/* <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/book-2.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">Assignment</p>
                                        </div> */}
            
                                        {/* <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/note-text.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">1 Article</p>
                                        </div> */}
                                        {
                                            item.course.resources.length > 0 ? (
                                                <div className="flex items-center gap-2 ">
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/folder-2.png"
                                                        alt="Colearn Logo"
                                                        width={20}
                                                        height={20}
                                                        className="object-contain"
                                                    />
                                                    <p className="text-[.9rem]">{item.course.resources.length || 0} Resources</p>
                                                </div>
                                            ) : (
                                                ""
                                            )
                                        }
            
                                        <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/help-2.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">Full lifetime access</p>
                                        </div>
            
                                        <div className="flex items-center gap-2 ">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/award.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <p className="text-[.9rem]">Certificate of completion</p>
                                        </div>
                                    </div>
                                    <div className="mobile">
                                        <div className="flex items-center gap-2 justify-between">
                                            <Link href='/students/view-course' className="mt-3 bt-btn btn btn-small normal">
                                                <span>View Course</span>
                                                {/* <span>
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/arrow-right-black.png"
                                                        alt="Colearn Logo"
                                                        width={20}
                                                        height={20}
                                                        className="object-contain"
                                                    />
                                                </span> */}
                                            </Link>
                                            {
                                                courseType == "completed" &&
                                                <Link href='/students/courses/certificate' className="mt-3 bt-btn btn btn-primary-fill">
                                                    <span>View Certificate</span>
                                                </Link>
                                            }
                                        </div>
                                    </div>                
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <EmptyPage image="/assets/images/empty-image.png" linkTitle="Explore courses" header="No Enrollment Yet" content="You haven't enrolled in any course yet. Start learning by exploring our available courses!" link="/students/explore" imageWidth={400} imageHeight={240}/>
                    </div>
                )
            }
        </div>

    )
}

export default StudentCoursePageBox