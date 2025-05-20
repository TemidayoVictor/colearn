import React from "react";
import Image from "next/image";

const DashboardTopCourses = () => {
    return (
        <div className="bod-grey p-[1em] rounded-[.5em] dashboard-top-courses">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-secondary-light p-[.5em] rounded-[.3em]">
                        <Image
                            aria-hidden
                            src="/assets/images/teacher-colored.png"
                            alt="Colearn Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                    <p>Top Courses</p>
                </div>
                <div className="bg-light flex py-[.2em] px-[.5em] items-center text-[.8rem] bod-normal rounded-[.3em]">
                    <p>See All</p>
                    <Image
                        aria-hidden
                        src="/assets/images/arrow-top-right-2.png"
                        alt="Colearn Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="mt-[2em]">
                {
                    [1,2,3,4,5,6].map((item, index) => (
                        <div className="flex items-center justify-between mb-[1em]" key={index}>
                            <div className="flex items-center gap-3 top-courses-body-left">
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/top-course.png"
                                        alt="Colearn Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-[.9rem]">
                                    Data Science and machine learning
                                </p>
                            </div>
                            <div className="bg-grey-normal bod-grey py-[.2em] px-[.5em] rounded-[.3em] text-center top-courses-body-right">
                                <p className="color-grey-text text-[.7rem]">4 Total Sales</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default DashboardTopCourses