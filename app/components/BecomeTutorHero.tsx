import React from "react";
import Image from "next/image";
import Link from "next/link";

const BecomeTutorHero = () => {
    return (
        <div className="become-tutor-wrapper">
            <div className="become-tutor-hero">
                <div className="become-tutor-hero-left">
                    <Image
                        aria-hidden
                        src="/assets/images/become-tutor-4.jpg"
                        alt="Colearn Logo"
                        fill
                        className="hero-img"
                    />
                </div>

                <div className="become-tutor-hero-right bg-darker text-white">
                    <h2 className="title">Empower the Next Generation</h2>
                    <p className="text-[1rem] text-justify">
                        Share your knowledge, skills, and experience to inspire and guide others. Become a mentor or tutor today and help shape the future of learning!
                    </p>
                    <Link href='/' className="bt-btn btn btn-primary-fill">
                        <span>Become a Tutor</span>
                        <span>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BecomeTutorHero