'use client';
import React from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation } from 'swiper/modules';

const HomeReviews = () => {
    return (
        <div className="bg-dark section text-white">
            <div className="home-reviews flex flex-col gap-8 py-[3rem]">
                <div className="text-center flex flex-col gap-4">   
                    <h2 className="title">What Our Learners Say</h2>
                    <p>Discover how our courses have transformed their careers <br /> and lives</p>
                </div>
            </div>

            <div className="w-full max-w-3xl mx-auto relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                      }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {[1, 2, 3].map((i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col gap-6 items-center justify-center p-6">
                        <p className="text-center review-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic excepturi tempora, quas saepe quisquam dolorem voluptatum rerum quis nostrum.
                        </p>

                        <div className="flex items-center gap-4 mb-[2em]">
                            <Image
                                aria-hidden
                                src="/assets/images/avatars.png"
                                alt="Reviewer Avatar"
                                width={40}
                                height={40}
                                className="object-contain rounded-full border-2 border-white"
                            />
                            <p className="font-medium">Favi Design</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 swiper-btn">
                    <Image src="/assets/images/arrow-left.png" alt="Prev" width={15} height={15} />
                </button>
                <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 swiper-btn">
                    <Image src="/assets/images/arrow-right.png" alt="Next" width={15} height={15} className="object-contain"/>
                </button>
            </div>
        </div>
    )
}

export default HomeReviews;