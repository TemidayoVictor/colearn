import React from "react";
import Image from "next/image";
import Link from "next/link";


const HomeBanner= () => {
    return (
        <div className="section">
            <div className="home-banner container flex items-center justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="title italic">Become a Tutor and <br /> Instructor on CoLearn</h2>
                    
                    <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                    
                    <Link href='/' className="btn normal btn-primary-fill flex gap-2 w-fit">
                        Register Now
                        <Image
                            aria-hidden
                            src="/assets/images/arrow-right.png"
                            alt="Colearn Logo"
                            width={14}
                            height={13}
                            className="object-contain"
                        />
                    </Link>
                </div>

                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/ai.png"
                        alt="Colearn Logo"
                        width={340}
                        height={280}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;