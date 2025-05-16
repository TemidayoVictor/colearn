import React from "react";
import Image from "next/image";

const AboutWe = () => {
    return (
        <div className="bg-light pb-[3em]">
            <div className="cover container ">
                <div className="bg-white rounded-[.5rem] blog-hero shadow-md p-[1em]">
                    <Image
                        aria-hidden
                        src="/assets/images/blog.png"
                        alt="Colearn Logo"
                        width={778}
                        height={456}
                        className="object-contain blog-hero-left"
                    />

                    <div className="about blog-hero-right">
                        <p className="font-bold">Who we are</p>
                        <h2 className="title mt-[1rem]">We’re <span>Helpful</span></h2>
                        <p className="text-[1rem] text-justify">
                        Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. 
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWe