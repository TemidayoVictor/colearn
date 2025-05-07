'use client';

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
const images = ["/assets/images/image-2.png", "/assets/images/image-3.png", "/assets/images/image-4.png", "/assets/images/image-4.png"];

const HomeCourseList = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-8">
            
                {/* Forward scrolling */}
                <div className="pt-[1em] pb-[3em] overflow-hidden w-full bg-gradient-to-r from-[#00B8FF] via-[#2F68F5] via-[#2F68F5] to-[#5E17EB]">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 20, // Adjust this for speed
                        }}
                    >
                        {
                            [...images,...images].map((src, index) => (
                                <Image
                                key={index}
                                src={src}
                                alt={`Scrolling image ${index}`}
                                width={300}
                                height={300}
                                className="rounded-lg object-cover"
                                />
                            ))
                        }
                    </motion.div>
                </div>

                {/* Backward Scrolling */}
                <div className="mt-[-4em] overflow-hidden w-full">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ['-50%', '0%'] }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 20, // Adjust this for speed
                        }}
                    >
                        {
                            [...images,...images].map((src, index) => (
                                <Image
                                key={index}
                                src={src}
                                alt={`Scrolling image ${index}`}
                                width={300}
                                height={300}
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