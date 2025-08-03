import React from "react";
import { genralStore } from "@/zustand/generalStore";
import { UseCourses } from "@/hooks/useCourses";
import Image from "next/image";
import Link from "next/link";

const CourseContent = () => {
    const {addToCart} = UseCourses();
    const course = genralStore((state) => state.course);

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

    console.log(course);
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="mt-3 flex flex-col gap-2">

                    <h2 className="title-2"> {course?.title} </h2>
                    
                    <p className="text-[.9rem] text-justify color-grey-text">
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
                                <p>Last updated</p>
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

                    <div>
                        <button className={`btn btn-primary-fill`} onClick={(e) => addToCartTrigger(course?.id)}>Add to cart (${course?.price})</button>
                    </div>
                </div>   

                <div className="mt-4">
                    <Image
                        aria-hidden
                        src="/assets/images/course-img.png"
                        alt="Colearn Logo"
                        width={778}
                        height={456}
                        className="object-contain"
                    />
                </div>
            </div>
               
        </div>
    )
}

export default CourseContent;