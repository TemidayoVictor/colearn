'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { courseStore } from "@/zustand/courseStore";
import EmptyPage from "../EmptyPage";

const StudentViewCourseMaterial = () => {
    const course = courseStore((state) => state.course);
    const modules = course?.modules;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
        
    const toggleCourse = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };
    return (
        <div>
            <h2 className="title-3 mt-2">Course Content</h2>
            <div>
                {
                    (modules ?? []).length > 0 ? (
                    <div>
                        {
                            modules?.map((item, index ) => (
                                <div className="faq-body-2" key={index}>
                                    <div className="faq" onClick={() => toggleCourse(index)}>
                                        <p className="font-semibold w-[80%]">{item.title}</p>
                                        <div>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/arrow-down.png"
                                                alt="Colearn Logo"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {
                                        openIndex === index &&
                                        <div className="material-content">
                                            {
                                                (item?.videos ?? []).length > 0 ? (
                                                    <div>
                                                        {
                                                            item?.videos.map((item, index) => (
                                                                <Link href={`/students/view-course/lecture/${item.id}`} key={index} className="material-box">
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
                                                                    <div>
                                                                        <div>
                                                                            <p>{item.title}</p>
                                                                            <div className="flex items-center gap-2 text-[.8rem] mt-1">
                                                                                <p>video</p>
                                                                                <p>&middot;</p>
                                                                                <p>{item.duration} mins</p>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="alert notification text-center text-[.9rem]">This module doesn't have any video yet. Please check back soon!</p>
                                                    </div>
                                                )
                                            }

                                            {/* <div className="material-box">
                                                <div>
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/reading.png"
                                                        alt="Colearn Logo"
                                                        width={24}
                                                        height={24}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <div>
                                                        <p>From Abacus to analytical engine</p>
                                                        <div className="flex items-center gap-2 text-[.8rem] mt-1">
                                                            <p>reading</p>
                                                            <p>&middot;</p>
                                                            <p>5 mins</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div> */}
                                        </div> 
                                    }
                                </div>
                            ))
                        }
                    </div>
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png" header="No Modules Found" content="This course doesn't have any modules yet. Please check back soon!"  imageWidth={400} imageHeight={240}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default StudentViewCourseMaterial