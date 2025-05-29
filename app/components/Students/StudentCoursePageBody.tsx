'use client';
import React, {useState} from "react";
import StudentCoursePageBox from "./StudentCoursePageBox";

const StudentCoursePageBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('inprogress');
    return (
        <div>
            <h2 className="title-2">My Course</h2>

            <div className="mt-[1.5em]">
                <div className="in-nav no">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'inprogress' ? 'active' : ''}`} onClick={() => setSelectedTab('inprogress')}> <span>In Progress</span> <span className="ml-1 number">3</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'completed' ? 'active' : ''}`} onClick={() => setSelectedTab('completed')}> <span>Completed</span> <span className="ml-1 number">3</span></span>
                </div>
            </div>

            <div>
                {
                    selectedTab == 'inprogress' &&
                    <StudentCoursePageBox courseType="inprogress" />
                }

{
                    selectedTab == 'completed' &&
                    <StudentCoursePageBox courseType="completed" />
                }
            </div>
        </div>
    )
}

export default StudentCoursePageBody;