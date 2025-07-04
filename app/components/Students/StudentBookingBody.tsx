'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { authStore } from "@/zustand/authStore";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { useRouter } from "next/navigation";
import { useAuthStudent } from "@/hooks/useAuth";
import { get_sessions } from "@/services/consultant";
import StudentPopularConsultant from "./StudentsPopularConsultants";
import AccountModal from "../Instructors/AccountModal";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Loader from "../Loader";
import { showErrorToast } from "@/utils/toastTypes";
import { Booking } from "@/app/Types/types";
import { useConsultant } from "@/hooks/useConsultant";
import ButtonLoader from "../buttonLoader";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

type StudentBookingBodyProps = {
    userType?: string
}

const StudentBookingBody = ({userType}: StudentBookingBodyProps) => {
    const {approveReschedule, buttonLoader} = useConsultant();
    const [selectedTab, setSelectedTab] = useState<string>('upcoming');
    const [showModal, setShowModal] = useState<string | null>(null);
    const [subSelected, setSubSelected] = useState<string | null>(null);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const openModal = (key: string, sub: string) => {
        setShowModal(key);
        setSubSelected(sub);
    } 

    const openModalTwo = (key: string) => {
        setShowModal(key);
    } 

    const closeModal = () => setShowModal(null);

    const user = authStore((state) => state.user);
    const userTimezone = user?.timezone
    const userId = user?.id;

    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    const updateBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        openModalTwo("booking-update");
    }

    const cancelBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        console.log(item);
        openModal("booking", "cancel");
    }

    const viewBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        openModal("booking", "cancel");
    }

    const approveRescheduleTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        approveReschedule();
    }

    useEffect(() => {
        setLoading(true);
        if (!userId) return;
        const init = async () => {
            await useAuthStudent(router); 
            // fetch all user bookings
            try {
                const response = await get_sessions(userId);
                
                if (response.success) {
                    // save state globally
                    setBookings(response.data.bookings);
                    genralStore.getState().setBookings(response.data.bookings);
                    genralStore.getState().setConsultants(response.data.consultants);

                    // close modal
                    closeModal();
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }

            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };

        init();

    }, [userId, newUpdate]);

    if(loading) return <Loader />
    
    return (
        <div>
            <div>
                <h2 className="title-2">Bookings</h2>
                <p className="color-grey-text text-[.8rem]">The session timings are following your local timezone {userTimezone} </p>
            </div>

            <div className="mt-[1.5em]">
                <div className="in-nav scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'upcoming' ? 'active' : ''}`} onClick={() => setSelectedTab('upcoming')}>Upcoming Sessions</span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'past' ? 'active' : ''}`} onClick={() => setSelectedTab('past')}> <span>Past & Completed Sessions</span></span>
                </div>
            </div>

            <div className="spacing-inter">
                {
                    bookings.map((item, index) => (
                        <div className="booking-cont" key={index}>
                            <div className="flex items-start justify-between">
                                <p className="w-[70%]">Mentorship session with <span className="color-darker font-bold">{`${item.consultant?.instructor?.user?.first_name} ${item.consultant?.instructor?.user?.last_name}`}</span></p>
                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => openModalTwo("booking")}>
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
                                <div className="flex items-start gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/calendar-add.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="res-text"> {item.date_string} </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/clock-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="res-text">{item.user_time} - {item.user_end_time}</p>
                                </div>
                            </div>
                            {
                                item.status === 'pending' &&
                                <div className="res-flex items-center gap-2 ">
                                    <button className="bt-btn btn btn-primary-fill" onClick={(e) => updateBookingTrigger(item)}>Update Booking</button>
                                    <div className="items-center gap-2 desktop-flex">
                                        {/* <button className=" btn normal" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button> */}
                                        <button className="color-error font-semibold cursor-pointer" onClick={(e) => cancelBookingTrigger(item)}>Cancel Booking</button>
                                    </div>
                                    <div className="mobile-flex items-center justify-between w-full gap-2">
                                        {/* <button className=" btn normal w-[65%]" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button> */}
                                        <button className="color-error font-semibold cursor-pointer" onClick={(e) => cancelBookingTrigger(item)}>Cancel Booking</button>
                                    </div>
                                </div>
                            }

                            {
                                item.status === 'cancelled-by-user' &&
                                <p className="color-error text-[.9rem] font-semibold">This session has been cancelled by you</p>
                            }

                            {
                                item.status === 'cancelled-by-consultant' &&
                                <p className="color-error text-[.9rem] font-semibold">This session has been cancelled by the consultant</p>
                            }

                            {
                                item.status === 'rescheduled-by-consultant' &&
                                <div >
                                    <div className="bg-white rounded-[.3em] p-2 border border-gray-200 ">
                                        <p className="text-sm text-gray-600 mb-4 italic">
                                            Consultant has requested to reschedule
                                        </p>

                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-2">
                                            <p className="font-medium text-gray-800">📅 Rescheduled Date:</p>
                                            <p className="text-gray-700">{dayjs(item.reschedule_date).format("dddd, MMM D, YYYY")}</p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                            <p className="font-medium text-gray-800">⏰ Rescheduled Time:</p>
                                            <p className="text-gray-700">{item.reschedule_time_user} <span className="text-xs text-gray-500">(Your time)</span></p>
                                            </div>

                                            <div>
                                            <p className="font-medium text-gray-800 mb-1">📝 Consultant's Note:</p>
                                            <p className="text-gray-700 bg-gray-100 rounded p-2 border border-gray-200 whitespace-pre-line">{item.reschedule_note}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="res-flex items-center gap-2 mt-3">
                                        <button className="bt-btn btn btn-success tw" onClick={(e) => approveRescheduleTrigger(item)}>
                                            {
                                                buttonLoader && genralStore.getState().booking?.id === item.id ?
                                                <ButtonLoader content="Please wait . . ." /> : 'Approve Reschedule'
                                            }
                                        </button>
                                        <div className="items-center gap-2 desktop-flex">
                                            <button className="color-error font-semibold cursor-pointer" onClick={(e) => cancelBookingTrigger(item)}>Cancel Booking</button>
                                        </div>
                                        <div className="mobile-flex items-center justify-between w-full gap-2">
                                            <button className="color-error font-semibold cursor-pointer" onClick={(e) => cancelBookingTrigger(item)}>Cancel Booking</button>
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                item.status === 'approved' &&
                                <div className="res-flex items-center gap-2 ">
                                    <Link href="/" className="bt-btn btn btn-primary-fill">Join Meeting</Link>
                                    <div className="items-center gap-2 desktop-flex">
                                        <button className=" btn normal" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button>
                                        <button className="color-error font-semibold" onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                    </div>
                                    <div className="mobile-flex items-center justify-between w-full gap-2">
                                        <button className=" btn normal w-[65%]" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button>
                                        <button className="color-error font-semibold w-[34%]" onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                    </div>
                                </div>
                            }
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