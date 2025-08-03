import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "./EmptyPage";


const HomeCertCourses = () => {
    const categories = genralStore((state) => state.web?.categories)
    const courses = genralStore((state) => state.web?.courses)

    const randomSixCategories = categories?.length
    ? [...categories]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 6) // Take first 6
    : [];

    const secondRandomSixCategories = categories?.length
    ? [...categories]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 7) // Take first 6
    : [];

    const randomSixCourses = courses?.length
    ? [...courses]
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 7) // Take first 6
    : [];

    return (
        <div className="container section">
            <div>
                <h2 className="title-3">Get Cerification on</h2>
                <div className="home-cert-courses mt-[1em]">

                    {
                        randomSixCategories?.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col items-center justify-center gap-2 cert-con">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/ui-ux.png"
                                        alt="Colearn Logo"
                                        width={88}
                                        height={64}
                                        className="object-contain"
                                    />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>


            <div className="my-[3em] flex flex-col gap-4">
                <h2 className="title text-center">Engaging  Features to Enhance Your Learning</h2>
                <p className="text-center">
                    Experience the best of e-learning: Our platform offers interactive courses, expert support, <br /> and more, helping you achieve your goals faster and easier
                </p>

                <div className="tabs mt-3 px-3">
                    {
                        secondRandomSixCategories?.map((item, index) => (
                            <Link href='#' className="tab" key={index}>{item.name}</Link>
                        ))
                    }
                </div>


                <div className="mt-[-1rem]">
                    {
                        (courses ?? []).length > 0 ? (
                            <div>
                                <div className="courses-list my-[3em]">
                                    
                                    {
                                        randomSixCourses?.map((item, index) => (
                                            <div className="course three" key={index}>
                                                <div className="relative w-fit">
                                                    <div className="relative">
                                                        <Image
                                                            aria-hidden
                                                            src={item?.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.thumbnail}` : "/assets/images/course-img-2.png"}
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
                                                                width={30}
                                                                height={30}
                                                                className="object-contain"
                                                            />
                                                            <p className="text-[1.1rem] font-bold">4.3</p>
                                                            <p className="text-[.9rem]">(382)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="mt-2 text-[1rem] font-bold"> {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</h3>
                                                <div className="flex gap-2 items-center mt-2">
                                                <Image
                                                        aria-hidden
                                                        src={item?.instructor.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.instructor.profile_photo}` : "/assets/images/course-img-2.png"}
                                                        alt="Colearn Logo"
                                                        width={40}
                                                        height={40}
                                                        className="object-contain rounded-[50%]"
                                                    />
                                                    <p>{`${item.instructor.user?.first_name} ${item.instructor.user?.last_name}`}</p>
                                                </div>
                                                <div className="flex justify-between items-center mt-2">
                                                    <div>
                                                        {/* <span className="line-through mr-2 text-[#5A5C5E] font-semibold">$30.00</span> */}
                                                        <span className="font-semibold">${item.price}</span>
                                                    </div>
                                                    {/* <button className={`btn normal`} onClick={(e) => addToCartTrigger(item.id)}>Add to cart</button> */}
                                                    <Link href={`/view-courses/${item.id}`} className="btn normal">View</Link>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                                {/* <div className="mt-2 flex justify-center items-center">
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
                                <EmptyPage image="/assets/images/empty-image.png"  header="Courses Coming Soon" content="We're still building our team of amazing courses. Check back soon to find the right expert for your needs!" imageWidth={400} imageHeight={240}/>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default HomeCertCourses;