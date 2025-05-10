import React from "react";
import Image from "next/image";

const AboutDo = () => {
    return (
        <div className="section">
            <div className="container about-do">
                <div className="about-do-left">
                    <p>What We Do</p>
                    <h3 className="title-2">We empower learners of all levels to create exceptional learning experiences, efficiently and effectively.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut.</p> 

                    <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                </div>

                <div className="about-do-right">
                    <Image
                        aria-hidden
                        src="/assets/images/about-3.png"
                        alt="Colearn Logo"
                        width={604}
                        height={510}
                        className="object-contain blog-hero-left"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutDo