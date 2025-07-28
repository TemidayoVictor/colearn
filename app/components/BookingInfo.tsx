import React from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";

const BookingInfo = () => {
    const consultant = genralStore((state) => state.consultant);
    return (
        <div className="booking-info">
            
            <h2 className="title-2">Consultant Information</h2>
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
                            <p className="font-semibold"> {consultant?.instructor?.user?.first_name} {consultant?.instructor?.user?.last_name}</p>
                            
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
                            <p> {consultant?.instructor?.professional_headline} </p>
                        </div>

                        <div className="mb-1">
                            <p> {consultant?.instructor?.country} </p>
                        </div>

                        {/* <div className="flex gap-2 mb-1">
                            <Image
                                aria-hidden
                                src="/assets/images/ic_deals-2.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain rounded-[50%]"
                            />
                            <p className="font-semibold">UBSS LTD</p>
                        </div> */}

                        <div className="flex gap-2 mb-1">
                            <Image
                                aria-hidden
                                src="/assets/images/messages-3.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain rounded-[50%]"
                            />
                            <p>Speaks:  
                                <span className="font-semibold ml-1">
                                {
                                    Array.isArray(consultant?.instructor?.languages)
                                    ? consultant?.instructor?.languages.join(", ")
                                    : JSON.parse(consultant?.instructor?.languages || '[]').join(", ")
                                }
                                </span>
                            </p>
                        </div>
                    </div>

                    <div>
                        {
                            consultant?.type == 'paid' ? (
                                <p className="font-semibold text-[1.2rem]">${consultant?.hourly_rate} / hr</p>
                            ) : (
                                <p className="free">Free</p>
                            )
                        }
                    </div>
                </div>
            </div>  

            {/* <div className="booking-time">
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
            </div> */}

            {/* <Unavailable />  */}

        </div>
    )
}

export default BookingInfo