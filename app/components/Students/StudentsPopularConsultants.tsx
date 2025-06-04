import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const StudentPopularConsultant = () => {
    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Most Popular Consultants</h2>
                <Link href="/" className="text-[.9rem] underline color-normal">All Courses</Link>
            </div>

            <div className="bookings-container two">
                    {
                        tutors.map((item, index) => (
                            <div className="booking" key={index}>
                                <div>
                                    <Image
                                        aria-hidden
                                        src={item.image}
                                        alt="Colearn Logo"
                                        width={265}
                                        height={248}
                                        className="object-cover rounded-[.3rem] booking-image"
                                    />
                                </div>
                                <div className="mt-[1em] mb-[.5em] flex gap-2 items-center">
                                    <p className="font-bold">{item.name}</p> <span className="text-[.9rem]">({item.country})</span>
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
                                    <p className="text-[.9rem]">{item.title}</p>
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
                                        <p className="text-[.9rem]">{item.courses} courses ({item.reviews} reviews)</p>
                                    </div>
                                    <div>
                                        <p className="text-[.9rem]">Experience</p>
                                        <p className="text-[.9rem] font-bold">{item.experience} years</p>
                                    </div>
                                </div>
                                <div className="mt-[1em] flex justify-between items-center">
                                    <p className="font-bold" >$30.00 / hr </p>
                                    <Link href='/' className="btn normal btn-small">Book Now</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

        </div>
    )
}

export default StudentPopularConsultant