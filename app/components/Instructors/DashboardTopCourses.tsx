'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardTopCourses = () => {
    const [selectedTab, setSelectedTab] = useState<string>('courses');
    return (
        <div className="bod-grey p-[1em] rounded-[.5em] dashboard-top-courses">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    {/* <div className="bg-secondary-light p-[.5em] rounded-[.3em]">
                        <Image
                            aria-hidden
                            src="/assets/images/teacher-colored.png"
                            alt="Colearn Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div> */}
                    <div className="course-tabs">
                        <div className={`course-tab ${selectedTab == 'courses' ? 'active' : '' }`} onClick={() => setSelectedTab('courses')}>
                            {
                                selectedTab == 'courses' &&
                                <Image
                                    aria-hidden
                                    src="/assets/images/courses-icon.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            }
                            <p>Top Courses</p>
                        </div>
                        <div className={`course-tab ${selectedTab == 'bookings' ? 'active' : '' }`} onClick={() => setSelectedTab('bookings')}>
                            {
                                selectedTab == 'bookings' &&
                                <Image
                                    aria-hidden
                                    src="/assets/images/booking-icon.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            }
                            <p>Bookings</p>
                        </div>
                    </div>
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

            {
                selectedTab == 'courses' &&
                <div className="mt-[1.5em]">
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
            }

            {
                selectedTab == 'bookings' &&
                <div className="mt-[1.5em]">
                    {
                        [1,2,3,4,5].map((item, index) => (
                            <div className="dash-booking" key={index}>
                                <div className="top">
                                    <p className="font-bold left-1">Consultant  Call with Benson Joe</p>
                                    <p className="right-1 success font-bold">$30.00</p>
                                </div>
                                <div className="flex items-end justify-between mt-[.5em]">
                                    <div className="res-flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/clock-small.png"
                                                alt="Colearn Logo"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                            <p className="color-grey-text text-[.8rem]">11 - 12 pm</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/calendar-small.png"
                                                alt="Colearn Logo"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                            <p className="color-grey-text text-[.8rem]">14th Aug, 2024</p>
                                        </div>
                                    </div>
                                    <Link href='/' className="btn normal">Start Call</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default DashboardTopCourses