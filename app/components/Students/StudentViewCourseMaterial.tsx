'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const StudentViewCourseMaterial = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
        
    const toggleCourse = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };
    return (
        <div>
            <h2 className="title-3 mt-2">Course Materials</h2>
            {
                [1, 2, 3, 4, 5].map((item, index ) => (
                    <div className="faq-body-2" key={index}>
                        <div className="faq" onClick={() => toggleCourse(index)}>
                            <p className="font-semibold w-[80%]">Introduction to IT </p>
                            <div>
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-down.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {
                            openIndex === index &&
                            <div className="material-content">
                                {
                                    [1,2,3].map((item, index) => (
                                        <Link href="/" key={index} className="material-box">
                                            <div>
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/video.png"
                                                    alt="Colearn Logo"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <div>
                                                    <p>From Abacus to analytical engine</p>
                                                    <div className="flex items-center gap-2 text-[.8rem] mt-1">
                                                        <p>video</p>
                                                        <p>&middot;</p>
                                                        <p>5 mins</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </Link>
                                    ))
                                }

                                <div className="material-box">
                                    <div>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/reading.png"
                                            alt="Colearn Logo"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <p>From Abacus to analytical engine</p>
                                            <div className="flex items-center gap-2 text-[.8rem] mt-1">
                                                <p>reading</p>
                                                <p>&middot;</p>
                                                <p>5 mins</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div> 
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default StudentViewCourseMaterial