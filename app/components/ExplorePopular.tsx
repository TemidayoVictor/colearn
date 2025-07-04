'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ExplorePopularProps = {
    title: string;
    type: string;
    tabs?: boolean
    addContainerClass: boolean
    nav?: boolean
    loggedIn?: boolean
}

const posts = [
    {
        id: 1,
        name: "All",
        link: "/",
    },

    {
        id: 2,
        name: "Computer Sciences",
        link: "/",
    },

    {
        id: 3,
        name: "Data Sciences",
        link: "/",
    },

    {
        id: 4,
        name: "Python",
        link: "/",
    },

    {
        id: 5,
        name: "Business",
        link: "/",
    },

    {
        id: 6,
        name: "Information Technology",
        link: "/",
    },
]

const ExplorePopular = ({title, type, tabs, addContainerClass, nav, loggedIn}: ExplorePopularProps) => {
    const pathname = usePathname();
    return (
        <div className="">
            <div className={`${addContainerClass ? 'container' : ''}`}>
                <div>
                    {
                        type == "head" ? (
                            <h2 className="title">{title}</h2>
                        ) : (
                            <p>{title}</p>
                        )
                    }
                    <div className="tabs mt-3">
                        
                        {
                            tabs &&
                            posts.map((item, index) => (
                                <Link href={item.link} className="tab" key={index}>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <div className={`${loggedIn ? 'blog-cont three' : 'blog-cont'} mt-[2em]`}>
                        {
                            [1,2,3,4,5,6].map((item, index) => (
                                <div className="course three" key={index}>
                                    <div className="relative w-fit">
                                        <div className="relative">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/course.png"
                                                alt="Colearn Logo"
                                                width={400}
                                                height={264}
                                                className="object-cover rounded-[.5em]"
                                            />
                                            <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/star.png"
                                                    alt="Colearn Logo"
                                                    width={30}
                                                    height={30}
                                                    className="object-contain"
                                                />
                                                <p className="text-[1.1rem] font-bold">4.3</p>
                                                <p className="text-[.9rem]">(382)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                                    <div className="flex gap-2 items-center mt-2">
                                    <Image
                                            aria-hidden
                                            src="/assets/images/avatars.png"
                                            alt="Colearn Logo"
                                            width={40}
                                            height={40}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p>Favi Design</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div>
                                            <span className="line-through mr-2 text-[#5A5C5E] font-semibold">$30.00</span>
                                            <span className="font-semibold">$30.00</span>
                                        </div>
                                        <Link href='/' className={`btn normal`}>Buy Now</Link>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {
                    nav &&    
                    <div className="section flex items-end justify-end">
                        <div className="pagination text-[.8rem]">
                            <div className="prev btn normal two flex gap-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-short-left.png"
                                    alt="Colearn Logo"
                                    width={12}
                                    height={12}
                                    className="object-contain rounded-[.5em]"
                                />

                                <p className="text-[.8rem]">Previous</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="pag-el active">1</span>
                                <span className="pag-el">2</span>
                                <span className="pag-el">3</span>
                            </div>
                            <div className="prev btn normal two flex gap-2">
                                <p className="text-[.8rem]">Next</p>
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-short-right.png"
                                    alt="Colearn Logo"
                                    width={12}
                                    height={12}
                                    className="object-contain rounded-[.5em]"
                                />
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default ExplorePopular