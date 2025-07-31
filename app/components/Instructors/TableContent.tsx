'use client';
import React from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "../EmptyPage";

type TableContentProps = {
    type?: string
    tab?: string
}

const TableContent = ({type}: TableContentProps) => {
    const data = genralStore((state) => state.data);
    const courses = data?.courses || [];
    
    return (
        <div className="table-container">
            {
                courses.length > 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Course Title</th>
                                    {
                                        type == "admin" &&
                                        <>
                                            <th>Uploaded by</th>
                                            <th>Course Price</th>                            
                                        </>
                                    }
                                    <th>Total Revenue</th>
                                    <th>Total  Enrollment</th>
                                    <th>Total Completion</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className="flex items-center gap-2">
                                                <Image
                                                    aria-hidden
                                                    src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course-img-2.png"}
                                                    alt="Colearn Logo"
                                                    width={40}
                                                    height={40}
                                                    className="object-contain rounded-[.3em]"
                                                />

                                                <span className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-semibold text-gray-800 truncate sm:whitespace-normal sm:truncate-0">
                                                    {item?.title} 
                                                </span>
                                                {/* <span className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    Data Science and. . .
                                                </span> */}
                                                </span>
                                            </td>
                                            {
                                                type == "admin" &&
                                                <>
                                                    <td>{item.instructor.user?.first_name} {item.instructor.user?.last_name}</td>
                                                    <td>${item.price}</td>                            
                                                </>
                                            }
                                            <td>${Number(item?.total_revenue).toLocaleString()}</td>
                                            <td>{Number(item?.total_enrollments).toLocaleString()}</td>
                                            <td>{Number(item?.total_completions).toLocaleString()}</td>
                                            <td>{Number(item?.review_count).toLocaleString()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <EmptyPage image="/assets/images/empty-image.png" link="/instructors/upload-course" linkTitle="Upload Course" header="Let Get You Started!!" content="Get started! Upload your first course and share your knowledge with the world." imageWidth={400} imageHeight={240}/>
                    </div>
                )
            }
        </div>
    )
}

export default TableContent;