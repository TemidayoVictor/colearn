'use client';
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "@/hooks/useLogout";
import { useAuth } from "@/hooks/useAuth";
import Loader from "./Loader";
import { authStore } from "@/zustand/authStore";
import { useOnboarding } from "@/hooks/useOnboarding";
import ButtonLoader from "./buttonLoader";

const OnboardingBody = () => {
    const checkAuth = useAuth();
    const user = authStore((state) => state.user);
    const [loading, setLoading] = useState<boolean>(true);
    const {
        logoutHook
    } = useLogout();

    const {
        handleSelect,
        otp,
        handleChange,
        handleKeyDown,
        maskEmail,
        inputsRef,
        submitOtp,
        selected,
        buttonLoader,
        newUpdate,
        setNewUpdate,
        resendOtp,
        submitUser,
    } = useOnboarding()

    const renderContent = () => {
        switch(true) {
            case user?.email_verified_at == null:
            return (
                <div className="auth-con three">
                    <h2 className="title-3 mb-4">
                    Enter the 6 digit code sent to you at {maskEmail(user?.email || '--')}
                    </h2>
                    <div className="flex justify-between">
                        {otp.map((digit, idx) => (
                            <input
                            key={idx}
                            ref={(el) => {
                                inputsRef.current[idx] = el;
                            }}
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
                        <p className="text-[.8rem] color-grey-text">Didn’t get Code? <span className="color-normal underline font-bold mx-2 cursor-pointer" onClick={resendOtp}>Resend in (0:09)</span></p>
                    </div>
                </div>
            );

            case user?.email_verified_at != null && user?.type != "Inactive":
            return (
                <div className="auth-con three flex flex-col items-center">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/account-success.png"
                            alt="Colearn Logo"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="font-semibold text-[1.1em]">A warm welcome! We're thrilled to have you join us and excited for what lies ahead. 🤗</h2>
                        <p className="color-grey-text text-[.8rem] mt-3">Kindly set up your profile with just few steps.</p>
                    </div>
                </div>
            )

            default:
            return (
                <div className="auth-con three">
                    <h2 className="title-2">
                    Welcome to <span className="color-fill">CoLearn!</span> What brings you to our community
                    </h2>
                    <div className="mt-[1em]">
                    <div
                        className={`onboarding-select cursor-pointer ${selected == 'student' ? 'active' : ''}`}
                        onClick={() => handleSelect('student')}
                    >
                        <div className="custom-checkbox-wrapper w-[10%]">
                        <input
                            type="checkbox"
                            className="custom-checkbox"
                            checked={selected === 'student'}
                            onChange={() => handleSelect('student')}
                        />
                        </div>
                        <div className="w-[22%]">
                        <Image
                            aria-hidden
                            src="/assets/images/onboarding-1.png"
                            alt="Colearn Image"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                        </div>
                        <p className="w-[62%] font-semibold">Join the community as a Student</p>
                    </div>
        
                    <div
                        className={`onboarding-select cursor-pointer ${selected == 'instructor' ? 'active' : ''}`}
                        onClick={() => handleSelect('instructor')}
                    >
                        <div className="custom-checkbox-wrapper w-[10%]">
                        <input
                            type="checkbox"
                            className="custom-checkbox"
                            checked={selected === 'instructor'}
                            onChange={() => handleSelect('instructor')}
                        />
                        </div>
                        <div className="w-[22%]">
                        <Image
                            aria-hidden
                            src="/assets/images/onboarding-2.png"
                            alt="Colearn Image"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                        </div>
                        <p className="w-[62%] font-semibold">Join the community as a Consultant / Instructor</p>
                    </div>
                    </div>
                </div>
            ); 
        }
    }

    const renderButton = () => {
        switch(true) {
            case user?.email_verified_at == null:
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={submitOtp}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please Wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Verify Otp</span>
                                <span>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-contain"
                                    />
                                </span>
                            </div>                                        
                        )
                    }
                </button>
            );

            case user?.email_verified_at != null && user?.type != "Inactive":
            return (
                <Link href={`/onboarding/${user?.type}`} className="bt-btn btn btn-primary-fill">
                    
                    <div className="bt-btn two">
                        <span>Continue</span>
                        <span>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                        </span>
                    </div>                                            
                </Link>
            )

            default:
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={submitUser}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please Wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Continue</span>
                                <span>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-contain"
                                    />
                                </span>
                            </div>                                        
                        )
                    }
                </button>
            )
        }
    }

    useEffect(() => {
        checkAuth();
        setLoading(false);
        setNewUpdate('reset');
    }, [newUpdate]);

    if (loading) return <Loader />
    
    return (
        <div>
            <div className="auth">
                <div className="auth-left">
                    <div className="auth-left-img-cont relative">
                        <Image
                            aria-hidden
                            src="/assets/images/Sign up slider.png"
                            alt="Facebook Logo"
                            fill
                            className="hero-img two"
                        />
                    </div>
                </div>

                <div className="auth-right two">
                    <div className="flex items-center flex-col">
                        {
                            renderContent()
                        }
                        
                        <div className="base-btns">
                            <div className="res-flex justify-between mt-[1.5rem]">

                                {
                                    renderButton()
                                }
                                
                                <button className="items-center gap-2 desktop-flex cursor-pointer" onClick={logoutHook}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/logout.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="text-[.9rem] color-error">Log Out</p>
                                </button>
                            </div>

                            <div className="mobile-flex justify-end mt-4">
                                <button className="flex items-center gap-2" onClick={logoutHook}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/logout.png"
                                        alt="Colearn Image"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <p className="text-[.9rem] color-error">Log Out</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OnboardingBody
