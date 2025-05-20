import React from "react";
import Image from "next/image";

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
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product</th>
                            <th>Total Revenue</th>
                            <th>Total  Enrollment</th>
                            <th>Total Completion</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1,2,3,4,5,6].map((items, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="flex items-center gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/top-course.png"
                                            alt="Colearn Logo"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />

                                        <span className="flex flex-col overflow-hidden">
                                        <span className="text-sm font-semibold text-gray-800 truncate sm:whitespace-normal sm:truncate-0">
                                            Data Science and. . . 
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1 line-clamp-2">
                                            Data Science and. . .
                                        </span>
                                        </span>
                                    </td>
                                    <td>$4000</td>
                                    <td>23</td>
                                    <td>23</td>
                                    <td>20</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardTopCoursesTable