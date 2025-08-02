'use client';
import React from "react";
import Image from "next/image";
import TableContent from "./TableContent";

type DashboardTopCoursesTableProps = {
    type?: string
}

const renderHeading = (type: string | null |undefined) => {
    switch (type) {
        case 'admin':
            return (
                <div className="flex items-center justify-between gap-2 bg-white py-[.3em] px-1 rounded-[.3rem] bod-grey courses-search-lenght two">
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
                    <button className="btn btn-small btn-primary-fill">Search</button>
                </div>
            )
            break;

        case 'instructor-view':
            return <h2 className="font-semibold">All Courses</h2>
            break;

        case 'student-view':
            return <h2 className="font-semibold">All Enrollments</h2>
            break;
        
        default:
            return (
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Top Performing Courses</h2>
                    <div className="flex items-center gap-2 bod-grey px-2 rounded-[.3em]">
                        <p className="text-[.9rem]">2024</p>
                        <Image
                            aria-hidden
                            src="/assets/images/arrow-down.png"
                            alt="Colearn Logo"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                    </div>
                </div>
            )
    }
}

const DashboardTopCoursesTable = ({type}: DashboardTopCoursesTableProps) => {
    return (
        <div className="bod-grey p-[1em] rounded-[.5em]">
            {renderHeading(type)}
            <div className="mt-[1.5em]">
                <TableContent type={type} />
            </div>
        </div>
    )
}

export default DashboardTopCoursesTable