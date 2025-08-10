'use client';
import React, {useState, useMemo} from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyPage from "../EmptyPage";
import { genralStore } from "@/zustand/generalStore";
import AccountModal from "../Instructors/AccountModal";
import { Course, Review } from "@/app/Types/types";

type StudentCoursePageBoxProps = {
    courseType: string 
}

const StudentCoursePageBox = ({courseType}: StudentCoursePageBoxProps) => {
    const [showModal, setShowModal] = useState<string | null>(null);

    const courses = genralStore((state) => state.enrollments);
    const courseUse = useMemo(() => {
        if (courseType === 'completed') {
            return Array.isArray(courses)
                ? courses.filter((course) => course.completed_at != null)
                : [];
        } else {
            return courses;
        }
    }, [courseType, courses]);

    console.log(courseUse);

    
    const openModal = (key: string) => {
        setShowModal(key);
    }

    const closeModal = () => setShowModal(null);

    const reviewTrigger = (item: Review, course: Course): void => {
        genralStore.getState().setReview(item);
        genralStore.getState().setCourse(course);
        openModal("review");
    }

    return (
        <div>
            {
                (courseUse ?? []).length > 0 ? (
                    <div className="spacing-inter">
                        {
                            courseUse.map((item, index) => (
                                <div className="student-course-page-box spacing-inter bod-grey rounded-[.5em] p-2" key={index}>
                                    <div className="top flex items-center justify-between">
                                        <div className="left">
                                            <p className="font-bold">{item.course.title}</p>    
                                        </div>
                                        <div className="right flex items-end gap-1 justify-end desktop-flex">
                                            <Link href={`/students/view-course/${item.course.id}`} className="bt-btn btn btn-small normal">
                                                <span>View</span>
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

                                            <button className="bt-btn btn btn-small normal" onClick={(e) => reviewTrigger(item.review, item.course)}>
                                                <span>Review</span>
                                            </button>
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
                                        <div className={`right ${item.completed_at ? "" : "full"}`}>
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
                                            item.completed_at  &&
                                            <div className="cert desktop">
                                                <Link href={`/students/courses/certificate/${item.course.id}`} className="underline color-normal text-[.9rem]" >View Certificate</Link>
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
                                        <div className="flex items-center gap-2 justify-between mt-3">
                                            <Link href={`/students/view-course/${item.course.id}`} className="bt-btn btn btn-small normal">
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
                                            <button className="bt-btn btn btn-small normal" onClick={(e) => reviewTrigger(item.review, item.course)}>
                                                <span>Review</span>
                                            </button>
                                        </div>

                                        <div>
                                            {
                                                item.completed_at &&
                                                <Link href={`/students/courses/certificate/${item.course.id}`} className="mt-3 bt-btn btn btn-primary-fill">
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
                        {
                            courseType == "completed" ? (
                                <EmptyPage image="/assets/images/empty-image.png" linkTitle="Explore courses" header="No completed courses" content="You haven't completed any course yet. " link="/students/explore" imageWidth={400} imageHeight={240}/>
                            ) : (
                                <EmptyPage image="/assets/images/empty-image.png" linkTitle="Explore courses" header="No Enrollment Yet" content="You haven't enrolled in any course yet. Start learning by exploring our available courses!" link="/students/explore" imageWidth={400} imageHeight={240}/>
                            )
                        }
                    </div>
                )
            }
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>

    )
}

export default StudentCoursePageBox