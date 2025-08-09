'use client';
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { showErrorToast } from "@/utils/toastTypes";
import { genralStore } from "@/zustand/generalStore";

type ViewTutorsHeroProps = {
    marginTop?: boolean;
    type?: string;
}

const ViewTutorsHero = ({marginTop, type}: ViewTutorsHeroProps) => {

    const router = useRouter();

    const instructorGeneral = genralStore((state) => state.data?.instructor)
    const instructorAuth = authStore((state) => state.instructor)

    const instructor = type == 'instructor' ? instructorAuth : instructorGeneral;

    const user = authStore((state) => state.user);
    const loggedIn = authStore((state) => state.isInitialized);

    const bookSessionTrigger = (id: number | undefined) => {
        if(loggedIn && user?.type == 'student' ) {
            router.push(`/students/bookings/session/${id}`)
        }

        else {
            showErrorToast('Please login as Student to Book Session')
            router.push('/authentication/login')
        }
    }

    return (
        <div className={`${marginTop ? 'view-tutor-banner' : ''}`}>
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
                        src={instructor?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${instructor?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
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
                                <h3 className="font-bold">{instructor?.user?.first_name} {instructor?.user?.last_name}</h3>
                                {/* <div className="verified">
                                    <p>Verified</p>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/tick-circle-2.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-cover rounded-[50%]"
                                    />
                                </div> */}
                                {
                                    instructor?.consultant_active ? (
                                        <div className="verified">
                                            <p>Consultant</p>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/tick-circle-2.png"
                                                alt="Colearn Logo"
                                                width={12}
                                                height={12}
                                                className="object-cover rounded-[50%]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="verified ins">
                                            <p>Instructor</p>
                                            <Image
                                                aria-hidden
                                                src="/assets/images/tick-circle-2.png"
                                                alt="Colearn Logo"
                                                width={12}
                                                height={12}
                                                className="object-cover rounded-[50%]"
                                            />
                                        </div>
                                    )
                                }
                                
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
                                <p> {instructor?.professional_headline} </p>
                            </div>

                            <div className="my-1 color-grey-text text-[.9rem]">
                                <p> {instructor?.country} </p>
                            </div>

                            {/* <div className="flex gap-2 my-1">
                                <Image
                                    aria-hidden
                                    src="/assets/images/ic_deals-3.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <p className="font-semibold">UBSS LTD</p>
                            </div> */}

                            <div className="flex gap-2 my-1">
                                <Image
                                    aria-hidden
                                    src="/assets/images/messages-4.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <p>Speaks: <span className="font-semibold">
                                        {
                                            Array.isArray(instructor?.languages)
                                            ? instructor?.languages.join(", ")
                                            : JSON.parse(instructor?.languages || '[]').join(", ")
                                        }
                                    </span>
                                </p>
                            </div>   
                            
                            {
                                instructor?.consultant_active && type != 'instructor' ? (
                                    <button className="btn btn-primary-fill mt-2" onClick={() => bookSessionTrigger(instructor.consultant.id)}>Book Session</button>
                                ) : ""
                            }

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