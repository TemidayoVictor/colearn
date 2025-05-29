import React from "react";
import Image from "next/image";

type StudentViewCourseMenuProps = {
    selectedTab: string;
    changeTab: (tab: string) => void;
}

const StudentViewCourseMenu = ({selectedTab, changeTab}: StudentViewCourseMenuProps) => {
    return (
        <div>
            <div className={`left-content ${selectedTab == "overview" ? 'active' : ''}`} onClick={() => changeTab('overview')}>
                <p className="text-[.9rem]">Course Overview</p>
            </div>
            <div className="left-content flex items-center justify-between">
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
            <div className={`left-content ${selectedTab == "articles" ? 'active' : ''}`} onClick={() => changeTab('articles')}>
                <p className="text-[.9rem]">Articles</p>
            </div>
            <div className={`left-content ${selectedTab == "test" ? 'active' : ''}`} onClick={() => changeTab('test')}>
                <p className="text-[.9rem]">Quiz / Practice Test</p>
            </div>
        </div>
    )
}

export default StudentViewCourseMenu;