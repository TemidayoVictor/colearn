import React from "react";
import Image from "next/image";
import Link from "next/link";

type HomeBannerProps = {
    title: string;
    subtitle?: string;
    link: string;
    linkTitle?: string;
};

const HomeBanner= ({title, subtitle, link, linkTitle}: HomeBannerProps) => {
    return (
        <div className="section container">
            <div className="home-banner container">
                <div className="flex flex-col gap-4 banner-left">
                    <h2 className="title">{title}</h2>
                    <p> {subtitle}</p>
                    
                    <Link href={link} className="banner-btn btn normal btn-primary-fill flex gap-2 w-fit justify-center">
                        {linkTitle}
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

                <div className="banner-right">
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