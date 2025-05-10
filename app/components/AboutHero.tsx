import React from "react";
import Image from "next/image";

const AboutHero = () => {
    return (
        <div className="cover bg-dark pb-[3em]">
            <div className="container about-hero">
                <div className="about-hero-img-cont two mobile">
                    <Image
                        aria-hidden
                        src="/assets/images/about-1.png"
                        alt="Colearn Logo"
                        width={320}
                        height={347}
                        className="object-contain about-hero-img"
                    />
                </div>

                <div className="content">
                    <h2>Learning made easy with CoLearn</h2>
                    <p className="text-white">Founded in 2024, our e-learning platform is dedicated to providing you with a one-stop destination for innovative learning solutions, engaging content, and inspiring resources. Our mission is to help you unlock your full potential and bring your ideas to life.</p>
                </div>

                <div className="about-hero-img-cont one mobile">
                    <Image
                        aria-hidden
                        src="/assets/images/about-2.png"
                        alt="Colearn Logo"
                        width={320}
                        height={347}
                        className="object-contain about-hero-img"
                    />
                </div>

                <div className="about-hero-img-cont one desktop">
                    <Image
                        aria-hidden
                        src="/assets/images/about-2.png"
                        alt="Colearn Logo"
                        width={320}
                        height={347}
                        className="object-contain about-hero-img"
                    />
                </div>

                <div className="about-hero-img-cont two desktop">
                    <Image
                        aria-hidden
                        src="/assets/images/about-1.png"
                        alt="Colearn Logo"
                        width={320}
                        height={347}
                        className="object-contain about-hero-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutHero