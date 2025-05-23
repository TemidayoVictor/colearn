import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridContent = () => {
    return (
        <div className="courses-container">
            {
                [1,2,3,4,5,6,7,8].map((items, index) => (
                    <Link href='course-page' className="course-box" key={index}>
                        <div className="course-top">
                            <Image
                                aria-hidden
                                src="/assets/images/course-img-2.png"
                                alt="Colearn Image"
                                width={254}
                                height={233}
                                className="object-cover rounded-[.5em] w-[100%]"
                            />
                        </div>
                        <div className="course-bottom">
                            <div className="flex items-start justify-between mb-2">
                                <div className="w-[75%]">
                                    <p className="font-bold text-res-1">UI/UX Beginner Vol.1</p>
                                    <p className="text-res-2">Uploaded 2 days ago</p>
                                </div>
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/dots.png"
                                        alt="Colearn Image"
                                        width={24}
                                        height={24}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/moneys-3.png"
                                                alt="Colearn Image"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-res-2">$30</p>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <div>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/people-3.png"
                                                alt="Colearn Image"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-res-2">134 Enrolled</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[.1em]">
                                        <div>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/profile-tick-3.png"
                                                alt="Colearn Image"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-res-2">54 completed</p>
                                    </div>

                                    <div className="flex items-center gap-[.2em]">
                                        <div>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/star.png"
                                                alt="Colearn Image"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-res-2">56 comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default GridContent;