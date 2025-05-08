import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/logo-2.png"
                        alt="Colearn Logo"
                        width={200}
                        height={80}
                        className="object-contain"
                    />
                </div>

                <div className="footer-2">
                    <div className="footer-left text-[white]">
                        <div>
                            <h2 className="title">Join Our Community</h2>
                            <p className="mt-[1rem] text-[.8rem]">Stay ahead of the curve with exclusive updates and unbeatable course offers from CoLearn. Subscribe now to be the first to discover the latest news from CoLearn.</p>
                        </div>
                        <div className="flex items-center justify-between my-[2em] py-[.5em] px-[1.5em] footer-input-cover">
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="Your Email" className="footer-input w-[100%] placeholder-white text-[.8rem]" />
                        </div>
                        <div>
                            <Link href='/' className="flex gap-2 footer-btn">
                                Subscribe
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="footer-right text-white flex">
                        <div>
                            <h2 className="title-3">Quick Link</h2>
                            <div className="flex flex-col gap-[1rem] mt-[1rem] text-[.8rem]">
                                <Link href='/'>Contact Us</Link>
                                <Link href='/'>Blog</Link>
                                <Link href='/'>Become a Tutor</Link>
                                <Link href='/'>Find a Consultant</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="title-3">Follow us</h2>
                            <div className="flex flex-col gap-[1rem] mt-[1rem] text-[.8rem]">
                                <div>
                                    <Link href='/' className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/facebook.png"
                                            alt="Facebook Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p>Facebook</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href='/' className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/X.png"
                                            alt="Facebook Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p>X</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href='/' className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/instagram.png"
                                            alt="Facebook Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p>Instagram</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href='/' className="flex gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/X.png"
                                            alt="Facebook Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p>LinkedIn</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-3">
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/favicon-logo.png"
                                alt="Facebook Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white text-[.8rem]">CoLearn global,  All Rights Reserved | Copyright © 2025</p>
                    </div>
                    <div className="flex gap-2 text-white text-[.8rem]">
                        <Link href='/' className="footer-link">About Us</Link>
                        <Link href='/' className="footer-link">Privacy Policy</Link>
                        <Link href='/' className="footer-link">Terms of Use</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer