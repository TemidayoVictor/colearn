'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HelpDeskBody = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const toggleFAQ = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };
    return (
        <div>
            <div className="help-desk-body">
                <h2 className="title">Help Center</h2>
                
                <div className="help-desk-content">
                    <div className="left">
                        <div className="flex flex-col gap-[1em]">
                            <h2 className="title-2">Chat to us directly</h2>
                            <p className="text-[.9rem]"> "Need help fast? Chat with our support team on WhatsApp for instant assistance."</p>
                            <Link href='/' className="bt-btn btn normal"> 
                                <Image
                                    aria-hidden
                                    src="/assets/images/whatsapp.png"
                                    alt="Colearn Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                                <p>Chat Support</p>
                            </Link>
                            <div>
                                <Image
                                    aria-hidden
                                    src="/assets/images/help-desk.png"
                                    alt="Colearn Logo"
                                    width={300}
                                    height={348}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p className="font-semibold mb-[1em]">Frequently Asked Questions (FAQs)</p>
                        <div className="flex items-center justify-between gap-2 bg-white py-[.1em] px-[.7em] rounded-[.3rem] bod-grey res-w-full">
                            <Image
                                aria-hidden
                                src="/assets/images/search-normal-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <div className="w-[100%]">
                                <input type="text" placeholder="Search" className="w-[100%] color-grey-text text-[.9rem] p-[.3em]" />
                            </div>
                        </div>

                        <div>
                            {
                                [1,2,3,4, 5].map((item, index) => (
                                    <div className="faq-body-2" key={index}>
                                        <div className="faq" onClick={() => toggleFAQ(index)}>
                                            <p className="text-[.9rem] font-semibold w-[80%]">Question 1 : What is the lorem dolor sit? </p>
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
                                            <div className="faq-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur veniam, repellat temporibus doloremque quas cum accusantium ullam molestias non sed?</p>
                                            </div> 
                                        }
                                    </div>
                                ))
                            }
                            
                            {
                                [1,2,3,4, 5].map((item, index) => (
                                    <div className="faq-body-2" key={index}>
                                        <div className="faq" onClick={() => toggleFAQ(index)}>
                                            <p className="text-[.9rem] font-semibold">Question 1 : What is the lorem dolor sit? </p>
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
                                            <div className="faq-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur veniam, repellat temporibus doloremque quas cum accusantium ullam molestias non sed?</p>
                                            </div> 
                                        }
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpDeskBody;