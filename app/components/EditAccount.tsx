'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useOnboarding } from "@/hooks/useOnboarding";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import MultiDropdownSelector from "./MultiDropdownSelector";
import { Options } from "../Types/types";
import ButtonLoader from "./buttonLoader";

const EditAccount = () => {
    const {
        buttonLoader,
        handleClick,
        preview,
        fileInputRef,
        handleFileChange,
        errors,
        formData,
        languages,
        selectedItems,
        setSelectedItems,
        countries,
        dialCode,
        handleInputChange,
        handleCountryChange,
        setFormData,
        editDetails,
    } = useOnboarding();

    const user = authStore((state) => state.user);
    const student = authStore((state) => state.student);
    const instructor = authStore((state) => state.instructor);

    const userType = user?.type === 'student' ? student : instructor;

    const rawLanguages = userType?.languages;

    // Parse if it's a string
    const parsedLanguages = typeof rawLanguages === 'string'
    ? JSON.parse(rawLanguages)
    : rawLanguages;

    // Now convert to array of { id, name }
    const languageOptions: Options[] = Array.isArray(parsedLanguages)
    ? parsedLanguages.map((lang: string, index: number) => ({
        id: index + 1,
        name: lang,
        }))
    : [];

    useEffect(() => {
        setFormData({
            gender: userType?.gender || "",
            country: userType?.country?.toUpperCase() || "",
            phone: userType?.phone || "",
            country_phone_code: user?.country_phone_code || 0,
            country_iso: user?.country_iso || "",
            country_iso3: user?.country_iso3 || "",
            profilePhoto: null,
        });

    }, [user, student, instructor]); 

    return (
        <div>
            <p className="font-nomral text-[.9rem] mt-3">Update Profile Picture <span className="text-red-500">*</span></p>
            <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                <div>
                    <Image
                        aria-hidden
                        src={preview || "/assets/images/upload-img.png"}
                        alt="Colearn Logo"
                        width={64}
                        height={64}
                        className="object-contain rounded-[50%] update-pro"
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
                <p className="bod">You can change your profile picture here.</p>
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
                        initial={languageOptions}
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
                        <span className="input-field">+ {dialCode == null ? formData.country_phone_code : dialCode}</span>
                        <input name="phone" className={`input-field flex-1 ${errors.phone ? 'error' : ''}`} placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editDetails}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Update</span>
                            </div>                                        
                        )
                    }
                </button>
            </div>
        </div>
    )
}

export default EditAccount