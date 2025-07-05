'use client';
import React, {useState, useEffect} from "react";
import { genralStore } from "@/zustand/generalStore";
import { Booking } from "../Types/types";
import { useConsultant } from "@/hooks/useConsultant";
import Image from "next/image";
import ButtonLoader from "./buttonLoader";

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

    return (
        <div className="booking-details">
            {
                displayType == 'details' &&
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
                                    src="/assets/images/avatars-4.png"
                                    alt="Colearn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p>Favi Ayomide</p>
                                <p className="booking-header two">Structural Engineer, Certified Structural Engineer Oxford.</p>
                            </div>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Location of Meeting</p>
                            <p className="booking-body">https://Colearn.org/meetlink.googlemeet</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Session Name</p>
                            <p className="booking-body">Consultant Session</p>
                        </div>

                        <div className="booking-sect">
                            <p className="booking-header">Your Note</p>
                            <p className="booking-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis est, non iusto voluptatibus accusantium quibusdam assumenda nemo dolorum commodi perferendis?</p>
                        </div>

                        <div className="booking-sect">
                            <p className="font-semibold text-[.8rem]">Created:  Jan 31st, 2025 WAT</p>
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
        </div>
    )
}

export default BookingDetails