'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import CoursesBox from "./CoursesBox";

const CoursesBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('live');
    const [selectedView, setSelectedView] = useState<string>('grid');
    return (
        <div className="mt-[2em]">
            <div className="in-nav mb-[1.5em] flex items-center justify-between">
                
                <div className="in-nav two">
                    <span className={`in-nav-link flex gap-2 items-center two color-grey-text ${selectedTab == 'live' ? 'active' : ''}`} onClick={() => setSelectedTab('live')}> <span>Live Courses</span> <span className="number">24</span></span>
                    <span className={`in-nav-link flex gap-2 items-center two color-grey-text ${selectedTab == 'draft' ? 'active' : ''}`} onClick={() => setSelectedTab('draft')}> <span>Draft</span> <span className="number">3</span></span>
                    <span className={`in-nav-link flex gap-2 items-center two color-grey-text ${selectedTab == 'trash' ? 'active' : ''}`} onClick={() => setSelectedTab('trash')}> <span>Trash</span> <span className="number">2</span></span>
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-2 bg-white py-[.1em] px-[.7em] rounded-[.3rem] bod-grey courses-search-lenght">
                        <Image
                            aria-hidden
                            src="/assets/images/search-normal-2.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <div className="w-[100%]">
                            <input type="text" placeholder="Search" className="w-[100%] color-grey-text text-[.9rem] p-[.3em]" />
                        </div>
                    </div>

                    <div>
                        <Link href="/instructors/upload-course" className="btn normal ">Upload Course</Link>
                    </div>
                </div>  
            </div>

            <div className="spacing-inter">
                <CoursesBox view={selectedView}  />
            </div>
        </div>
    )
}

export default CoursesBody