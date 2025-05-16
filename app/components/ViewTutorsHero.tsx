import React from "react";
import Image from "next/image";

const ViewTutorsHero = () => {
    return (
        <div className="view-tutor-banner">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/user-banner.png"
                        alt="Colearn Logo"
                        width={1440}
                        height={1036}
                        className="object-cover user-banner"
                    />
                </div>
            <div className="container view-tutor-body">
                <div className="left">
                    <Image
                        aria-hidden
                        src="/assets/images/Frame 67.png"
                        alt="Colearn Logo"
                        width={200}
                        height={200}
                        className="object-cover rounded-[50%] view-tutor-body-img"
                    />
                </div>
                <div className="right">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold">Favi Ayomide</h3>
                                <div className="verified">
                                    <p>Verified</p>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/tick-circle-2.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-cover rounded-[50%]"
                                    />
                                </div>
                                <div className="flex desktop-flex">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/star.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <Image
                                        aria-hidden
                                        src="/assets/images/star.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <Image
                                        aria-hidden
                                        src="/assets/images/star.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <Image
                                        aria-hidden
                                        src="/assets/images/star.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                </div>
                                <p>4.8/5 rating</p>
                            </div>

                            <div className="my-1 font-semibold">
                                <p>UI/UX Designer, Certified Ux Designer Oxford.</p>
                            </div>

                            <div className="my-1 color-grey-text text-[.9rem]">
                                <p>Washington DC, USA.</p>
                            </div>

                            <div className="flex gap-2 my-1">
                                <Image
                                    aria-hidden
                                    src="/assets/images/ic_deals-3.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="font-semibold">UBSS LTD</p>
                            </div>

                            <div className="flex gap-2 my-1">
                                <Image
                                    aria-hidden
                                    src="/assets/images/messages-4.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Speaks: <span className="font-semibold">English, French</span></p>
                            </div>   
                        </div>

                        <div className="copy-cont desktop">
                            <Image
                                aria-hidden
                                src="/assets/images/copy.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTutorsHero