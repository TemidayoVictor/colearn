'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import StudentPopularConsultant from "./StudentsPopularConsultants";
import AccountModal from "../Instructors/AccountModal";

type StudentBookingBodyProps = {
    userType?: string
}

const StudentBookingBody = ({userType}: StudentBookingBodyProps) => {
    const [selectedTab, setSelectedTab] = useState<string>('upcoming');
    const [showModal, setShowModal] = useState<string | null>(null);
    const [subSelected, setSubSelected] = useState<string | null>(null);
    const openModal = (key: string, sub: string) => {
        setShowModal(key);
        setSubSelected(sub);
    } 

    const closeModal = () => setShowModal(null);
    
    return (
        <div>
            <div>
                <h2 className="title-2">Bookings</h2>
                <p className="color-grey-text text-[.8rem]">The session timings are following your local timezone Africa/Lagos</p>
            </div>

            <div className="mt-[1.5em]">
                <div className="in-nav scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'upcoming' ? 'active' : ''}`} onClick={() => setSelectedTab('upcoming')}>Upcoming Sessions</span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'past' ? 'active' : ''}`} onClick={() => setSelectedTab('past')}> <span>Past & Completed Sessions</span></span>
                </div>
            </div>

            <div className="spacing-inter">
                {
                    [1,2,3].map((item, index) => (
                        <div className="booking-cont" key={index}>
                            <div className="flex items-start justify-between">
                                <p className="w-[70%]">Mentorship session with <span className="color-darker font-bold">Favi Ayomide</span></p>
                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => openModal("booking", "details")}>
                                    <p>Details</p>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right-5.png"
                                        alt="Colearn Image"
                                        width={16}
                                        height={16}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/calendar-add.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p>Mon, Feb 3rd</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/clock-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p>8:00am - 9:00am</p>
                                </div>
                            </div>
                            <div className="res-flex items-center gap-2 ">
                                <Link href="/" className="bt-btn btn btn-primary-fill">Join Meeting</Link>
                                <div className="items-center gap-2 desktop-flex">
                                    <button className=" btn normal" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button>
                                    <button className="color-error font-semibold" onClick={() => openModal("booking", "cancel")}>Cancel</button>
                                </div>
                                <div className="mobile-flex items-center justify-between w-full gap-2">
                                    <button className=" btn normal w-[65%]" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button>
                                    <button className="color-error font-semibold w-[34%]" onClick={() => openModal("booking", "cancel")}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                userType !== 'instructor' &&
                <div className="spacing-inter">
                    <StudentPopularConsultant/>
                </div>
            }

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal} subType={subSelected}/>
            }
        </div>
    )
}

export default StudentBookingBody