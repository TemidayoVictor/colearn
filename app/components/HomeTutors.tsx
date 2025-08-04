import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "./EmptyPage";

type Props = {
    page?: boolean
}

const HomeTutors = ({page}: Props) => {
    const instructors = genralStore((state) => state.web?.instructors) 
    const randomSixInstructors = instructors?.length
    ? [...instructors]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 7) // Take first 6
    : [];

    const dataUse = page == true ? instructors : randomSixInstructors;

    return (
        <div className="section">
            <div className="container">
                <div className="text-center">
                    <h2 className="title">Discover The World’s Top Best Tutor and <br /> Instructor</h2>
                    <p className="mt-[1em]">Engage with expert led courses curated by industry leaders to elevate your learning <br /> experiences.</p>
                </div>

                {
                    (instructors ?? []).length > 0 ? (
                        <div>
                            <div className="tutors-container">
                                {
                                    dataUse?.map((item, index) => (
                                        <Link href={`view-tutors/${item.id}`} className="booking" key={index}>
                                            <div>
                                                <Image
                                                    aria-hidden
                                                    src={item?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                    alt="Colearn Logo"
                                                    width={265}
                                                    height={248}
                                                    className="object-cover rounded-[.3rem] booking-image"
                                                />
                                            </div>
                                            <div className="mt-[1em] mb-[.5em] flex gap-2 items-center">
                                                <p className="font-bold">{`${item?.user?.first_name} ${item?.user?.last_name}`}</p> <span className="text-[.9rem]">({item?.user?.country_iso3})</span>
                                            </div>
                                            <div className="flex gap-2 items-start">
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/ic_deals.png"
                                                    alt="Colearn Logo"
                                                    width={24}
                                                    height={24}
                                                    className="object-cover"
                                                />
                                                <p className="text-[.9rem]">{item?.professional_headline}</p>
                                            </div>
                                            <div className="flex gap-2 justify-between items-center">
                                                <div className="flex gap-2 items-start">
                                                    <Image
                                                        aria-hidden
                                                        src="/assets/images/messages-2.png"
                                                        alt="Colearn Logo"
                                                        width={24}
                                                        height={24}
                                                        className="object-cover"
                                                    />
                                                    {/* <p className="text-[.9rem]">{item.courses} courses ({item.reviews} reviews)</p> */}
                                                    <div className="flex gap-2">
                                                        <p className="text-[.9rem]">Experience</p>
                                                        <p className="text-[.9rem] font-bold">{item?.experience_years} years</p>
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <p className="text-[.9rem]">Experience</p>
                                                    <p className="text-[.9rem] font-bold">{item.instructor?.experience_years} years</p>
                                                </div> */}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            {
                                !page &&
                                <div className="mt-[2.5rem] flex justify-center items-center">
                                    <Link href='/tutors' className="flex items-center btn btn-primary-fill gap-2 normal">
                                        <p>Explore More</p>
                                        <div className="bg-white rounded-[50%]">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/arrow-top-right.png"
                                                alt="Colearn Logo"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div> 
                                    </Link>
                                </div>
                            }
                        </div>
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png"  header="Instructors Coming Soon" content="We're still building our team of amazing instructors. Check back soon to find the right expert for your needs!" imageWidth={400} imageHeight={240}/>
                        </div>
                    ) 
                }
                
            </div>
        </div>
    )
}

export default HomeTutors;