import React from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation } from 'swiper/modules';
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "./EmptyPage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ViewTutorsTestimonials = () => {

    const reviews = genralStore((state) => state.data?.reviews)
    const totalStars = 5;

    return (
        <div>
            {
                reviews && reviews.length > 0 ? (
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
                            1280: { slidesPerView: 3 },
                            }}
                        >
                            {
                                (reviews).map((item, index) => (
                                    <SwiperSlide className="flex flex-col gap-2 mb-[1.5rem]" key={index}>
                                        <div className="flex items-center gap-4">
                                            <Image
                                                aria-hidden
                                                src={item.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Logo"
                                                width={40}
                                                height={40}
                                                className="object-contain rounded-[50%]"
                                            />
                                            <p className="font-bold">{item.user?.first_name} {item.user?.last_name}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[1.1rem]">{item.title}</h3>
                                            <p className="color-grey-text text-[.9rem] mt-2 text-justify">{item.review}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
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
                                                <p className="font-bold">{dayjs(item.created_at).fromNow()}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
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
                )
                :
                (
                    <div>
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png"  header="No reviews yet" content="Kindly check back for reviews on this instructor" imageWidth={400} imageHeight={240}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ViewTutorsTestimonials