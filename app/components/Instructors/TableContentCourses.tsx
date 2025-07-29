'use client';
import React, {useMemo} from "react";
import Image from "next/image";
import { courseStore } from "@/zustand/courseStore";
import EmptyPage from "../EmptyPage";

type TableContentProps = {
    type?: string
    tab?: string
}

const TableContentCourses = ({type, tab}: TableContentProps) => {
    const courses = courseStore((state) => state.courses);

    const courseUse = useMemo(() => {
        if (tab === 'live') {
            return Array.isArray(courses)
                ? courses.filter((course) => course.is_published)
                : [];
        }

        else if( tab === 'draft') {
            return Array.isArray(courses)
                ? courses.filter((course) => !course.is_published)
                : [];
        }

            else {
            return courses;
        }
    }, [tab, courses]);

    return (
        <div className="table-container">
            {
                courseUse.length > 0 ? (
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
                                    {/* <th>Total Revenue</th> */}
                                    <th>Total  Enrollment</th>
                                    <th>Total Completion</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courseUse.map((item, index) => (
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
                                                <span className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    { item.summary && item.summary.length > 20 ? item.summary.slice(0, 20) + '...' : item.summary}
                                                </span>
                                                </span>
                                            </td>
                                            {
                                                type == "admin" &&
                                                <>
                                                    <td>Joe Doe</td>
                                                    <td>$400</td>                            
                                                </>
                                            }
                                            {/* <td>${Number(item?.total_revenue).toLocaleString()}</td> */}
                                            <td>{Number(item.enrollments.length).toLocaleString()}</td>
                                            <td>{Number(item.enrollments.filter(enrollment => enrollment?.completed_at).length).toLocaleString()}</td>
                                            <td>{Number(item.reviews.length).toLocaleString()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        {
                            tab === 'draft' ?
                            <EmptyPage image="/assets/images/empty-image.png" header="No Draft Courses" content="You have not created any draft course yet" imageWidth={400} imageHeight={240}/>    
                            :
                            <EmptyPage image="/assets/images/empty-image.png" header="No Published Courses" content="You have not published any course yet" imageWidth={400} imageHeight={240}/>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TableContentCourses;