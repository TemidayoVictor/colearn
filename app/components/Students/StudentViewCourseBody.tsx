'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import StudentViewCourseContent from "./StudentViewCourseContent";
import StudentViewCourseArticle from "./StudentViewCourseArticle";
import StudentViewCourseTest from "./StudentViewCourseTest";
import StudentViewCourseMenu from "./StudentViewCourseMenu";

const StudentViewCourseBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('overview');
    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
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
                    <div className="left">
                        <StudentViewCourseMenu selectedTab={selectedTab} changeTab = {handleTabChange}/>
                    </div>
                    <div className="right">
                        {
                            selectedTab == "overview" &&
                            <div>
                                <StudentViewCourseContent />
                            </div>
                        }

                        {
                            selectedTab == "articles" &&
                            <div>
                                <StudentViewCourseArticle />
                            </div>
                        }

                        {
                            selectedTab == "test" &&
                            <div>
                                <StudentViewCourseTest />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentViewCourseBody