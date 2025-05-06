import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCertCourses = () => {
    return (
        <div className="container my-[2em]">
            <div>
                <h2 className="title-2">Get Cerification on</h2>
                <div className="home-cert-courses mt-[1em]">
                
                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>Computer Sciences</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>IT</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>Business</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>UIUX Design</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>Data Science</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 cert-con">
                            <Image
                            aria-hidden
                            src="/assets/images/ui-ux.png"
                            alt="Colearn Logo"
                            width={88}
                            height={64}
                            className="object-contain"
                            />
                            <p>Leadership</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="my-[3em] flex flex-col gap-4">
                <h2 className="title-2 text-center">Engaging  Features to Enhance Your Learning</h2>
                <p className="text-center">
                    Experience the best of e-learning: Our platform offers interactive courses, expert support, <br /> and more, helping you achieve your goals faster and easier
                </p>

                <div className="tabs mt-3 px-3">
                    <div className="tab active">All</div>
                    <div className="tab">Computer Sciences</div>
                    <div className="tab">Data Science</div>
                    <div className="tab">Python</div>
                    <div className="tab">Business</div>
                    <div className="tab">Information Technology</div>
                    <div className="tab">Leadrship</div>
                    <div className="tab">Communication</div>
                </div>


                <div className="courses-list">
                    <div className="course">
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/ui-ux.png"
                                alt="Colearn Logo"
                                width={88}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <h3>The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                        <div>
                           <Image
                                aria-hidden
                                src="/assets/images/ui-ux.png"
                                alt="Colearn Logo"
                                width={88}
                                height={64}
                                className="object-contain"
                            />
                            <p>Favi Design</p>
                        </div>
                        <div>
                            <p>$30.00</p>
                            <Link href='/'>Buy Now</Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCertCourses;