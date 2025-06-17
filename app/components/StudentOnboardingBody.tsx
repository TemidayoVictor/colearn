'use client';
import React, {useState, useRef, useEffect, use} from "react";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "@/hooks/useLogout";
import { useAuth } from "@/hooks/useAuth";
import Loader from "./Loader";
import { authStore } from "@/zustand/authStore";
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { useOnboarding } from "@/hooks/useOnboarding";
import ButtonLoader from "./buttonLoader";
import MultiDropdownSelector from "./MultiDropdownSelector";
import SubjectSelector from "./SubjectSelector";

const StudentOnboardingBody = () => {
    const checkAuth = useAuth();

    const user = authStore((state) => state.user);
    const student = authStore((state) => state.student);
    const profileProgress = user?.profile_progress;

    
    const [loading, setLoading] = useState<boolean>(true);
    
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const {
        logoutHook
    } = useLogout();

    const {
        handleInputChange,
        formData,
        submitDetails,
        errors,
        buttonLoader,
        newUpdate,
        setNewUpdate,
        submitUser,
        handleSubjectChange,
        handleClick,
        handleFileChange,
        preview,
        fileInputRef,
        countries,
        dialCode,
        handleCountryChange,
        languages,
    } = useOnboarding()

    const renderContent = () => {
        switch(profileProgress) {
            case '2':
            return (
                <div className="auth-con three">
                    <div className="mt-[1rem]">
                        <h2 className="title-3">To help us personalise your experience with us, What subjects are you interested in?</h2>
                        <div className="mt-3">
                            <SubjectSelector onChange={handleSubjectChange}/>
                        </div>
                    </div>
                </div>
            );

            default:
            return (
                <div className="auth-con three">
                    <div className="mt-[1rem]">
                        <h2 className="title-3">Welcome, {`${ user?.first_name } ${user?.last_name}`}. Let's set you up and get you ready!</h2>
                        <p className="font-nomral text-[.9rem] mt-3">Update Profile Picture <span className="text-red-500">*</span></p>
                        <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                            <div>
                                <Image
                                    aria-hidden
                                    src={preview || "/assets/images/upload-img.png"}
                                    alt="Colearn Logo"
                                    width={64}
                                    height={64}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <div>
                                <p className="text-[.9rem] color-normal">Select an image</p>
                                <p className="text-[.7rem] mt-1 color-grey-text">Make sure the file is below 2mb</p>
                            </div>
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        <div className="alert notification">
                            <p className="bod">Kindly upload  a clear picture, this picture might probably be used on your certifications.</p>
                        </div>
                        
                        <div className="mt-4">
                            <div className="input-box">
                                <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                <select name="gender" className={`input-field ${errors.gender ? 'error' : ''}`} value={formData.gender} onChange={handleInputChange}>
                                    <option value="">Select one</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Rather Not Say</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="">What languages do you speak? <span className="text-red-500">*</span></label>
                                <MultiDropdownSelector
                                    options={languages}
                                    selected={selectedItems}
                                    setSelected={setSelectedItems}
                                />
                            </div>

                            <div className="input-box">
                                <label htmlFor="country">Which country are you from? <span className="text-red-500">*</span></label>
                                <select name="country" className={`input-field ${errors.country ? 'error' : ''}`} value={formData.country} onChange={handleCountryChange}>
                                    <option value="">Select one</option>
                                    {
                                        Array.isArray(countries) && countries.map((country) => (
                                            <option key={country.iso} value={country.name}>
                                                {country.nicename}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="">Phone number <span className="text-red-500">*</span></label>
                                <div className="flex items-center gap-2">
                                    <span className="input-field">+ {dialCode}</span>
                                    <input name="phone" className={`input-field flex-1 ${errors.phone ? 'error' : ''}`} placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange}/>
                                </div>
                            </div>
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
                <button className="bt-btn btn btn-primary-fill" onClick={submitDetails}>
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
            );

            case user?.email_verified_at != null && user?.type != "Inactive":
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={submitDetails}>
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

            default:
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={submitDetails}>
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

                <div className="auth-right three">
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

export default StudentOnboardingBody
