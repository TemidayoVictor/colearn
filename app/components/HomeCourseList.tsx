'use client';

import React from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';
const images = ["/assets/images/image-2.png", "/assets/images/image-3.png", "/assets/images/image-4.png"];

const HomeCourseList = () => {
    return (
        <div className="mt-[2em]">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={5000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                className="w-full overflow-hidden"
            >
                {
                    images.map((src, index) => (
                        <SwiperSlide key={index} style={{ width: '200px' }}>
                            <Image src={src} alt={`image-${index}`} width={200} height={200} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HomeCourseList;