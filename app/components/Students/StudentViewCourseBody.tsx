'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import StudentViewCourseContent from "./StudentViewCourseContent";

const StudentViewCourseBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('overview');
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
                    <div className="left">
                        <div className={`${selectedTab == "overview" ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}>
                            <p className="text-[.9rem]">Course Overview</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[.9rem]">Course Material</p>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-down-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                        <div className={`${selectedTab == "articles" ? 'active' : ''}`} onClick={() => setSelectedTab('articles')}>
                            <p className="text-[.9rem]">Articles</p>
                        </div>
                        <div className={`${selectedTab == "test" ? 'active' : ''}`} onClick={() => setSelectedTab('test')}>
                            <p className="text-[.9rem]">Quiz / Practice Test</p>
                        </div>
                    </div>
                    <div className="right">
                        {
                            selectedTab == "overview" &&
                            <div>
                                <StudentViewCourseContent />
                            </div>
                        }

                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentViewCourseBody