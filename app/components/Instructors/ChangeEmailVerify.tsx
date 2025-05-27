'use client';
import React, {useState, useRef} from "react";
import Image from "next/image";

const ChangeEmailVerify = () => {
    const [step, setStep] = useState<number>(1);
    const inputLength = 6;
    const [otp, setOtp] = useState<string[]>(Array(inputLength).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return; // Allow only digits
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    
        if (value && index < inputLength - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="mt-4">
            {
                step === 1 &&
                <div>
                    <h2 className="title-3 text-center mb-3">Enter the 6 digit code sent to you at favi*********@gmail.com</h2>
                    <div className="flex justify-between">
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
                        <p className="text-[.8rem] color-grey-text">Didn’t get Code? Resend code in <span className="font-bold text-black">(0:09)</span></p>
                    </div>

                    <div className="upload-course-btns">
                        <button className="btn normal">Cancel</button>

                        <button className="flex items-center gap-2 btn btn-normal-fill" onClick={() => setStep(2)}>
                            <span>Verify</span>
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