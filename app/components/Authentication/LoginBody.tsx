'use client'
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useLogin from "@/hooks/useLogin";

const LoginBody = () => {
    const {
        loginData,
        errors,
        handleChange,
        handleLogin,
        buttonLoader,
    } = useLogin()
    const [showPassword, setShowPassword] = useState <boolean | null> (false);
    const togglePassword = () => setShowPassword(prev => !prev);
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
                <div className="auth-con">
                    <h2 className="title-2">Login</h2>
                    <div className="mt-[1em] mb-[1.5em]">
                        <div className="input-box">
                            <label htmlFor="" className="font-bold text-[.9em]">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                className={`input-field ${errors.email ? 'error' : ''}`} 
                                placeholder="linda@framcreative.com"/>
                        </div>

                        <div className="input-box relative">
                            <label htmlFor="" className="font-bold text-[.9em]">Password</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                className={`input-field ${errors.password ? 'error' : ''}`} 
                                placeholder="Password"/>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-base w-4 h-4 text-[#96999c] absolute right-[5%] top-[60%]" onClick={togglePassword}/>
                        </div>

                        <div className="flex items-end justify-end text-[.9em] color-normal">
                            <Link href='forgot-password' className="font-semibold">Forgot password?</Link>
                        </div>

                    </div>

                    <div>
                    
                        <div>
                            <button className="bt-btn two btn btn-primary-fill" onClick={handleLogin} disabled={buttonLoader}>  
                                {
                                    buttonLoader ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            <span>Authenticating...</span>
                                        </div>
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
                                            <span>Login</span>
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
                            <p className="text-[.9rem] font-semibold">Don't have an account? <span> <Link href='sign-up' className="color-normal"> Sign up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBody