import React from "react";
import Image from "next/image";

const ContactForm = () => {
    return (
        <div className="cover bg-dark">
            <div className="container">
                <div className="text-white text-center">
                    <h2 className="title">Contact Our Team</h2>
                    <p className="mt-2 contact-p text-[.9rem]">Get in touch, We'd love to hear from you! Whether you have a question, comment, or just want to say hello, we're here to listen.</p>
                </div>

                <div className="contact text-white">
                    <div className="contact-left">
                        <div className="contact-input-body">
                            <div className="contact-input-flex">
                                <div className="contact-input-flex-item">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className="contact-input" placeholder="First Name"/>
                                </div>

                                <div className="contact-input-flex-item">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className="contact-input" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>

                        <div className="contact-input-body">
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="email" className="text contact-input" placeholder="linda@frmaecreative.com"/>
                            </div>
                        </div>

                        <div className="contact-input-body">
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input type="number" className="text contact-input" placeholder="+1 (555)-000-000"/>
                            </div>
                        </div>

                        <div className="contact-input-body">
                            <div>
                                <label htmlFor="">Description</label>
                                <textarea className="text contact-input h-[10rem]" placeholder="Enter a description"></textarea>
                            </div>
                        </div>

                        <div className="contact-input-body">
                            <div>
                                <label htmlFor=""></label>
                                <button className="flex gap-2 justify-center btn btn-primary-fill w-full">
                                    <p>Send Message</p>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right.png"
                                        alt="Colearn Logo"
                                        width={14}
                                        height={13}
                                        className="object-contain"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-white contact-right">
                        <div>
                            <div>
                                <h2 className="title">Chat With Us</h2>
                                <p className="text-[.8rem] mt-2">Speak to our friendly team via live chat</p>
                            </div>

                            <div className="mt-4">

                                    <div className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src='/assets/images/messages-2.png'
                                            alt="Colearn Logo"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="underline-text text-[.8rem]">Start a live chat</p>
                                    </div>

                                    <div className="flex gap-2 mt-2">
                                        <Image
                                            aria-hidden
                                            src='/assets/images/send-2.png'
                                            alt="Colearn Logo"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="underline-text text-[.8rem]">Shoot us an email</p>
                                    </div>
                                

                                <div className="mt-4">
                                    <h2 className="title">Call Us</h2>
                                    <p className="mt-2 text-[.8rem]">Call our team Mon-Fri from 8am -5pm</p>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <Image
                                        aria-hidden
                                        src='/assets/images/call-calling.png'
                                        alt="Colearn Logo"
                                        width={24}
                                        height={24}
                                    />
                                    <p className="underline-text text-[.8rem]">09134032886</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm