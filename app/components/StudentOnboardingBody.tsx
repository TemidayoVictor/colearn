'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useLogout } from "@/hooks/useLogout";
import { useAuth } from "@/hooks/useAuth";
import Loader from "./Loader";
import { authStore } from "@/zustand/authStore";
import { useOnboarding } from "@/hooks/useOnboarding";
import ButtonLoader from "./buttonLoader";
import MultiDropdownSelector from "./MultiDropdownSelector";
import SubjectSelector from "./SubjectSelector";
import { useRouter } from "next/navigation";

const StudentOnboardingBody = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const student = authStore((state) => state.student);
    const profileProgress = user?.profile_progress;

    const {
        handleInputChange,
        formData,
        submitDetails,
        errors,
        buttonLoader,
        newUpdate,
        setNewUpdate,
        handleSubjectChange,
        handleClick,
        handleFileChange,
        preview,
        fileInputRef,
        countries,
        dialCode,
        handleCountryChange,
        languages,
        selectedItems,
        setSelectedItems,
        addPreferences,
        selectedSubjects, 
        setSelectedSubjects,
        loading, 
        setLoading,
        handleLogout,
    } = useOnboarding()

    const renderContent = () => {
        switch(profileProgress) {
            case '2':
            return (
                <div className="auth-con three three-b">
                    <div className="mt-[1rem]">
                        <div className="flex items-end justify-end">
                            <p className="text-[.8rem] color-grey-text">Step {profileProgress} of 4 </p>
                        </div>
                        <h2 className="title-3">To help personalise your experience with us, What subjects are you interested in?</h2>
                        <div className="mt-3">
                            <SubjectSelector onChange={handleSubjectChange} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
                        </div>
                    </div>
                </div>
            );

            default:
            return (
                <div className="auth-con three three-b">
                    <div className="mt-[1rem]">
                        <div className="flex items-end justify-end">
                            <p className="text-[.8rem] color-grey-text">Step {profileProgress} of 4 </p>
                        </div>
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
        switch(profileProgress) {
            case '2':
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={addPreferences}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please Wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Complete</span>
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
        const init = async () => {
            await useAuth(router); // ✅ valid usage
            setLoading(false);
            setNewUpdate("reset");
        };
        init();
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
                                
                                <button className="items-center gap-2 desktop-flex cursor-pointer" onClick={handleLogout}>
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
                                <button className="flex items-center gap-2" onClick={handleLogout}>
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
