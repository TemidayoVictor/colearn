'use client';
import React, {useState, useEffect} from "react";
import { genralStore } from "@/zustand/generalStore";
import { Booking } from "../Types/types";
import { useConsultant } from "@/hooks/useConsultant";
import Image from "next/image";
import ButtonLoader from "./buttonLoader";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

type BookingDetailsProps = {
    displayType?: string | null
}

const BookingDetails = ({displayType}: BookingDetailsProps) => {

    const {
        buttonLoader,
        cancelSessionUser,
        cancelSessionConsultant,
        cancelNote,
        setCancelNote,
        cancelSessionAdmin,
    } = useConsultant();
    
    const booking = genralStore((state) => state.booking);

    const [bookingInfo, setBookingInfo] = useState<Booking>();

    useEffect(() => {
        if (!booking) return;
        const init = async () => {
            setBookingInfo(booking)
        };
        init();

    }, [booking]);

    console.log(booking)

    return (
        <div className="booking-details">
            {
                displayType == 'details-student' &&
                <div>
                    <div>
                        <h2 className="title-3">Booking Details</h2>
                    </div>

                    <div className="mt-4">
                        <p className="booking-header">Consultant</p>

                        <div className="booking-sect flex items-center gap-2">
                            <div>
                                 <Image
                                    aria-hidden
                                    src={booking?.consultant?.instructor?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${booking?.consultant?.instructor?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p>{`${booking?.consultant?.instructor?.user?.first_name} ${booking?.consultant?.instructor?.user?.last_name}`}</p>
                                <p className="booking-header two">{booking?.consultant?.instructor?.professional_headline}</p>
                            </div>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Type</p>
                            <p className="booking-body capitalize">{booking?.booking_type}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Platform</p>
                            <p className="booking-body capitalize">{booking?.channel}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Link</p>
                            <a className="booking-body underline" href={booking?.booking_link && !booking?.booking_link.startsWith("http") ? `https://${booking?.booking_link}`: booking?.booking_link || "#"}>{booking?.booking_link}</a>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Date</p>
                            <p className="booking-body"> {`${booking?.date_string}`} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Time</p>
                            <p className="booking-body"> {`${booking?.user_time} - ${booking?.user_end_time}`} </p>
                        </div>
                        {
                            booking?.note &&
                            <div className="booking-sect">
                                <p className="booking-header">Your Note</p>
                                <p className="booking-body"> {booking?.note} </p>
                            </div>
                        }

                        {
                            booking?.consultant_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Consultant's Note</p>
                                <p className="booking-body"> {booking?.consultant_note} </p>
                            </div>
                        }

                        <div className="booking-sect">
                            <p className="booking-header">Booking Status</p>
                            <p className="booking-body capitalize"> {(booking?.status == 'missed_user' || 'missed_consultant') ? 'Missed': booking?.status} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Payment Status</p>
                            <p className={`booking-body capitalize font-semibold ${booking?.payment_status == 'paid' ? 'success' : 'color-error'}`}> {booking?.payment_status} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="font-semibold text-[.8rem]">Created: { dayjs(booking?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")} WAT</p>
                        </div>

                    </div>
                </div>
            }

            {
                displayType == 'details-consultant' &&
                <div>
                    <div>
                        <h2 className="title-3">Booking Details</h2>
                    </div>

                    <div className="mt-4">
                        <p className="booking-header">Client</p>

                        <div className="booking-sect flex items-center gap-2">
                            <div>
                                <Image
                                    aria-hidden
                                    src={booking?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${booking?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p className="booking-header">{`${booking?.user?.first_name} ${booking?.user?.last_name}`}</p>
                                {/* <p className="booking-header two">{booking?.consultant?.instructor?.professional_headline}</p> */}
                            </div>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Type</p>
                            <p className="booking-body capitalize">{booking?.booking_type}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Platform</p>
                            <p className="booking-body capitalize">{booking?.channel}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Link</p>
                            <a className="booking-body underline" href={booking?.booking_link && !booking?.booking_link.startsWith("http") ? `https://${booking?.booking_link}`: booking?.booking_link || "#"}>{booking?.booking_link}</a>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Date</p>
                            <p className="booking-body"> {`${booking?.consultant_date}`} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Time</p>
                            <p className="booking-body"> {`${booking?.start_time} - ${booking?.end_time}`} </p>
                        </div>
                        {
                            booking?.note &&
                            <div className="booking-sect">
                                <p className="booking-header">Client's Note</p>
                                <p className="booking-body"> {booking?.note} </p>
                            </div>
                        }

                        {
                            booking?.consultant_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Your Note</p>
                                <p className="booking-body"> {booking?.consultant_note} </p>
                            </div>
                        }

                        <div className="booking-sect">
                            <p className="booking-header">Booking Status</p>
                            <p className="booking-body capitalize"> {(booking?.status == 'missed_user' || booking?.status == 'missed_consultant') ? 'Missed': booking?.status} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Payment Status</p>
                            <p className={`booking-body capitalize font-semibold ${booking?.payment_status == 'paid' ? 'success' : 'color-error'}`}> {booking?.payment_status} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="font-semibold text-[.8rem]">Created: { dayjs(booking?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")} WAT</p>
                        </div>

                    </div>
                </div>
            }

            {
                displayType == 'details-admin' &&
                <div>
                    <div>
                        <h2 className="title-3">Booking Details</h2>
                    </div>

                    <div className="mt-4">
                        <p className="booking-header">Client</p>

                        <div className="booking-sect flex items-center gap-2">
                            <div>
                                 <Image
                                    aria-hidden
                                    src={booking?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${booking?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p>{`${booking?.user?.first_name} ${booking?.user?.last_name}`} [{booking?.user?.email}] </p>
                            </div>
                        </div>

                        <p className="booking-header">Consultant</p>

                        <div className="booking-sect flex items-center gap-2">
                            <div>
                                 <Image
                                    aria-hidden
                                    src={booking?.consultant?.instructor?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${booking?.consultant?.instructor?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                    alt="Colearn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p>{`${booking?.consultant?.instructor?.user?.first_name} ${booking?.consultant?.instructor?.user?.last_name}`} [{booking?.consultant?.instructor?.user?.email}] </p>
                                <p className="booking-header two">{booking?.consultant?.instructor?.professional_headline}</p>
                            </div>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Type</p>
                            <p className="booking-body capitalize">{booking?.booking_type}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Platform</p>
                            <p className="booking-body capitalize">{booking?.channel}</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Meeting Link</p>
                            <a className="booking-body underline" href={booking?.booking_link && !booking?.booking_link.startsWith("http") ? `https://${booking?.booking_link}`: booking?.booking_link || "#"}>{booking?.booking_link}</a>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Date</p>
                            <p className="booking-body"> Client: {`${booking?.date_string}`} </p>
                            <p className="booking-body"> Consultant: {`${booking?.consultant_date}`} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Time</p>
                            <p className="booking-body">Client: {`${booking?.user_time} - ${booking?.user_end_time}`} </p>
                            <p className="booking-body">Consultant: {`${booking?.start_time} - ${booking?.end_time}`} </p>
                        </div>
                        {
                            booking?.note &&
                            <div className="booking-sect">
                                <p className="booking-header">Client Note</p>
                                <p className="booking-body"> {booking?.note} </p>
                            </div>
                        }

                        {
                            booking?.consultant_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Consultant's Note</p>
                                <p className="booking-body"> {booking?.consultant_note} </p>
                            </div>
                        }

                        <div className="booking-sect">
                            <p className="booking-header">Booking Status</p>
                            <p className="booking-body capitalize"> {(booking?.status == 'missed_user' || booking?.status == 'missed_consultant') ? 'Missed': booking?.status} </p>
                        </div>

                        {
                            booking?.cancel_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Cancel Note</p>
                                <p className="booking-body capitalize"> {booking?.cancel_note} </p>
                            </div>
                        }

                        <div className="booking-sect">
                            <p className="booking-header">Duration</p>
                            <p className='booking-body capitalize font-semibold'>{booking?.duration} minutes</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Consultation fee</p>
                            <p className='booking-body capitalize font-semibold'>$ {booking?.amount} </p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Payment Status</p>
                            <p className={`booking-body capitalize font-semibold ${booking?.payment_status == 'paid' ? 'success' : 'color-error'}`}> {booking?.payment_status} </p>
                        </div>

                        {
                            booking?.missed_client &&
                            <div className="booking-sect">
                                <p className="booking-header">The client says:</p>
                                <p className='booking-body'> The meeting was missed </p>
                            </div>  
                        }

                        {
                            booking?.missed_client_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Why was the meeting missed (Client's reason)</p>
                                <p className='booking-body'> {booking?.missed_client_note} </p>
                            </div>  
                        }

                        {
                            booking?.missed_consultant &&
                            <div className="booking-sect">
                                <p className="booking-header">The consultant says:</p>
                                <p className='booking-body'> The meeting was missed </p>
                            </div>  
                        }

                        {
                            booking?.missed_consultant_note &&
                            <div className="booking-sect">
                                <p className="booking-header">Why was the meeting missed (Consultant's reason)</p>
                                <p className='booking-body'> {booking?.missed_consultant_note} </p>
                            </div>  
                        }

                        <div className="booking-sect">
                            <p className="font-semibold text-[.8rem]">Created: { dayjs(booking?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")} WAT</p>
                        </div>

                        <div className="booking-sect bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-md text-gray-800">
                            <h3 className="text-lg font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                                ⚠️ Conflict Resolution Notice
                            </h3>

                            <p className="mb-3">
                                Conflicts may arise when there's a disagreement between a client and consultant regarding the outcome of a paid session — especially after the scheduled date has passed.
                            </p>

                            <p className="mb-3">
                                This typically occurs when the <span className="font-medium">client marks the session as missed</span>, while the <span className="font-medium">consultant marks it as completed</span>.
                            </p>

                            <p className="mb-3">
                                In such cases, the Administrator will carefully review both parties' notes and may take the following steps:
                            </p>

                            <ul className="list-disc list-inside mb-3 space-y-1">
                                <li className="text-[.9rem]">Review the client’s comments and feedback.</li>
                                <li className="text-[.9rem]">Request supporting evidence from the consultant (e.g., meeting link, screenshots).</li>
                                <li className="text-[.9rem]">Reach out to both parties via email for clarification if needed.</li>
                            </ul>

                            <p className="mb-3">
                                Based on the information provided, the Administrator will make a fair decision to:
                            </p>

                            <ul className="list-disc list-inside mb-3 space-y-1">
                                <li className="text-[.9rem]">Issue a refund to the client, or</li>
                                <li className="text-[.9rem]">Credit the consultant for the session.</li>
                                <li className="text-[.9rem]">Or fairly split the difference.</li>
                            </ul>

                            <p>
                                Please ensure that all communication and notes are clear to support a fair and transparent resolution process.
                            </p>
                        </div>

                    </div>
                </div>
            }

            {
                displayType == 'reschedule' &&
                <div>
                    <div>
                        <h2 className="title-3">Reschedule Details</h2>
                        <p className="color-grey-text text-[.8rem]">Reschedule the consultancy session request from <span className="color-darker font-bold">Favi Ayomide</span></p>
                    </div>

                    <div className="booking-sect">
                        <h2 className="title-3">Available sessions</h2>
                        <p>Book 1:1 sessions from the options based on your needs</p>
                    </div>

                    <div className="booking-sect">
                        <p>Send a personal message to <span className="font-semibold">Favi Ayomide</span></p>
                        <textarea name="" id="" className="textarea mt-2"></textarea>
                    </div>

                    <div className="flex items-end justify-end">
                        <button className="bt-btn btn btn-primary-fill">
                            Boook Now
                        </button>
                    </div>
                </div>
            }

            {
                displayType == 'cancel' &&
                <div>
                    <div>
                        <h2 className="title-3">Cancel Booking</h2>
                        <p className="color-grey-text text-[.8rem]">Refund on canceled booking takes 3-5 working days.</p>
                    </div>

                    <div className="booking-sect">
                        <p>Cancel mentorship session with <span className="color-darker font-bold">{`${bookingInfo?.consultant?.instructor?.user?.first_name} ${bookingInfo?.consultant?.instructor?.user?.last_name}`}</span>, slated for:</p>
                    </div>
                    
                    <div className="flex items-center gap-3 border-b border-[#C8CCD0] pb-3">
                        <div className="flex items-start gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/calendar-add.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p>{bookingInfo?.date_string}</p>
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
                            <p>{bookingInfo?.user_time} - {bookingInfo?.user_end_time}</p>
                        </div>
                    </div>

                    <div className="booking-sect">
                        <p>Kindly add a reason for cancelling this Session</p>
                        <textarea name="cancel_note" id="" className="textarea mt-2" value={cancelNote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCancelNote(e.target.value)}></textarea>
                    </div>

                    <div className="flex items-end justify-end">
                        <button className="bt-btn btn error two" onClick={cancelSessionUser}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Cancelling . . ." />

                                ) : (
                                    'Cancel Booking'
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                displayType == 'cancel-consultant' &&
                <div>
                    <div>
                        <h2 className="title-3">Cancel Booking</h2>
                        <p className="color-grey-text text-[.8rem]">Refund on canceled booking takes 3-5 working days.</p>
                    </div>

                    <div className="booking-sect">
                        <p>Cancel mentorship session with <span className="color-darker font-bold">{`${bookingInfo?.user?.first_name} ${bookingInfo?.user?.last_name}`}</span>, slated for:</p>
                    </div>
                    
                    <div className="flex items-center gap-3 border-b border-[#C8CCD0] pb-3">
                        <div className="flex items-start gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/calendar-add.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p>{bookingInfo?.date_string}</p>
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
                            <p>{bookingInfo?.user_time} - {bookingInfo?.user_end_time}</p>
                        </div>
                    </div>

                    <div className="booking-sect">
                        <p>Kindly add a reason for cancelling this Session</p>
                        <textarea name="cancel_note" id="" className="textarea mt-2" value={cancelNote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCancelNote(e.target.value)}></textarea>
                    </div>

                    <div className="flex items-end justify-end">
                        <button className="bt-btn btn error two" onClick={cancelSessionConsultant}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Cancelling . . ." />

                                ) : (
                                    'Cancel Booking'
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                displayType == 'cancel-admin' &&
                <div>
                    <div>
                        <h2 className="title-3">Cancel Booking</h2>
                    </div>

                    <div className="booking-sect">
                        <p>Cancel mentorship session between <span className="color-darker font-bold">{`${booking?.consultant?.instructor?.user?.first_name} ${booking?.consultant?.instructor?.user?.last_name}`}</span> and <span className="color-darker font-bold">{booking?.user?.first_name} {booking?.user?.last_name}</span>, slated for:</p>
                    </div>
                    
                    <div className="flex items-center gap-3 border-b border-[#C8CCD0] pb-3">
                        <div className="flex items-start gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/calendar-add.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p>{bookingInfo?.date_string}</p>
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
                            <p>{bookingInfo?.user_time} - {bookingInfo?.user_end_time}</p>
                        </div>
                    </div>

                    <div className="booking-sect">
                        <p>Kindly add a reason for cancelling this Session</p>
                        <textarea name="cancel_note" id="" className="textarea mt-2" value={cancelNote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCancelNote(e.target.value)}></textarea>
                    </div>

                    <div className="flex items-end justify-end">
                        <button className="bt-btn btn error two" onClick={cancelSessionAdmin}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Cancelling . . ." />

                                ) : (
                                    'Cancel Booking'
                                )
                            }
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookingDetails