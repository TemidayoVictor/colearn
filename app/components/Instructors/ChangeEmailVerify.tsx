'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useSettings } from "@/hooks/useSettings";
import { genralStore } from "@/zustand/generalStore";
import ButtonLoader from "../buttonLoader";

const ChangeEmailVerify = () => {
    const {
        step,
        handleChange,
        inputsRef,
        otp,
        handleKeyDown,
        setStep,
        verifyEmailCode,
        maskEmail,
        resend,
        buttonLoader,
    } = useSettings();

    const newEmail = genralStore((state) => state.newEmail)

    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        let countdown: NodeJS.Timeout;
    
        if (step === 1 && timer > 0) {
            countdown = setTimeout(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }
    
        return () => clearTimeout(countdown);
    }, [step, timer]);
    
    return (
        <div className="mt-4">
            {
                step === 1 &&
                <div>
                    <h2 className="title-2">Enter the 6 digit code sent to you at {maskEmail(newEmail)}</h2>
                    <div className="flex justify-between mt-4">
                        {otp.map((digit, idx) => (
                            <input
                            key={idx}
                            ref={(el) => {inputsRef.current[idx] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            className="w-10 h-10 text-center text-xl border border-gray-300 rounded-md focus:border-2 focus:border-black"
                            />
                        ))}
                    </div>

                    <div className="mt-4">
                        <p className="text-[.8rem] color-grey-text">
                            Didn’t get Code?{" "}
                            <span
                                onClick={canResend ? resend : undefined}
                                className={`font-semibold ${
                                    canResend ? "text-blue-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                Resend code
                            </span>{" "}
                            {!canResend && (
                                <span className="font-bold text-black">
                                    ({Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")})
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="upload-course-btns">
                        <button className="btn normal">Cancel</button>

                        <button className="flex items-center gap-2 btn btn-primary-fill" onClick={verifyEmailCode}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Please wait. . ." />
                                ) : (
                                    <span>Verify</span>
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                step === 2 &&
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/success-mail-3.png"
                            alt="Colearn Logo"
                            width={240}
                            height={240}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="title-3">Email Updated</h2>
                        <p className="color-grey-text text-[.8rem]">Your have successfully updated your email</p>
                    </div>
                    <button className="btn btn-normal-fill w-full" onClick={() => setStep(3)}>
                        <span>Dismiss</span>
                    </button>
                </div>
            }

            {
                step === 3 &&
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/cancel-big.png"
                            alt="Colearn Logo"
                            width={240}
                            height={240}
                            className="object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="title-3">Email update failed!!</h2>
                        <p className="color-grey-text text-[.8rem]">Email update failed, Try Again.</p>
                    </div>
                    <div className="upload-course-btns w-full">
                        <button className="btn normal">Dismiss</button>

                        <button className="flex items-center gap-2 btn btn-normal-fill">
                            <span>Try Again</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ChangeEmailVerify