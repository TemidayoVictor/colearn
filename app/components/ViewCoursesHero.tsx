'use client';
import React from "react";
import Image from "next/image";
import { UseCourses } from "@/hooks/useCourses";
import { useParams } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";

type ViewCoursesHeroProps = {
    loggedIn?: boolean
}

const ViewCoursesHero = ({loggedIn}: ViewCoursesHeroProps) => {
    const {addToCart} = UseCourses();

    const course = courseStore((state) => state.course)
    
    const reviews = course?.reviews || [];
    const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

    const roundedRating = Math.round(averageRating);
    const totalStars = 5;

    const students = course?.enrollments?.length || 0

    const formatDate = (dateString: Date | undefined) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).format(date);
    };

    const addToCartTrigger = (item: string | undefined) => {
        addToCart(item);
    }

    return (
        <div>
            <div className={`${loggedIn ? 'bod-dark' : 'bg-dark'}`}>
                <div className={`${loggedIn ? '' : 'cover container'}`}>
                    <div className="bg-white rounded-[.5rem] blog-hero two p-[1em]">
                        
                        {/* <Image
                            aria-hidden
                            src="/assets/images/course-img.png"
                            alt="Colearn Logo"
                            width={778}
                            height={456}
                            className="object-contain blog-hero-left"
                        /> */}
                        <div className="blog-hero-right video">
                            <div className="relative aspect-video bg-black">
                                <video
                                src={
                                    course?.intro_video_url
                                    ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${course.intro_video_url}`
                                    : undefined
                                }
                                controls
                                className="w-full h-full object-cover rounded-t-xl"
                                >
                                Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className="blog-hero-right three">
                            <h2 className="title-2"> {course?.title} </h2>
                            
                            <p className="text-[1rem] text-justify">
                            {course?.summary}
                            </p>
                            
                            <div className="view-courses-middle">
                                <div className="flex items-center gap-2">
                                    <p className="font-bold">{averageRating.toFixed(1)}</p>
                                    <div className="flex">
                                        {
                                            [...Array(totalStars)].map((_, index) => (
                                            <Image
                                                key={index}
                                                aria-hidden
                                                src={
                                                index < roundedRating
                                                    ? "/assets/images/star.png"
                                                    : "/assets/images/empty-star.png"
                                                }
                                                alt="Rating star"
                                                width={16}
                                                height={16}
                                                className="object-contain rounded-[50%]"
                                            />
                                            ))
                                        }
                                    </div>
                                    <p className="color-normal">({reviews.length.toLocaleString()} ratings)</p>
                                </div>
                                <p>{students} Student {students > 1 ? 's' : ''}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>Created by: </p> 
                                <p className="font-semibold">{course?.instructor.user?.first_name} {course?.instructor.user?.last_name}</p>
                            </div>
                            <div className="view-courses-bottom">
                                
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/calendar-black.png"
                                            alt="Colearn Logo"
                                            width={16}
                                            height={16}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p>Last Updated</p>
                                    </div>
                                    <p className="font-semibold"> {formatDate(course?.updated_at)} </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/global.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <p>English</p>         
                                </div>
                            </div>

                            {/* <div>
                                <button className={`btn btn-primary-fill`} onClick={(e) => addToCartTrigger(course?.id)}>Add to cart (${course?.price})</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCoursesHero