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

const HomeTutors = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="text-center">
                    <h2 className="title">Discover The World’s Top Best Tutor and <br /> Instructor</h2>
                    <p className="mt-[1em]">Engage with expert led courses curated by industry leaders to elevate your learning <br /> experiences.</p>
                </div>

                <div className="tutors-container">
                    {
                        tutors.map((item, index) => (
                            <div className="tutor" key={index}>
                                <div>
                                    <Image
                                        aria-hidden
                                        src={item.image}
                                        alt="Colearn Logo"
                                        width={265}
                                        height={248}
                                        className="object-cover rounded-[.3rem]"
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
                                    <p className="text-[.9rem] font-semibold">{item.title}</p>
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
                            </div>
                        ))
                    }
                </div>
                
                <div className="mt-[2.5rem] flex justify-center items-center">
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
                </div>
                
            </div>
        </div>
    )
}

export default HomeTutors;