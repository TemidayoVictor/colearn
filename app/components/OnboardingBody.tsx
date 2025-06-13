import React, {useState, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "@/hooks/useLogout";

const OnboardingBody = () => {
    const {
        logoutHook
    } = useLogout();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

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
                    
                    <div>
                        <h2 className="title-2">Enter the 6 digit code sent to you at favi*********@gmail.com</h2>
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
                    </div>

                    <div className="auth-con three">
                        <h2 className="title-2">Welcome to <span className="color-fill">CoLearn!</span> What brings you to our community</h2>
                        <div className="mt-[1em] mb-[1.5em]">
                            <div className={`onboarding-select cursor-pointer ${selected == 'student' ? 'active' : ''}`} onClick={() => handleSelect('student')}>
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

                            <div className={`onboarding-select cursor-pointer ${selected == 'instructor' ? 'active' : ''}`}  onClick={() => handleSelect('instructor')}>
                                <div className="custom-checkbox-wrapper w-[10%]">
                                <input 
                                    type="checkbox" 
                                    className="custom-checkbox" 
                                    checked={selected === 'instructor'}
                                    onChange={() => handleSelect('student')}
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

                            <div className="res-flex justify-between mt-[1.5rem]">
                                <Link href='/' className="bt-btn btn btn-primary-fill">
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
                                </Link>
                                
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