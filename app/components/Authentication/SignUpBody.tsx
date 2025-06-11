'use client';
import React , { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants  } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "@/utils/api";
import { useSignUpForm } from "@/hooks/useSignupForm";

const SignUpBody = () => {
    const {
        showPassword,
        step,
        hasMounted,
        setHasMounted,
        direction,
        togglePassword,
        slideVariants,
        back, 
        formData,
        errors, 
        handleChange, 
        handlePreSubmit, 
        handleSubmit
    } = useSignUpForm();

    const hasSpecialChar = /[^A-Za-z0-9]/.test(formData.password);
    const hasNumber = /[0-9]/.test(formData.password);
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasLowercase = /[a-z]/.test(formData.password);
    const hasMinLength = formData.password.length >= 8;

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
                <div className="my-[1em] relative overflow-hidden">
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
                                <input type="text" className={`input-field ${errors.firstName ? 'error' : ''}`} placeholder="First Name" name="firstName"  value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className="input-flex-item">
                                <label className="font-bold text-[.9em]">Last Name</label>
                                <input type="text" className={`input-field ${errors.lastName ? 'error' : ''}`} placeholder="Last Name" name="lastName"  value={formData.lastName} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="input-box">
                            <label className="font-bold text-[.9em]">Email</label>
                            <input type="email" className={`input-field ${errors.email ? 'error' : ''}`} name="email"  value={formData.email} onChange={handleChange} placeholder="linda@framcreative.com" />
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
                                name="password"
                                className={`input-field ${errors.password ? 'error' : ''}`}
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
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
                        {
                            errors.password &&
                            <small className="color-error mt-2">Kindly Use a Strong Password</small>
                        }
                        <div className="input-box">
                            <label className="font-bold text-[.9em]">Confirm Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                className={`input-field ${errors.confirmPassword ? 'error' : ''}`}
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {
                                errors.confirmPassword &&
                                <small className="color-error">Password Does Not Match</small>
                            }
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

                                <button className="bt-btn two btn btn-primary-fill" onClick={handlePreSubmit}>
                                    <span>Proceed</span>
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

                                <button className="bt-btn two btn btn-primary-fill" onClick={handleSubmit}>
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
                        <p className="text-[.9rem] font-semibold">Have an account? <span> <Link href='login' className="color-normal">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUpBody