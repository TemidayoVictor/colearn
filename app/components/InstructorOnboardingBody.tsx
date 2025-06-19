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

const InstructorOnboardingBody = () => {
    const checkAuth = useAuth();

    const user = authStore((state) => state.user);
    const profileProgress = user?.profile_progress;

    
    const [loading, setLoading] = useState<boolean>(true);
    
    const {
        logoutHook
    } = useLogout();

    const {
        formData,
        formData2,
        errors2,
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
        categories,
        handleInputChange,
        handleInputChange2,
        submitProfessionalDetails,
        experiences,
        handleExperienceChange,
        addExperience,
        submitExperiences,
        removeExperience,
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
                        <h2 className="title-3">Professional Information</h2>
                        <div className="mt-3">
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Title<span className="text-red-500">*</span></label>
                                <select name="title" className={`input-field ${errors2.title ? 'error' : ''}`} value={formData2.title} onChange={handleInputChange2}>
                                    <option value="">Select one</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Ms">Ms.</option>
                                    <option value="Dr">Dr.</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Professional Headline<span className="text-red-500">*</span></label>
                                <input name="headline" className={`input-field ${errors2.headline ? 'error' : ''}`} placeholder="Software Engineer, Copywriter, . . ." value={formData2.headline} onChange={handleInputChange2}/>
                            </div>

                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Select Category<span className="text-red-500">*</span></label>
                                <select name="category" className={`input-field ${errors2.category ? 'error' : ''}`} value={formData2.category} onChange={handleInputChange2}>
                                    <option value="">Select one</option>
                                    {
                                        Array.isArray(categories) && categories.map((category) => (
                                            <option key={category.id} value={category.slug}>
                                                {category.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="description" className="font-semibold">Bio <span className="text-red-500">*</span></label>
                                <textarea
                                    name="bio"
                                    className={`textarea ${errors2.bio ? 'error' : ''}`}
                                    placeholder="Let us get to meet you."
                                    value={formData2.bio}
                                    onChange={handleInputChange2}
                                />
                            </div>
                            <p className="font-semibold my-4">Add Social Media Accounts (Optional)</p>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">LinkedIn URL</label>
                                <input name="linkedin" className={`input-field`} value={formData2.linkedin} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">YouTube URL</label>
                                <input name="youtube" className={`input-field`} value={formData2.youtube} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">X URL</label>
                                <input name="twitter" className={`input-field`} value={formData2.twitter} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Personal Website</label>
                                <input name="website" className={`input-field`} value={formData2.website} onChange={handleInputChange2}/>
                            </div>
                        </div>
                    </div>
                </div>
            );

            case '3':
            return (
            <div className="auth-con three three-b">
                <div className="mt-[1rem]">
                    <div className="flex items-end justify-end">
                        <p className="text-[.8rem] color-grey-text">Step {profileProgress} of 4 </p>
                    </div>
                    <h2 className="title-3">Share your Experience with us</h2>
                    {
                        experiences.map((exp, index) => (
                            <div key={index} className="exp">
                                <div className="input-box">
                                    <label htmlFor="title" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                    <input
                                        name="title"
                                        className={`input-field`}
                                        placeholder="e.g. Senior Developer"
                                        value={exp.title}
                                        onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                    />
                                </div>
        
                                <div className="input-box">
                                    <label htmlFor="organization" className="font-semibold">Organization <span className="text-red-500">*</span></label>
                                    <input
                                        name="organization"
                                        className={`input-field`}
                                        placeholder="e.g. Google, Udemy"
                                        value={exp.organization}
                                        onChange={(e) => handleExperienceChange(index, 'organization', e.target.value)}
                                    />
                                </div>
        
                                <div className="input-box">
                                    <label htmlFor="description" className="font-semibold">Description <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="description"
                                        className={`textarea`}
                                        placeholder="Briefly describe your role..."
                                        value={exp.description}
                                        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                    />
                                </div>
        
                                <div className="auth-flex">
                                    <div className="input-flex-item">
                                    <label htmlFor="start_date" className="font-semibold">Start Date</label>
                                    <input
                                        type="date"
                                        name="start_date"
                                        className={`input-field`}
                                        value={exp.start_date}
                                        onChange={(e) => handleExperienceChange(index, 'start_date', e.target.value)}
                                    />
                                    </div>
        
                                    <div className="input-flex-item">
                                        <label htmlFor="end_date" className="font-semibold">End Date</label>
                                        <input
                                            type="date"
                                            name="end_date"
                                            className={`input-field`}
                                            value={exp.end_date}
                                            onChange={(e) => handleExperienceChange(index, 'end_date', e.target.value)}
                                            disabled={exp.currently_working}
                                        />
                                    </div>
                                </div>
        
                                <div className="mt-3">
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="currently_working"
                                        checked={exp.currently_working}
                                        onChange={(e) => handleExperienceChange(index, 'currently_working', e.target.checked) }
                                    />
                                    I’m currently working in this role
                                    </label>
                                </div>

                                <div className="mt-3">
                                {
                                    experiences.length > 1 && (
                                        <div className="flex items-end justify-end">
                                            <button
                                                type="button"
                                                className="text-[.9rem] text-red-500 underline"
                                                onClick={() => removeExperience(index)}
                                            >

                                            Remove
                                            </button>
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        ))
                    }

                    <button className="btn normal mt-4" onClick={addExperience}>+ Add Experience</button>
                </div>
            </div>
 
            )

            case '4': 
            return (
                <div className="auth-con three three-b">
                    <div className="mt-[1rem]">
                        <div className="flex items-end justify-end">
                            <p className="text-[.8rem] color-grey-text">Step {profileProgress} of 4 </p>
                        </div>
                        <h2 className="title-3">To enhance your visibility, please select the disciplines that align with your area of expertise.</h2>
                        <div className="mt-3">
                            <SubjectSelector onChange={handleSubjectChange} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
                        </div>
                    </div>
                </div>
            )

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
                            <p className="bod">Kindly upload a clearer picture, this gives your application a higher chance of being successful.</p>
                        </div>
                        
                        <div className="mt-4">
                            <div className="input-box" >
                                <label htmlFor="" className="font-semibold">What gender do you identify as? <span className="text-red-500">*</span></label>
                                <select name="gender" className={`input-field ${errors.gender ? 'error' : ''}`} value={formData.gender} onChange={handleInputChange}>
                                    <option value="">Select one</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Rather Not Say</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">What languages do you speak? <span className="text-red-500">*</span></label>
                                <MultiDropdownSelector
                                    options={languages}
                                    selected={selectedItems}
                                    setSelected={setSelectedItems}
                                />
                            </div>

                            <div className="input-box">
                                <label htmlFor="country" className="font-semibold">Which country are you from? <span className="text-red-500">*</span></label>
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
                                <label htmlFor="" className="font-semibold">Phone number <span className="text-red-500">*</span></label>
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
                <button className="bt-btn btn btn-primary-fill" onClick={submitProfessionalDetails}>
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
            
            case '3':
            return (
                <button className="bt-btn btn btn-primary-fill" onClick={submitExperiences}>
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

            case '4':
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

export default InstructorOnboardingBody
