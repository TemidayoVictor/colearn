import React from "react";
import Image from "next/image";
import Link from "next/link";

type StudentCoursePageBoxProps = {
    courseType: string 
}

const StudentCoursePageBox = ({courseType}: StudentCoursePageBoxProps) => {
    return (
        <div className="spacing-inter">
            {
                [1,2,3].map((item, index) => (
                    <div className="student-course-page-box spacing-inter bod-grey rounded-[.5em] p-2" key={index}>
                        <div className="top flex items-center justify-between">
                            <div className="left">
                                <p className="font-bold">Google Cybersecurity Professional Certificate</p>    
                            </div>
                            <div className="right flex items-end justify-end desktop-flex">
                                <Link href='/students/view-course' className="bt-btn btn normal">
                                    <span>View Course</span>
                                    <span>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/arrow-right-black.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="left">
                                <Image
                                    aria-hidden
                                    src="/assets/images/student-course-image.png"
                                    alt="Colearn Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain rounded-[.5em]"
                                />
                            </div>
                            <div className={`right ${courseType == "completed" ? "" : "full"}`}>
                                <div className="text-[.8rem] flex items-center gap-1">
                                    <p>Course</p>
                                    <p>|</p>
                                    <p>Olusegun Obasanjo</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Play it safe: Manage  Security Risk</p>
                                </div>
                            </div>
                            {
                                courseType == "completed" &&
                                <div className="cert desktop">
                                    <Link href="/" className="underline color-normal text-[.9rem]" >View Certificate</Link>
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
                                <p className="text-[.9rem]">26.5 hours on-demand video</p>
                            </div>

                            <div className="flex items-center gap-2 ">
                                <Image
                                    aria-hidden
                                    src="/assets/images/help-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">1 Practice Test</p>
                            </div>

                            <div className="flex items-center gap-2 ">
                                <Image
                                    aria-hidden
                                    src="/assets/images/book-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Assignment</p>
                            </div>

                            <div className="flex items-center gap-2 ">
                                <Image
                                    aria-hidden
                                    src="/assets/images/note-text.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">1 Article</p>
                            </div>

                            <div className="flex items-center gap-2 ">
                                <Image
                                    aria-hidden
                                    src="/assets/images/folder-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">8 downloadable resources</p>
                            </div>

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
                                <Link href='/students/view-course' className="mt-3 bt-btn btn normal">
                                    <span>View Course</span>
                                    <span>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/arrow-right-black.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </span>
                                </Link>
                                {
                                    courseType == "completed" &&
                                    <Link href='/' className="mt-3 bt-btn btn btn-primary-fill">
                                        <span>View Certificate</span>
                                    </Link>
                                }
                            </div>
                        </div>                
                    </div>
                ))
            }
        </div>
    )
}

export default StudentCoursePageBox