'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import AccountAbout from "../Instructors/AccountAbout";
import AccountCareer from "../Instructors/AccountCareer";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";

type AdminuserProfileBodyProps = {
    type?: string
}


const AdminuserProfileBody = ({type}: AdminuserProfileBodyProps) => {
    const [selectedTab, setSelectedTab] = useState<string>('');
    
    useEffect(() => {
        if(type == 'management') {
            setSelectedTab('overview')
        }

        else {
            setSelectedTab('personal')
        }
    }, []);

    return (
        <div className="">
            <div className="container-3">
                <div>
                    <Link href='/' className="flex items-center gap-2 cursor-pointer">
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
                </div>

                <div className="res-flex items-start justify-between mt-4 gap-4">
                    <div className="res-flex items-start gap-2">
                        <div className="res-box">
                            <Image
                                aria-hidden
                                src="/assets/images/avatars-big.png"
                                alt="Colearn Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />

                            <Image
                                aria-hidden
                                src="/assets/images/dots-big.png"
                                alt="Colearn Logo"
                                width={24}
                                height={24}
                                className="object-contain mobile"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="top flex items-center gap-4">
                                <p className="text-[.9rem] font-bold">Favi Ayomide Arowolo Olusegun</p>
                                <div className="flex gap-2">
                                    <span className="badge normal">
                                        Instructor
                                    </span>
                                    <span className="badge ongoing">
                                        Pending
                                    </span>
                                </div>
                            </div>
                            <div className="bottom flex items-center gap-4">
                                <div>
                                    <p className="text-[.7em] color-grey-text">Country</p>
                                    <p className="text-[.9rem]">United State of America</p>
                                </div>
                                <div>
                                    <p className="text-[.7em] color-grey-text">Date Joined</p>
                                    <p className="text-[.9rem]">14th Feb, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Image
                            aria-hidden
                            src="/assets/images/dots-big.png"
                            alt="Colearn Logo"
                            width={24}
                            height={24}
                            className="object-contain desktop"
                        />
                        <button className="btn btn-success">Verify User</button>
                    </div>
                </div>
            </div>
            <div className="container-3 admin-profile-body">
                <div className="in-nav admin flex items-center justify-between">
                    <div className="in-nav two scrollable">
                        {
                            type == 'management' &&
                            <span className={`in-nav-link admin  ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}> <span>Overview</span></span>
                        }
                        <span className={`in-nav-link admin  ${selectedTab == 'personal' ? 'active' : ''}`} onClick={() => setSelectedTab('personal')}> <span>Personal Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'professional' ? 'active' : ''}`} onClick={() => setSelectedTab('professional')}> <span>Professional Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'education' ? 'active' : ''}`} onClick={() => setSelectedTab('education')}> <span>Educational Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'video' ? 'active' : ''}`} onClick={() => setSelectedTab('video')}> <span>Intro'd Video</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'decline' ? 'active' : ''}`} onClick={() => setSelectedTab('decline')}> <span>Reason for Decline</span></span>
                    </div>
                </div>

                <div className="mt-[1em]">
                    {
                        selectedTab == 'overview' &&
                        <div>
                            <DashboardPerformance />
                            <div className="spacing-inter">
                                <DashboardTopCoursesTable type="instructor-view"/>
                            </div>
                        </div>
                    }

                    {
                        selectedTab == 'personal' &&
                        <AccountAbout type="admin" />
                    }

                    {
                        selectedTab == 'professional' &&
                        <AccountCareer type="admin" />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminuserProfileBody