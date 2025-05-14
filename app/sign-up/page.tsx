'use client';
import React , { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants  } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
    const [password, setPassword] = useState<string> ('');
    const [showPassword, setShowPassword] = useState <boolean | null> (false);
    const [step, setStep] = useState<number> (1);
    const [hasMounted, setHasMounted] = useState<boolean | null> (false);

    const togglePassword = () => setShowPassword(prev => !prev);

    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 8;

    const slideVariants: Variants = {
        initial: (direction: number) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0,
          position: 'absolute',
        }),
        animate: {
          x: 0,
          opacity: 1,
          position: 'relative',
          transition: { duration: 0.5 },
        },
        exit: (direction: number) => ({
          x: direction < 0 ? '100%' : '-100%',
          opacity: 0,
          position: 'absolute',
          transition: { duration: 0.5 },
        }),
      };

    const next = () => {
        setDirection(1);
        setStep(2);
    };

    const back = () => {
        setDirection(-1);
        setStep(1);
    };

    const [direction, setDirection] = useState(1);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
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
        <div className="auth-right">
            <div className="auth-con two">
                <h2 className="title-2">Create Account</h2>
                <div className="mt-[1em] mb-[1.5em] relative overflow-hidden">
                <AnimatePresence custom={direction} mode="sync">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial={hasMounted ? "initial" : false} // ❌ No animation on first load
                        animate="animate"
                        exit="exit"
                    >
                        <div className="auth-flex">
                            <div className="input-flex-item">
                                <label className="font-bold text-[.9em]">First Name</label>
                                <input type="text" className="input-field" placeholder="First Name" />
                            </div>
                            <div className="input-flex-item">
                                <label className="font-bold text-[.9em]">Last Name</label>
                                <input type="text" className="input-field" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="input-box">
                            <label className="font-bold text-[.9em]">Email</label>
                            <input type="email" className="input-field" placeholder="linda@framcreative.com" />
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        custom={direction}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="input-box relative">
                            <label className="font-bold text-[.9em]">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input-field"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-base w-4 h-4 text-[#96999c] absolute right-[5%] top-[60%]" onClick={togglePassword} />
                        </div>
                        <div className="pas-requirements">
                            <span className={hasSpecialChar ? 'success' : ''}>One Special Character</span>
                            <span className={hasNumber ? 'success' : ''}>One Number</span>
                            <span className={hasUppercase ? 'success' : ''}>One Uppercase</span>
                            <span className={hasMinLength ? 'success' : ''}>8 Character Min</span>
                            <span className={hasLowercase ? 'success' : ''}>One Lowercase Character</span>
                        </div>
                        <div className="input-box">
                            <label className="font-bold text-[.9em]">Confirm Password</label>
                            <input type="password" className="input-field" placeholder="Password" />
                        </div>
                        <div className="flex items-center justify-start text-[.9em] color-normal cursor-pointer mt-4" onClick={back}>
                            <p className="font-semibold">Back</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

                </div>

                <div>
                
                    <div>
                        {
                            step === 1 ? (

                                <button className="bt-btn two btn btn-primary-fill" onClick={next}>
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
                                </button>

                            ) : (

                                <button className="bt-btn two btn btn-primary-fill">
                                    <span>Create Account</span>
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
                                </button>

                            )
                        }
                    </div>

                    <div className="auth-bottom">
                        <p className="text-center text-[.9rem]">Or Continue with</p>

                        <div className="flex items-center justify-between mt-[1.5em]">
                            <div className="auth-bottom-cont">
                                <Image
                                    aria-hidden
                                    src="/assets/images/google.png"
                                    alt="Colearn Logo"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Google</p>
                            </div>
                            <div className="auth-bottom-cont">
                                <Image
                                    aria-hidden
                                    src="/assets/images/apple.png"
                                    alt="Colearn Logo"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Apple</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-[.9rem] font-semibold">Have an account? <span> <Link href='/login' className="color-normal">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp