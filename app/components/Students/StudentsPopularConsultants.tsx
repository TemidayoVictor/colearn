import React from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";

const StudentPopularConsultant = () => {
    const consultants = genralStore((state) => state.consultants)

    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Most Popular Consultants</h2>
                <Link href="/" className="text-[.9rem] underline color-normal">All Consultants</Link>
            </div>

            <div className="bookings-container two">
                    {
                        consultants.map((item, index) => (
                            <div className="booking" key={index}>
                                <div>
                                    <Image
                                        aria-hidden
                                        src={item.instructor?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.instructor?.profile_photo}` : "/assets/images/course-img-2.png"}
                                        alt="Colearn Logo"
                                        width={265}
                                        height={248}
                                        className="object-cover rounded-[.3rem] booking-image"
                                    />
                                </div>
                                <div className="mt-[1em] mb-[.5em] flex gap-2 items-center">
                                    <p className="font-bold">{`${item.instructor?.user?.first_name} ${item.instructor?.user?.last_name}`}</p> <span className="text-[.9rem]">({item.instructor?.user?.country_iso3})</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/ic_deals.png"
                                        alt="Colearn Logo"
                                        width={24}
                                        height={24}
                                        className="object-cover"
                                    />
                                    <p className="text-[.9rem]">{item.instructor?.professional_headline}</p>
                                </div>
                                <div className="flex gap-2 justify-between items-center">
                                    <div className="flex gap-2 items-start">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/messages-2.png"
                                            alt="Colearn Logo"
                                            width={24}
                                            height={24}
                                            className="object-cover"
                                        />
                                        {/* <p className="text-[.9rem]">{item.courses} courses ({item.reviews} reviews)</p> */}
                                        <div className="flex gap-2">
                                            <p className="text-[.9rem]">Experience</p>
                                            <p className="text-[.9rem] font-bold">{item.instructor?.experience_years} years</p>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <p className="text-[.9rem]">Experience</p>
                                        <p className="text-[.9rem] font-bold">{item.instructor?.experience_years} years</p>
                                    </div> */}
                                </div>
                                <div className="mt-[1em] flex justify-between items-center">
                                    {
                                        item.type == "free" ? (
                                            <p className="font-bold" >Free</p>
                                        ) : (
                                            <p className="font-bold" >${item.hourly_rate} / hr </p>
                                        )
                                    }
                                    <Link href={`/students/bookings/session/${item.id}`} className="btn normal btn-small">Book Now</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

        </div>
    )
}

export default StudentPopularConsultant