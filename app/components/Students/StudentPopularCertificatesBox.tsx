'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";
import { UseCourses } from "@/hooks/useCourses";

const StudentPopularCertificatesBox = () => {
    const {addToCart} = UseCourses();
    const courses = genralStore((state) => state.courses);
    
    const addToCartTrigger = (item: string | undefined) => {
        addToCart(item);
    }
    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Most Popular Certificates</h2>
                <Link href="/" className="text-[.9rem] underline color-normal">See More</Link>
            </div>
            <div className="blog-cont two scrollable">
                {
                    courses.map((item, index) => (
                        <div className="course two" key={index}>
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course.png"}
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover rounded-[.5em] course-image"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p className="text-[.9rem] font-bold">4.3</p>
                                        <p className="text-[.8rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[.9rem] font-bold"> {item.title} </h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src={item?.instructor.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.instructor.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="text-[.9rem]">{`${item.instructor.user?.first_name} ${item.instructor.user?.last_name}`}</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="font-semibold text-[.8rem]">${item.price}</span>
                                </div>
                                    {/* <button className={`btn normal`} onClick={(e) => addToCartTrigger(item.id)}>View</button>*/}
                                    <Link href={`/students/course-details/${item.id}`} className="btn normal btn-small">View</Link>
                                </div>
                            <div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentPopularCertificatesBox;