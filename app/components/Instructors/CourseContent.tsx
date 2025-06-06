import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseContent = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="mt-3 flex flex-col gap-2">

                    <h2 className="title-2">The Complete AI-Powered Copywriting Course & ChatGPT Course</h2>
                    
                    <p className="text-[.9rem] text-justify color-grey-text">
                        Become a Pro Copywriter with the Complete Copywriting and Content Marketing Course. Use ChatGPT. Get 70+ Pro Templates.
                    </p>
                    
                    <div className="view-courses-middle">
                        <div className="flex items-center gap-2">
                            <p className="font-bold">4.8</p>
                            <div className="flex">
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/empty-star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <p className="color-normal">(1,691 ratings)</p>
                        </div>
                        <p>119,564 Students</p>
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
                                <p>Date Uploaded</p>
                            </div>
                            <p className="font-semibold">Nov, 2024</p>
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