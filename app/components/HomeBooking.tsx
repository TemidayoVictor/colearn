import React from "react";
import Image from "next/image";
import Link from "next/link";
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

const HomeBookings = () => {
    const consultants = genralStore((state) => state.web?.consultants)
    const randomSixConsultants = consultants?.length
    ? [...consultants]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 7) // Take first 6
    : [];
    return (
        <div className="section">
            <div className="container">
                <div className="text-center">
                    <h2 className="title">Book a Personal Consultation with Our <br /> Expert Consultant</h2>
                    <p className="mt-[1em]">Schedule  your one-on-one consultation today and gain valuable insights from our top expert.</p>
                </div>

                {
                    (consultants ?? []).length > 0 ? (
                        <div>
                            <div className="bookings-container">
                                {
                                    randomSixConsultants?.map((item, index) => (
                                        <div className="booking" key={index}>
                                            <div>
                                                <Image
                                                    aria-hidden
                                                    src={item.instructor?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.instructor?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                    alt="Colearn Logo"
                                                    width={265}
                                                    height={248}
                                                    className="object-cover rounded-[.3rem] booking-image"
                                                />
                                            </div>
                                            <div className="mt-[1em] mb-[.5em] flex gap-2 items-center">
                                                <p className="font-bold">{`${item.instructor?.user?.first_name} ${item.instructor?.user?.last_name}`}</p> <span className="text-[.9rem]">({item.instructor?.user?.country_iso3})</span>
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
                                                <p className="text-[.9rem]">{item.instructor?.professional_headline}</p>
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
                                                        <p className="text-[.9rem] font-bold">{item.instructor?.experience_years} years</p>
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <p className="text-[.9rem]">Experience</p>
                                                    <p className="text-[.9rem] font-bold">{item.instructor?.experience_years} years</p>
                                                </div> */}
                                            </div>
                                            <div className="mt-[1em] flex justify-between items-center">
                                                {
                                                    item.type == "free" ? (
                                                        <p className="font-bold" >Free</p>
                                                    ) : (
                                                        <p className="font-bold" >${item.hourly_rate} / hr </p>
                                                    )
                                                }
                                                <Link href={`/students/bookings/session/${item.id}`} className="btn normal btn-small">Book Now</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                            {/* <div className="mt-[2.5rem] flex justify-center items-center">
                                <Link href='/' className="flex items-center btn btn-primary-fill gap-2 normal">
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
                            </div> */}
                        </div>
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png"  header="Consultants Coming Soon" content="We're still building our team of amazing consultants. Check back soon to find the right expert for your needs!" imageWidth={400} imageHeight={240}/>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default HomeBookings;