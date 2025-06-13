'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
 
const Onboarding = () => {
    const {
        logoutHook
    } = useLogout();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
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

export default Onboarding