'use client';
import React, {useState, useEffect, useRef} from "react";
import { useConsultant } from "@/hooks/useConsultant";
import { genralStore } from "@/zustand/generalStore";
import { consultantStore } from "@/zustand/consultantStore";
import ButtonLoader from "./buttonLoader";
import Image from "next/image";


const BookingApprove = () => {
    const {
        approveBooking, 
        handleApproveChange,
        buttonLoader,
        approveSession,
        approveErrors,
        setApproveBooking,
    } = useConsultant();

    const booking = genralStore((state) => state.booking);

    useEffect(() => {
        const init = async () => {
            setApproveBooking({
                id: booking?.id || "",
                channel: booking?.channel  || "",
                link: booking?.booking_link || "",
                note: booking?.consultant_note || "",
                type: 'approved',
            });
        };

        init();

    }, []);

    return (
        <div>
            <h2 className="title-3 mb-4">Approve Session</h2>
                <div>
                    <p className="alert notification mb-4 text-[.9rem] color-grey-text">To approve this session, please schedule a meeting using a preferred platform such as Google Meet, Zoom, or Microsoft Teams, and include the meeting link in the form provided.</p>
                
                    <div className="mb-4">
                        <label className="block mb-1 text-[.9rem] font-bold">Select Platform</label>
                        <select
                            value={approveBooking.channel}
                            onChange={handleApproveChange}
                            className={`w-full input-field ${approveErrors.channel ? 'error' : ''}`}
                            name="channel"
                        >
                            <option value="" disabled>Select Platform</option>
                            <option value="Google Meet">Google Meet</option>
                            <option value="Zoom">Zoom</option>
                            <option value="Teams">Microsoft Teams</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-[.9rem] font-bold">Add Meeting Link</label>
                        <input 
                            value={approveBooking.link}
                            onChange={handleApproveChange}
                            className={`w-full input-field ${approveErrors.link ? 'error' : ''}`}
                            name="link"
                        />
                    </div>

                    <div className="mb-4">
                        <h3 className="block mb-1 text-[.9rem] font-bold">Add Consultation Note (Optional)</h3>
                        <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={approveBooking.note} onChange={handleApproveChange}></textarea>
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={approveSession}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Approve Session</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
        </div>
    )
}

export default BookingApprove