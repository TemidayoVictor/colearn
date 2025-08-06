'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { authStore } from "@/zustand/authStore";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { useRouter } from "next/navigation";
import { useAuthConsultant } from "@/hooks/useAuth";
import { get_sessions_consultant } from "@/services/consultant";
import StudentPopularConsultant from "../Students/StudentsPopularConsultants";
import AccountModal from "../Instructors/AccountModal";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Loader from "../Loader";
import { showErrorToast } from "@/utils/toastTypes";
import { Booking } from "@/app/Types/types";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";

dayjs.extend(utc);
dayjs.extend(timezone);

type StudentBookingBodyProps = {
    userType?: string
}

const InstructorsBookingBody = ({userType}: StudentBookingBodyProps) => {
    const {buttonLoader} = useConsultant();
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

    const consultant = authStore((state) => state.consultant);
    const consultantId = consultant?.id;

    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    const approveBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        openModalTwo("booking-approve");
    }

    const rescheduleBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        openModalTwo("booking-reschedule-consultant");
    }

    const cancelBookingTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        openModal("booking", "cancel-consultant");
    }

    const completeTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        // markAsComplete
        openModalTwo("mark-as-complete-consultant");
    }

    const missedTrigger = (item: Booking): void => {
        genralStore.getState().setBooking(item);
        // markAsComplete
        openModalTwo("mark-as-missed-consultant");
    }

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthConsultant(router); 
            if (!consultantId) return;
            // fetch consultant bookings
            try {
                const response = await get_sessions_consultant(consultantId);
                
                if (response.success) {
                    // save state globally
                    setBookings(response.data.bookings);
                    genralStore.getState().setBookings(response.data.bookings);

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

    }, [consultantId, newUpdate]);

    if(loading) return <Loader />
    
    return (
        <div>
            <div>
                <h2 className="title-2">Bookings</h2>
                <p className="color-grey-text text-[.8rem]">The session timings are following your local timezone {userTimezone} </p>
            </div>

            {/* <div className="mt-[1.5em]">
                <div className="in-nav scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'upcoming' ? 'active' : ''}`} onClick={() => setSelectedTab('upcoming')}>Upcoming Sessions</span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'past' ? 'active' : ''}`} onClick={() => setSelectedTab('past')}> <span>Past & Completed Sessions</span></span>
                </div>
            </div> */}

            <div className="spacing-inter">
                {
                    bookings.map((item, index) => {
                        const now = dayjs(); // current date-time
                        const bookingDateTime = dayjs(`${item.date} ${item.start_time}`, 'YYYY-MM-DD hh:mm A');

                        const isPast = now.isAfter(bookingDateTime);
                        const isToday = dayjs().isSame(item.date, 'day');
                        const isUpcoming = now.isBefore(bookingDateTime);
                        const isPaid = item.payment_status === 'paid';
                        const isApproved = item.status === 'approved';
                        const isCompleted = item.status === 'completed_user';
                        const isMissed = item.status === 'missed_user';
                        const isMissedConsultant = item.status === 'missed_consultant';
                        const isConsultantCancelled = item.status === 'cancelled-by-consultant';
                        const isUserCancelled = item.status === 'cancelled-by-user';
                        const isPending = item.status === 'pending';
                        const isRescheduledByUser = item.status === 'rescheduled-by-user';
                        const isRescheduledByConsultant = item.status === 'rescheduled-by-consultant';
                        const userMissed = Boolean(item.missed_client);
                        const consultantMissed = Boolean(item.missed_consultant);
                        const isAdminCancelled = item.status === 'cancelled-by-admin';
                    
                        return (
                            <div className="booking-cont" key={index}>
                                <div className="flex items-start justify-between">
                                    <p className="w-[70%]">Mentorship session with  <span className="color-darker font-bold">{`${item.user?.first_name} ${item.user?.last_name}`}</span></p>
                                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => openModal("booking", "details-consultant")}>
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
                                        <p className="res-text"> {item.consultant_date} </p>
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
                                        <p className="res-text">{item.start_time} - {item.end_time}</p>
                                    </div>
                                </div>

                                {
                                    isUserCancelled &&
                                    <div className="alert no notification error mb-2 text-[.9rem]">
                                        <p className="color-error text-[.9rem] font-semibold">This session has been cancelled by the client</p>
                                    </div>
                                }

                                {
                                    isConsultantCancelled &&
                                    <div className="alert no notification error mb-2 text-[.9rem]">
                                        <p className="color-error text-[.9rem] font-semibold">This session has been cancelled by you</p>
                                    </div>
                                }

                                {
                                    isAdminCancelled &&
                                    <div className="alert no notification error text-[.9rem]">
                                        <p className="color-error text-[.9rem] font-semibold">This session has been cancelled by the Administrator</p>
                                    </div>
                                }

                                {
                                    !isUserCancelled && !isConsultantCancelled && !isAdminCancelled &&
                                    <div>
                                        {
                                            !isPast ? (
                                                <div>
                                                    {
                                                        (isPending || isRescheduledByUser) &&
                                                        <div>
                                                            {
                                                                isRescheduledByUser &&
                                                                <div className="bg-white rounded-[.3em] p-2 border border-gray-200 ">
                                                                    <p className="text-sm text-gray-600 mb-4 italic">
                                                                        Client has updated the session details. Please review and take action.
                                                                    </p>

                                                                    <div className="space-y-3 text-sm">
                                                                        <div className="flex items-center gap-2">
                                                                        <p className="font-medium text-gray-800">📅 Date:</p>
                                                                        <p className="text-gray-700">{dayjs(item.consultant_date).format("dddd, MMM D, YYYY")}</p>
                                                                        </div>

                                                                        <div className="flex items-center gap-2">
                                                                        <p className="font-medium text-gray-800">⏰ Time:</p>
                                                                        <p className="text-gray-700">{item.start_time} - {item.end_time} <span className="text-xs text-gray-500">(Your time)</span></p>
                                                                        </div>

                                                                        <div>
                                                                        <p className="font-medium text-gray-800 mb-1">📝 Client Note:</p>
                                                                        <p className="text-gray-700 bg-gray-100 rounded p-2 border border-gray-200 whitespace-pre-line">{item.note}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }

                                                            <div className="res-flex items-center gap-2 mt-2">
                                                                <button className="bt-btn btn btn-success tw" onClick={() => approveBookingTrigger(item)}>Approve Session</button>
                                                                <div className="items-center gap-2 desktop-flex">
                                                                    {/* <button className=" btn normal" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button> */}
                                                                    <button className="color-error font-semibold"  onClick={(e) => cancelBookingTrigger(item)}>Cancel Session</button>
                                                                </div>
                                                                <div className="mobile-flex items-center justify-between w-full gap-2">
                                                                    {/* <button className=" btn normal w-[65%]" onClick={() => openModal("booking", "reschedule")}>Reschedule meeting</button> */}
                                                                    <button className="color-error font-semibold w-[34%]"  onClick={(e) => cancelBookingTrigger(item)}>Cancel Session</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    }

                                                    {
                                                        isRescheduledByConsultant &&
                                                        <div>
                                                            <div className="alert no notification mb-2 text-[.9rem]">Your request has been successfully sent and is awaiting the client's approval.</div>
                                                            <div className="res-flex items-center gap-2 ">
                                                                <Link href="/" className="bt-btn btn btn-primary-fill">Join Meeting</Link>
                                                                <div className="items-center gap-2 desktop-flex">
                                                                    <button className=" btn normal" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                    <button className="color-error font-semibold" onClick={(e) => cancelBookingTrigger(item)}>Cancel Session</button>
                                                                </div>
                                                                <div className="mobile-flex items-center justify-between w-full gap-2">
                                                                    <button className=" btn normal w-[65%]" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                    <button className="color-error font-semibold w-[34%]" onClick={(e) => cancelBookingTrigger(item)}>Cancel Session</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                    {
                                                        isApproved &&
                                                        <div>
                                                            {
                                                                !isPaid ? (
                                                                    <div className="alert no notification mb-2 text-[.9rem]">"Payment for the session is still pending. The session will be confirmed upon receipt of payment</div>
                                                                ) : (
                                                                    <div className="alert no notification success mb-2 text-[.9rem]">"Payment for the session has been received. The session is now confirmed and valid.</div>
                                                                )
                                                            }
                                                            <div className="res-flex items-center gap-2 ">
                                                                <a 
                                                                    href={
                                                                        item.booking_link && !item.booking_link.startsWith("http")
                                                                        ? `https://${item.booking_link}`
                                                                        : item.booking_link || "#"
                                                                    }
                                                                    className="bt-btn btn btn-primary-fill"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Join Meeting
                                                                </a>

                                                                <div className="items-center gap-2 desktop-flex">
                                                                    <button className=" btn normal" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                    <button className="color-error font-semibold"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                </div>
                                                                <div className="mobile-flex items-center justify-between w-full gap-2">
                                                                    <button className=" btn normal w-[65%]" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                    <button className="color-error font-semibold w-[34%]"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                </div>
                                            ) : (
                                                <div>
                                                    {
                                                        isPaid &&
                                                        <div>
                                                            {
                                                                isCompleted &&
                                                                <div className="alert no notification success text-[.9rem]">Thank you. Your session has been successfully completed, and your balance has been reimbursed to your wallet.</div>
                                                            }
                                                            
                                                            {
                                                                isMissed &&
                                                                <div>
                                                                    <div className="alert no notification mb-2 text-[.9rem]">
                                                                        {
                                                                            consultantMissed ? 
                                                                            "You and the client have marked this session as missed. You may choose to reschedule a new meeting or cancel the booking. Please note that if you opt to cancel, the amount to be paid will be determined by the CoLearn Admin after reviewing the session status." :
                                                                            "The client has marked this session as missed. Please supply your feedback."
                                                                        } 
                                                                    </div>
                                                                    {
                                                                        consultantMissed ? (
                                                                            <div className="res-flex items-center gap-2 "> {/* Both consultant and client agree that session was missed */}
                                                                                <a 
                                                                                    href={
                                                                                        item.booking_link && !item.booking_link.startsWith("http")
                                                                                        ? `https://${item.booking_link}`
                                                                                        : item.booking_link || "#"
                                                                                    }
                                                                                    className="bt-btn btn btn-primary-fill"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                >
                                                                                    Join Meeting
                                                                                </a>

                                                                                <div className="items-center gap-2 desktop-flex">
                                                                                    <button className=" btn normal" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                                    <button className="color-error font-semibold"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                                </div>
                                                                                <div className="mobile-flex items-center justify-between w-full gap-2">
                                                                                    <button className=" btn normal w-[65%]" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                                    <button className="color-error font-semibold w-[34%]"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                                </div>
                                                                            </div>

                                                                        ) : (

                                                                            <div>
                                                                                <div className="alert no notification mb-2 text-[.9rem]">The scheduled time for your session has elapsed. <span>Please update the session status by selecting <strong>"Completed"</strong> if it held, or <strong>"Missed"</strong> if it did not take place.</span></div>
                                                                                <div className="res-flex items-center gap-2 ">
                                                                                    <button className="bt-btn btn btn-success tw" onClick={(e) => completeTrigger(item)}>Mark as completed</button>
                                                                                    <button className="bt-btn btn error tw" onClick={(e) => missedTrigger(item)}>Mark as missed</button>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            }

                                                            {
                                                                isMissedConsultant &&
                                                                <div>
                                                                    <div className="alert no notification text-[.9rem]">
                                                                        {
                                                                            userMissed ? 
                                                                            "You and the client have marked this session as missed. You may choose to reschedule a new meeting or cancel the booking. Please note that if you opt to cancel, the amount to be paid will be determined by the CoLearn Admin after reviewing the session status." :
                                                                            "You have marked this session as missed. We are awaiting feedback from the client."
                                                                        }
                                                                    </div>
                                                                    
                                                                    {
                                                                        userMissed &&
                                                                        <div className="mt-2 res-flex items-center gap-2 "> {/* Both consultant and client agree that session was missed */}
                                                                            <a 
                                                                                href={
                                                                                    item.booking_link && !item.booking_link.startsWith("http")
                                                                                    ? `https://${item.booking_link}`
                                                                                    : item.booking_link || "#"
                                                                                }
                                                                                className="bt-btn btn btn-primary-fill"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                Join Meeting
                                                                            </a>

                                                                            <div className="items-center gap-2 desktop-flex">
                                                                                <button className=" btn normal" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                                {
                                                                                    userMissed &&
                                                                                    <button className="color-error font-semibold"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                                }
                                                                            </div>
                                                                            <div className="mobile-flex items-center justify-between w-full gap-2">
                                                                                <button className=" btn normal w-[65%]" onClick={() => rescheduleBookingTrigger(item)}>Reschedule meeting</button>
                                                                                {
                                                                                    userMissed &&
                                                                                    <button className="color-error font-semibold w-[34%]"  onClick={(e) => cancelBookingTrigger(item)}>Cancel</button>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    }

                                                                </div>
                                                            }

                                                            {
                                                                !isCompleted && !isMissed && !isMissedConsultant && !isRescheduledByConsultant &&
                                                                <div>
                                                                    <div className="alert no notification mb-2 text-[.9rem]">The scheduled time for your session has elapsed. <span>Please update the session status by selecting <strong>"Completed"</strong> if it held, or <strong>"Missed"</strong> if it did not take place.</span></div>
                                                                    <div className="res-flex items-center gap-2 ">
                                                                        <button className="bt-btn btn btn-success tw" onClick={(e) => completeTrigger(item)}>Mark as completed</button>
                                                                        <button className="bt-btn btn error tw" onClick={(e) => missedTrigger(item)}>Mark as missed</button>
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                isRescheduledByConsultant &&
                                                                <div className="alert no notification text-[.9rem]">Your request has been successfully sent and is awaiting the client's approval.</div>
                                                            }

                                                        </div>
                                                    }

                                                    {
                                                        !isPaid &&
                                                        <p className="color-error text-[.9rem] font-semibold">The scheduled session has ended, and no payment was received.</p>
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                        );
                    })   
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

export default InstructorsBookingBody