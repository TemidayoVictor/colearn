'use client';
import React, {useState} from "react";
import Image from "next/image";

type StudentViewCourseMenuProps = {
    selectedTab: string;
    changeTab: (tab: string) => void;
}

const StudentViewCourseMenu = ({selectedTab, changeTab}: StudentViewCourseMenuProps) => {
        const [openMaterial, setOpenMaterial] = useState<boolean>(false);

        const toggleModules = () => {
            setOpenMaterial(prev => !prev);
            changeTab('material')

        } 
    return (
        <div className="student-view-course-menu">
            <div className={`left-content ${selectedTab == "overview" ? 'active' : ''}`} onClick={() => changeTab('overview')}>
                <p className="text-[.9rem]">Course Overview</p>
            </div>
            <div className={`left-content ${selectedTab == "material" ? 'active' : ''}`} onClick={() => toggleModules()}>
                <div className="flex items-center justify-between gap-2">
                    <p className="text-[.9rem]">Course Content</p>
                    {/* <span className="number">3</span> */}
                    {/* {
                        openMaterial ? (
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-up.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        ) : (
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-down-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        )
                    } */}
                </div>
                {/* {
                    openMaterial &&

                    <div className="module-cont">
                        {
                            [1,2,3].map((item, index) => (
                                <div className="module" key={index}>
                                    <p>Module {index + 1}</p>
                                </div>
                            ))
                        }
                    </div>
                } */}
            </div>
            <div className={`left-content ${selectedTab == "articles" ? 'active' : ''}`} onClick={() => changeTab('articles')}>
                <p className="text-[.9rem]">Resources</p>
            </div>
            {/* <div className={`left-content ${selectedTab == "test" ? 'active' : ''}`} onClick={() => changeTab('test')}>
                <p className="text-[.9rem]">Quiz / Practice Test</p>
            </div> */}
        </div>
    )
}

export default StudentViewCourseMenu;