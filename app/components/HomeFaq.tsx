'use client'
import React, { useState } from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";

const HomeFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const toggleFAQ = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const faqs = genralStore((state) => state.web?.faqs) 

    return (
        <div className="section">
            <div className="container">
                <div className="home-faq">
                    <div className="faq-left">
                        <div className="flex items-center gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/help.png"
                                alt="Reviewer Avatar"
                                width={40}
                                height={40}
                                className="object-contain rounded-full border-2 border-white"
                            />
                            <h2 className="title">Frequently asked Questions</h2>
                        </div>
                        <p className="mt-2">Find answers to commonly asked questions about our courses, program and platform</p>
                    </div>

                    <div className="faq-right">
                        {
                            (faqs ?? [])?.map((item, index) => (
                                <div className="faq-body" key={index}>
                                    <div className="flex items-center justify-between" onClick={() => toggleFAQ(index)}>
                                        <h3 className="title-3"> {item.question} </h3>
                                        <div className="faq-handler">
                                            <p className="mt-[-.2rem]">{openIndex === index ? '-' : '+'}</p>
                                        </div>
                                    </div>
                                    {
                                        openIndex === index && (
                                            <p className="mt-2 text-gray-600">
                                            {item.answer}
                                            </p>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFaq;