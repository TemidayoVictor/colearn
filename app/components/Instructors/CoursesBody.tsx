'use client';
import React, {useState, useMemo} from "react";
import Image from "next/image";
import Link from "next/link";
import CoursesBox from "./CoursesBox";
import { courseStore } from "@/zustand/courseStore";

const CoursesBody = () => {
    const courses = courseStore((state) => state.courses);
    const publishedCoursesCount = courses.filter(course => course.is_published).length;
    const draftedCoursesCount = courses.filter(course => !course.is_published).length;
    

    const [selectedTab, setSelectedTab] = useState<string>('live');
    const [selectedView, setSelectedView] = useState<string>('grid');

    return (
        <div className="mt-[2em]">
            <div className="in-nav mb-[1.5em] flex items-center justify-between">
                <div className="in-nav two scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'live' ? 'active' : ''}`} onClick={() => setSelectedTab('live')}> <span>Published Courses</span> <span className="number"> {publishedCoursesCount} </span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'draft' ? 'active' : ''}`} onClick={() => setSelectedTab('draft')}> <span>Drafts</span> <span className="number">{draftedCoursesCount}</span></span>
                </div>

                <div className="desktop-flex items-center gap-3">
                    <div className={`desktop view-toggle ${selectedView == 'grid' ? 'active' : ''}`} onClick={() => setSelectedView('grid')}>
                        {
                            selectedView == 'grid' ? 
                            <Image
                                aria-hidden
                                src="/assets/images/element-2-1-active.png"
                                alt="Colearn Image"
                                width={16}
                                height={16}
                                className="object-cover"
                            /> 
                            
                            : 
                            
                            <Image
                                aria-hidden
                                src="/assets/images/element-2-1.png"
                                alt="Colearn Image"
                                width={16}
                                height={16}
                                className="object-cover"
                            />
                        }
                    </div>
                    
                    <div className={`desktop view-toggle ${selectedView == 'table' ? 'active' : ''}`} onClick={() => setSelectedView('table')}>
                        {
                            selectedView == 'table' ? 
                            <Image
                                aria-hidden
                                src="/assets/images/menu-blue.png"
                                alt="Colearn Image"
                                width={16}
                                height={16}
                                className="object-cover"
                            /> 
                            
                            : 
                            
                            <Image
                                aria-hidden
                                src="/assets/images/menu-3.png"
                                alt="Colearn Image"
                                width={16}
                                height={16}
                                className="object-cover"
                            />
                        }
                
                    </div>
                </div>
            </div>

            <div className="spacing-inter">
                <div className="upload-course-top">
                    <div className="flex gap-2 left">
                        {/* <div className="search-container">
                            <Image
                                aria-hidden
                                src="/assets/images/search-normal-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <div className="w-[100%]">
                                <input type="text" placeholder="Search" className="w-[100%] color-grey-text text-[.9rem]" />
                            </div>
                        </div>

                        <button className="btn btn-primary-fill">Search</button> */}
                    </div>

                    <div className="right">
                        <Link href="/instructors/upload-course" className="btn btn-primary-fill">Upload Course</Link>
                    </div>
                </div>  
            </div>

            <div className="spacing-inter">
                <CoursesBox view={selectedView} tab={selectedTab}  />
            </div>
        </div>
    )
}

export default CoursesBody