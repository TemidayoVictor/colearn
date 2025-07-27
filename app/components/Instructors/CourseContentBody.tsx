'use client';
import React, {useState} from "react";
import CourseContent from "./CourseContent";
import ViewCoursesContent from "../ViewCoursesContent";
import ViewCoursesContentMain from "../ViewCoursesContentMain";
import CourseStudents from "./CourseStudents";

type CourseContentBodyProps = {
    type?: string; 
}

const CourseContentBody = ({type}:CourseContentBodyProps) => {

    const [selectedTab, setSelectedTab] = useState<string>('overview');

    return (
        <div className="">
            <CourseContent />
            <div className="in-nav mt-[1.5em] flex items-center justify-between">
                {
                    type != 'student' &&
                    <div className="in-nav two scrollable">
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}> <span>Overview</span><span className="number">#</span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'students' ? 'active' : ''}`} onClick={() => setSelectedTab('students')}> <span>Students</span> <span className="number">3</span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'articles' ? 'active' : ''}`} onClick={() => setSelectedTab('articles')}> <span>Articles</span> <span className="number">2</span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'assignments' ? 'active' : ''}`} onClick={() => setSelectedTab('assignments')}> <span>Assignments</span> <span className="number">2</span></span>
                        <span className={`in-nav-link three long flex gap-2 items-center two color-grey-text ${selectedTab == 'tests' ? 'active' : ''}`} onClick={() => setSelectedTab('tests')}> <span>Practical Tests</span> <span className="number">2</span></span>
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
                        <div className="spacing-inter">
                            <ViewCoursesContentMain />
                        </div>
                    </div>   
                }

                {
                    selectedTab == 'students' &&
                    <div className="spacing-inter bod-grey p-[1rem] rounded-[.5rem]">
                        <CourseStudents />
                    </div>
                }
            </div>
        </div>
    )
}

export default CourseContentBody;