'use client';
import React, {useState} from "react";
import { genralStore } from "@/zustand/generalStore";
import CourseContent from "./CourseContent";
import ViewCoursesContent from "../ViewCoursesContent";
import ViewCoursesContentMain from "../ViewCoursesContentMain";
import CourseStudents from "./CourseStudents";
import CourseResources from "./CourseResources";

type CourseContentBodyProps = {
    type?: string; 
}

const CourseContentBody = ({type}:CourseContentBodyProps) => {

    const [selectedTab, setSelectedTab] = useState<string>('overview');
    const course = genralStore((state) => state.course)

    return (
        <div className="">
            <CourseContent type={type} />
            <div className="in-nav mt-[1.5em] flex items-center justify-between">
                {
                    type != 'student' &&
                    <div className="in-nav two scrollable">
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}> <span>Overview</span><span className="number">#</span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'students' ? 'active' : ''}`} onClick={() => setSelectedTab('students')}> <span>Students</span> <span className="number"> {course?.enrollments.length} </span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'articles' ? 'active' : ''}`} onClick={() => setSelectedTab('articles')}> <span>Resources</span> <span className="number"> {course?.resources.length} </span></span>
                        {/* <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'assignments' ? 'active' : ''}`} onClick={() => setSelectedTab('assignments')}> <span>Assignments</span> <span className="number">2</span></span>
                        <span className={`in-nav-link three long flex gap-2 items-center two color-grey-text ${selectedTab == 'tests' ? 'active' : ''}`} onClick={() => setSelectedTab('tests')}> <span>Practical Tests</span> <span className="number">2</span></span> */}
                    </div>
                }
            </div>

            <div>
                {
                    selectedTab == 'overview' &&
                    <div>
                        <div className="spacing-inter">
                            <ViewCoursesContent />
                        </div>
                        {/* <div className="spacing-inter">
                            <ViewCoursesContentMain />
                        </div> */}
                    </div>   
                }

                {
                    selectedTab == 'students' &&
                    <div className="spacing-inter bod-grey p-[1rem] rounded-[.5rem]">
                        <CourseStudents />
                    </div>
                }

                {
                    selectedTab == 'articles' &&
                    <div className="spacing-inter bod-grey p-[1rem] rounded-[.5rem]">
                        <CourseResources />
                    </div>
                }
            </div>
        </div>
    )
}

export default CourseContentBody;