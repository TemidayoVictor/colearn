'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const StudentLectureBody = () => {
    const [openMaterial, setOpenMaterial] = useState<number | null>(null);
    const openMaterialBox = (index:number ) => {
        setOpenMaterial(prev => (prev == index ? null : index));
    }
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
    const openVideo = (index:number ) => {
        setSelectedVideo(prev => (prev == index ? null : index));
    }
    const [courseContent, setCourseContent] = useState<boolean>(true);
    const toggleCourseContent = () => {
        setCourseContent(prev => !prev);
    }
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
                    <h2 className="title-3">Google cybersecurity Professional Certificate</h2>
                </div>

                <div className="student-view-course-body">
                    <div className="mobile w-full">
                        <div className="flex items-center justify-between bod-grey p-2 rounded-[.3em] mb-2" onClick={() => toggleCourseContent()}>
                            <p className="font-bold">{courseContent ? "Hide" : "Show"} Content</p>
                            {
                                courseContent ? (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-up.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                ) : (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-down-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                )
                            }
                        </div>
                    </div>       
                    {
                        courseContent &&
                        <div className="left two">
                            <div className="student-view-course-menu">
                                
                                {
                                    [1,2,3,4,5].map((item, index) => (
                                        <div className={`left-content ${openMaterial == index ? 'active' : ''}`} key={index} onClick={() => openMaterialBox(index)}>
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-[.9rem]">Course Material</p>
                                                {
                                                    openMaterial == index ? (
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/arrow-up.png"
                                                            alt="Colearn Logo"
                                                            width={15}
                                                            height={15}
                                                            className="object-contain"
                                                        />
                                                    ) : (
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/arrow-down-2.png"
                                                            alt="Colearn Logo"
                                                            width={15}
                                                            height={15}
                                                            className="object-contain"
                                                        />
                                                    )
                                                }
                                            </div>
                                            
                                            {
                                                openMaterial == index &&

                                                <div className="">
                                                    {
                                                        [1,2,3].map((item, index2) => (
                                                            <div className={`module ${selectedVideo == index2 + index ? 'active' : ''}`} key={index2} onClick={(e) => {
                                                                e.stopPropagation();
                                                                openVideo(index2 + index)
                                                                }}>
                                                                    
                                                                <div className="flex items-center gap-1">
                                                                    <div>
                                                                        <Image
                                                                            aria-hidden
                                                                            src="/assets/images/video.png"
                                                                            alt="Colearn Logo"
                                                                            width={24}
                                                                            height={24}
                                                                            className="object-contain"
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center justify-between w-[80%]">
                                                                        <p className="w-[68%]">Module {index2} Lorm . . .</p>
                                                                        <div className="w-[31%] flex items-end justify-end">
                                                                            <p>115 mins</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }

                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    }
                    <div className="right">
                        <h2 className="title-3 mt-1">Video Title</h2>
                        <div className="lecture-video">
                            <Image
                                aria-hidden
                                src="/assets/images/shadow.png"
                                alt="Colearn Logo"
                                width={790}
                                height={347}
                                className="object-contain"
                            />
                        </div>
                        <div className="res-flex gap-2 mt-3">
                            <button className="bt-btn btn btn-primary-fill ">
                                <span>Mark Completed</span>
                                <span>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/check-white.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </span>
                            </button>
                            
                            <button className="bt-btn btn normal">
                                <span>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/download-1.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </span>
                                <span>Download Video</span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLectureBody