import React from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ViewCoursesTestimonials = () => {
    const reviews = genralStore((state) => state.course?.reviews) || [];

    const totalStars = 5;

    return (
        <div className="testimonials-container">
            {
                reviews.length > 0 ? (
                    reviews.map((item, index) => (
                        <div className="flex flex-col gap-2 mb-[1.5rem] testimonial" key={index}>
                            <div className="flex items-center gap-4">
                                <Image
                                    aria-hidden
                                    src={item.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="font-bold"> {item.user?.first_name} {item.user?.last_name} </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-[1.1rem]"> {item.title} </h3>
                                <p className="color-grey-text text-[.9rem] mt-2 text-justify"> {item.review} </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex">
                                    {
                                        [...Array(totalStars)].map((_, index) => (
                                        <Image
                                            key={index}
                                            aria-hidden
                                            src={
                                            index < item.rating
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
                                    <p><span className="ml-2 font-semibold">{item.rating.toFixed(1)} /</span> 5</p>
                                </div>
                                <div>
                                    <p className="font-bold capitalize"> {dayjs(item.created_at).fromNow()} </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-[.9rem] color-grey-text">No reviews available for this course.</p>
                )
                
            }
        </div>
    )
}

export default ViewCoursesTestimonials