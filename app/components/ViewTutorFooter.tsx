'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation } from 'swiper/modules';
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "./EmptyPage";

const tutors  = [
    {
        id: 1,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/Frame 67.png",
        experience: "14"
    },
    {
        id: 2,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/lady.png",
        experience: "14"
    },
    {
        id: 3,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/Frame 67.png",
        experience: "14"
    },
    {
        id: 4,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/lady.png",
        experience: "14"
    },
    {
        id: 5,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/Frame 67.png",
        experience: "14"
    },
    {
        id: 6,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/lady.png",
        experience: "14"
    },

    {
        id: 7,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/lady.png",
        experience: "14"
    },

    {
        id: 8,
        name: "Favi Design",
        country: "USA",
        title: "Senior Staff IT Director at Apple",
        courses: "120",
        reviews: "34",
        image: "/assets/images/Frame 67.png",
        experience: "14"
    },
    
]

const ViewTutorFooter = () => {
    
    const instructors = genralStore((state) => state.web?.instructors) 
    const randomTenInstructors = instructors?.length
    ? [...instructors]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 11) // Take first 6
    : [];
    
    return (
        <div className="">
            <div className="section view-tutor-footer">
                <div className="flex flex-col items-center gap-[1rem]">
                    <h2 className="title">Create an account to accelerate your career with expert tutor courses worldwide.</h2>
                    <p className="color-grey-text text-[.9rem]">Be a part of a global community learning and exchanging expert knowledge. Once you’re in, you can access all other member benefits too!</p>
                    <Link href='/authentication/sign-up' className="bt-btn btn btn-primary-fill">
                        <span>Create Account</span>
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
                </div>
            </div>

            <div className="check-tutors">
                <h2 className="title mb-[2rem]">Check Out Other Tutors</h2>

                <div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        breakpoints={{
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                        }}
                    >
        
                        {
                            randomTenInstructors.map((item, index) => (
                                <SwiperSlide  className="booking" key={index}>
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
                                        {/* <div className="flex gap-2 items-start">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/messages-2.png"
                                                alt="Colearn Logo"
                                                width={24}
                                                height={24}
                                                className="object-cover"
                                            />
                                            <p className="text-[.9rem]">{item.courses} courses ({item.reviews} reviews)</p>
                                        </div> */}
                                        <div className="flex gap-2">
                                            <p className="text-[.9rem]">Experience</p>
                                            <p className="text-[.9rem] font-bold">{item?.experience_years} years</p>
                                        </div>
                                    </div>
                                    
                                </SwiperSlide >
                            ))
                        }
                    </Swiper>

                    <div className="mt-[2rem] flex justify-end">
                        <button className="custom-prev swiper-btn two mr-2">
                            <Image src="/assets/images/arrow-left-4.png" alt="Prev" width={16} height={16} />
                        </button>
                        <button className="custom-next swiper-btn two">
                            <Image src="/assets/images/arrow-right-4.png" alt="Next" width={16} height={16} className="object-contain"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTutorFooter