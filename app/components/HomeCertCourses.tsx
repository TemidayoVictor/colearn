import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCertCourses = () => {
    return (
        <div className="container section">
            <div>
                <h2 className="title-3">Get Cerification on</h2>
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
                <h2 className="title text-center">Engaging  Features to Enhance Your Learning</h2>
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


                <div>
                    <div className="courses-list my-[3em]">
                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="line-through mr-2 text-[#5A5C5E] font-semibold">$30.00</span>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="line-through mr-2 text-[#5A5C5E] font-semibold">$30.00</span>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                            <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="line-through mr-2 text-[#5A5C5E] font-semibold">$30.00</span>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="course">
                            <div className="relative w-fit">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={25}
                                            height={25}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-2 text-[1rem] font-bold">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                            <div className="flex gap-2 items-center mt-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/avatars.png"
                                    alt="Colearn Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Favi Design</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <span className="font-semibold">$30.00</span>
                                </div>
                                <Link href='/' className="btn normal">Buy Now</Link>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-2 flex justify-center items-center">
                        <Link href='/' className="flex items-center btn btn-primary-fill gap-2 normal">
                            <p>Explore More</p>
                            <div className="bg-white rounded-[50%]">
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-top-right.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            </div> 
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCertCourses;