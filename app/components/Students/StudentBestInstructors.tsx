import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";

const StudentBestInstructor = () => {
    const instructors = genralStore((state) => state.instructors);
    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Best Instructor</h2>
                <Link href="/" className="text-[.9rem] underline color-normal">See More</Link>
            </div>
            {
                instructors.length > 0 ? (
                    <div className="best-instructor-cont">
                        {
                            instructors.map((item, index) => (
                                <div className="best-instructor-box" key={index}>
                                    <div className="flex items-center gap-2 left">
                                        <div>
                                            <Image
                                                aria-hidden
                                                src={item?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Image"
                                                width={56}
                                                height={56}
                                                className="object-cover rounded-[50%]"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{`${item.user?.first_name} ${item.user?.last_name}`}</p>
                                            <p className="color-grey-text text-[.8rem]">{item.professional_headline}</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <Link href='/' className="bt-btn btn btn-primary-fill desktop">
                                            <span>View Profile</span>
                                            <span>
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/arrow-right.png"
                                                    alt="Colearn Logo"
                                                    width={12}
                                                    height={12}
                                                    className="object-contain"
                                                />
                                            </span>
                                        </Link>
        
                                        <Link href='/' className="mobile">
                                            <span className="underline text-[.8rem]">View Courses</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[20vh]">
                        <p className="text-[1rem] color-grey-text">No instructors available at the moment.</p>
                    </div>
                )
            }

        </div>
    )
}

export default StudentBestInstructor