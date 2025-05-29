'use client';
import React, {useState} from "react";
import ViewCoursesContent from "../ViewCoursesContent";
import ViewCoursesContentMain from "../ViewCoursesContentMain";

const StudentCourseOverview = () => {
    const [selectedTab, setSelectedTab] = useState<string>('overview');
    return (
        <div>
            <div className="mt-[1em]">
                <div className="in-nav no">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}> <span>Overview</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'content' ? 'active' : ''}`} onClick={() => setSelectedTab('content')}> <span>Course Content</span></span>
                </div>
            </div>

            <div>
                {
                    selectedTab == "overview" &&
                    <div className="spacing-inter">
                        <ViewCoursesContent />
                    </div>
                }

                {
                    selectedTab == "content" &&
                    <div className="spacing-inter">
                        <ViewCoursesContentMain />
                    </div>
                }
            </div>
        </div>
    )
}

export default StudentCourseOverview
