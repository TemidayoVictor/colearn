'use client';
import React , { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants  } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { forgot_password, verify_reset_code, reset_password } from "@/services/auth";
import ButtonLoader from "@/app/components/buttonLoader";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string> ('');
    const [showPassword, setShowPassword] = useState <boolean | null> (false);
    const [step, setStep] = useState<number> (1);
    const [direction, setDirection] = useState<number> (1);
    const [hasMounted, setHasMounted] = useState<boolean | null> (false);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const inputLength = 6;
    const [otp, setOtp] = useState<string[]>(Array(inputLength).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

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
        setDirection(direction != -1 ? direction + 1 : 1);
        setStep(step + 1);
    };

    const back = () => {
        setDirection(-1);
        setStep(step + 1);
    };

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

    const sendOtp = async () => {
        if (!email) {
            showErrorToast('Please enter your email');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await forgot_password({ email });
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                next();
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

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
                {
                    step === 1 && (
                        <>
                            <h2 className="title-2">Password Recovery</h2>
                            <p className="text-[.8rem] mt-2 color-grey-text font-medium">Enter your registered email to proceed</p>
                        </>
                    )
                }

                {
                    step === 2 && (
                        <>
                            <h2 className="title-2">Enter the 6 digit code sent to you at favi*********@gmail.com</h2>
                        </>
                    )
                }

                {
                    step === 3 && (
                        <>
                            <h2 className="title-2">Set New Password</h2>
                        </>
                    )
                }

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
                                <div className="input-box">
                                    <label className="font-bold text-[.9em]">Email</label>
                                    <input 
                                        type="email" 
                                        className="input-field" 
                                        placeholder="linda@framcreative.com" 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
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
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
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
                                {/* <div className="flex items-center justify-start text-[.9em] color-normal cursor-pointer mt-4" onClick={back}>
                                    <p className="font-semibold">Back</p>
                                </div> */}
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step3"
                                custom={direction}
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                            
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/padlock.png"
                                        alt="Facebook Logo"
                                        width={158}
                                        height={158}
                                        className="object-cover"
                                    /> 
                                    <h2 className="font-semibold text-[1.2rem]">Password updated</h2>
                                    <p className="color-grey-text text-[.8rem]">Your have successfully set new password</p>
                                </div>    
                            
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                <div>
                
                    <div>
                        {
                            buttonLoader ? (
                                <ButtonLoader content='Please wait . . . '/>
                            ) : (
                                <>
                                    {
                                        step === 1 &&
                                        <button className="bt-btn two btn btn-primary-fill" onClick={sendOtp}>
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
                                    }
        
                                    {
                                        step === 2 &&
                                        <button className="bt-btn two btn btn-primary-fill" onClick={next}>
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
                                    }
        
                                    {
                                        step === 3 &&
                                        <button className="bt-btn two btn btn-primary-fill" onClick={next}>
                                            <span>Create New Password</span>
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
                                    }
        
                                    {
                                        step === 4 &&
                                        <Link href="login" className="bt-btn two btn btn-primary-fill">
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
                                        </Link>
                                    }
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword