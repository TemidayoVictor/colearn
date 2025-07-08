'use client';
import React from "react";
import { genralStore } from "@/zustand/generalStore";
import ButtonLoader from "./buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";

type BookingFeedbackProps = {
    type?: string;
}

const BookingFeedback = ({type}: BookingFeedbackProps) => {
    const {
        buttonLoader,
        markAsComplete, 
        markAsCompleteConsultant,
        markAsMissedUser,
        markAsMissedConsultant,
        feedbackNote, 
        setFeedbackNote
    } = useConsultant();
    const booking = genralStore((state) => state.booking);
    
    return (
        <div>
            {
                type === 'complete-user' &&
                <div>
                    <h2 className="title-3 mb-4">Complete Session</h2>
                    <div className="alert no notification success mb-2 text-[.9rem]">By confirming this session as completed, you acknowledge and authorize CoLearn to disburse payment to the Consultant.</div>
                    <div className="mb-4">
                        <h3 className="block mb-1 text-[.9rem] font-bold">Kindly add a feedback message regarding the session</h3>
                        <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={feedbackNote} onChange={(e) => setFeedbackNote(e.target.value)}></textarea>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={markAsComplete}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Complete Session</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type === 'complete-consultant' &&
                <div>
                    <h2 className="title-3 mb-4">Complete Session</h2>
                    <div className="alert no notification success mb-2 text-[.9rem]">Thank you for the session. Please note that funds will only be disbursed once the client has also marked the session as completed.</div>
                    <div className="mb-4">
                        <h3 className="block mb-1 text-[.9rem] font-bold">Kindly add a feedback message regarding the session</h3>
                        <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={feedbackNote} onChange={(e) => setFeedbackNote(e.target.value)}></textarea>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={markAsCompleteConsultant}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Complete Session</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type === 'missed_user' &&
                <div>
                    <h2 className="title-3 mb-4">Mark Session as missed</h2>
                    <div className="mb-4">
                        <h3 className="block mb-1 text-[.9rem] font-bold">Kindly add a reason why you want to mark this session as missed</h3>
                        <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={feedbackNote} onChange={(e) => setFeedbackNote(e.target.value)}></textarea>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn error tw w-full" onClick={markAsMissedUser}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Mark as missed</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type === 'missed_consultant' &&
                <div>
                    <h2 className="title-3 mb-4">Mark Session as missed</h2>
                    <div className="mb-4">
                        <h3 className="block mb-1 text-[.9rem] font-bold">Kindly add a reason why you want to mark this session as missed</h3>
                        <textarea name="note" id="" placeholder="Enter a description" className="textarea" value={feedbackNote} onChange={(e) => setFeedbackNote(e.target.value)}></textarea>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn error tw w-full" onClick={markAsMissedConsultant}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Mark as missed</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }
        </div>
    )
}

export default BookingFeedback