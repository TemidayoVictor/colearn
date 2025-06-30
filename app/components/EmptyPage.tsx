import React from "react";
import Image from "next/image";
import Link from "next/link";

type EmptyCartProps = {
    link?: string,
    image: string,
    linkTitle?: string,
    content: string
    header?: string
    imageWidth? : number
    imageHeight? : number
    centerHeader? : boolean
    button?: boolean
    buttonClick?: () => void
}

const EmptyPage = ({
    link, 
    image, 
    linkTitle, 
    content, 
    header, 
    imageWidth, 
    imageHeight, 
    centerHeader, 
    button,
    buttonClick
}: EmptyCartProps) => {
    return (
        <div className="mb-[2em]">
            <div className="flex flex-col items-center justify-center gap-4">
                {
                  imageWidth ? (

                    <Image
                        aria-hidden
                        src={image}
                        alt="Colearn Logo"
                        width={imageWidth}
                        height={imageHeight}
                        className="object-contain"
                    />

                  ) : (
                    <Image
                        aria-hidden
                        src={image}
                        alt="Colearn Logo"
                        width={240}
                        height={240}
                        className="object-contain"
                    />
                  )  
                }
                {
                    header &&
                    <h2 className={`font-semibold text-[1.5rem] ${centerHeader ? 'text-center' : ''}`}>{header}</h2>
                }
                <p className="text-center text-[.9rem] color-grey-text res-text-width">{content}</p>
                {
                    link &&
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
                }
                {
                    button &&
                    <div>
                        <button className="bt-btn btn btn-primary-fill" onClick={buttonClick}>
                            {linkTitle}
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default EmptyPage