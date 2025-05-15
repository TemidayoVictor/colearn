import React from "react";
import Image from "next/image";
import Unavailable from "./Unavailable";

const BookingInfo = () => {
    return (
        <div className="booking-info">
            
            <h2 className="title-2">Booking Information</h2>
            <p className="text-[.8rem] color-grey-text mt-2">Book your one-on-one consultation today and gain valuable insights from our top expert.</p>

            <div className="booking-info-cont my-[1em]">
                <div className="left">
                    <Image
                        aria-hidden
                        src="/assets/images/Frame 67.png"
                        alt="Colearn Logo"
                        width={56}
                        height={56}
                        className="object-contain rounded-[50%]"
                    />
                </div>

                <div className="right">
                    <div>
                        <div className="r-l mb-1">
                            <p className="font-semibold">Favi Ayomide Arowolo</p>
                            
                            <div className="flex gap-2 items-center">
                                <div className="flex">
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
                                    <Image
                                        aria-hidden
                                        src="/assets/images/star.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain rounded-[50%]"
                                    />
                                </div>

                                <div>
                                    <p>4.8/5 rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-1">
                            <p>Senior Product Designer at Apple</p>
                        </div>

                        <div className="mb-1">
                            <p>New York, USA.</p>
                        </div>

                        <div className="flex gap-2 mb-1">
                            <Image
                                aria-hidden
                                src="/assets/images/ic_deals-2.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain rounded-[50%]"
                            />
                            <p className="font-semibold">UBSS LTD</p>
                        </div>

                        <div className="flex gap-2 mb-1">
                            <Image
                                aria-hidden
                                src="/assets/images/messages-3.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain rounded-[50%]"
                            />
                            <p>Speaks: <span className="font-semibold">English, French</span></p>
                        </div>
                    </div>

                    <div>
                        <p className="free">Free</p>
                    </div>
                </div>
            </div>  

            <div className="booking-time">
                <div className="flex gap-2 items-start">
                    <Image
                        aria-hidden
                        src="/assets/images/calendar-2.png"
                        alt="Colearn Logo"
                        width={22}
                        height={22}
                        className="object-contain"
                    />
                    <div className="flex flex-col">
                        <p className="color-grey-text text-[.9rem]">Booking Date</p>
                        <p className="font-bold text-[.8rem]">14th July, 2024</p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <Image
                        aria-hidden
                        src="/assets/images/clock.png"
                        alt="Colearn Logo"
                        width={22}
                        height={22}
                        className="object-contain"
                    />
                    <div className="flex flex-col">
                        <p className="color-grey-text text-[.9rem]">Booking Time & Duration</p>
                        <p className="font-bold text-[.8rem]">09:00 - 09:30 AM</p>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-3">Add Consultation Note</h3>
                <textarea name="" id="" placeholder="Enter a description" className="textarea"></textarea>
            </div>

            <div className="flex justify-end">
                <button className="bt-btn btn btn-primary-fill">
                    <span>Pay Now</span>
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
                </button>
            </div>

            {/* <Unavailable />  */}

        </div>
    )
}

export default BookingInfo