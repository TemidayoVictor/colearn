import React from "react";
import Image from "next/image";
import TableContent from "./TableContent";

const DashboardTopCoursesTable = () => {
    return (
        <div className="bod-grey p-[1em] rounded-[.5em]">
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
            <div className="mt-[1.5em]">
                <TableContent />
            </div>
        </div>
    )
}

export default DashboardTopCoursesTable