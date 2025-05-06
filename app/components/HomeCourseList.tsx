'use client';

import React from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
const images = ["/assets/images/image-2.png", "/assets/images/image-3.png", "/assets/images/image-4.png"];

const HomeCourseList = () => {
    return (
        <div className="mt-[2em]">
            <div className="flex flex-col gap-8">
            
                <div className="overflow-hidden w-full">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 20, // Adjust this for speed
                        }}
                    >
                        {
                            [...images, ...images].map((src, index) => (
                                <Image
                                key={index}
                                src={src}
                                alt={`Scrolling image ${index}`}
                                width={200}
                                height={200}
                                className="rounded-lg object-cover"
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HomeCourseList;