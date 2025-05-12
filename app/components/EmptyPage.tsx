import React from "react";
import Image from "next/image";
import Link from "next/link";

type EmptyCartProps = {
    link: string,
    image: string,
    linkTitle: string,
    content: string
}

const EmptyPage = ({link, image, linkTitle, content}: EmptyCartProps) => {
    return (
        <div className="mb-[2em]">
            <div className="flex flex-col items-center justify-center gap-4">
                <Image
                    aria-hidden
                    src={image}
                    alt="Colearn Logo"
                    width={240}
                    height={240}
                    className="object-contain"
                />
                <p className="text-center">{content}</p>
                <Link href={link} className="bt-btn btn btn-primary-fill">
                    <span>{linkTitle}</span>
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
    )
}

export default EmptyPage