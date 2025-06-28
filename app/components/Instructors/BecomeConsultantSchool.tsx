import React from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { authStore } from "@/zustand/authStore";
import { useConsultant } from "@/hooks/useConsultant";
import { degreeOptions } from "@/data/subjects";

const BecomeConsultantSchool = () => {
    const user = authStore((state) => state.user);

    const {
        buttonLoader,
        schoolData,
        addSchool,
        removeSchool,
        handleSchoolChange,
        submitSchools,
    } = useConsultant();

    return (
        <div>
            <div className="upload-course-form">
                <h2 className="title-3">Hello, {`${user?.first_name} ${user?.last_name}`}. Ready to be a Consultant?</h2>
                <p className="text-[.8rem] color-grey-text">Upgrade  your profile by providing your educational background information.</p>
                {
                    schoolData.map((item, index) => (
                        <div className="upload-course-body" key={index}>
                            <div className="input-box">
                                <label htmlFor="title" className="font-semibold">Name of School <span className="text-red-500">*</span></label>
                                <input
                                    name="name"
                                    className={`input-field`}
                                    placeholder="e.g. Oxford"
                                    value={item.name}
                                    onChange={(e) => handleSchoolChange(index, 'name', e.target.value)}
                                />
                            </div>
        
                            <div className="input-box">
                                <label htmlFor="title" className="font-semibold">Degree<span className="text-red-500">*</span></label>
                                <select name="degree" id="" className={`input-field`} value={item.degree} onChange={(e) => handleSchoolChange(index, 'degree', e.target.value)}>
                                    <option value="">Select one</option>
                                    {
                                        degreeOptions.map((degree, index) => (
                                            <option key={index} value={degree}>
                                                {degree}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            
                            <div className="input-box">
                                <label htmlFor="title" className="font-semibold">Field of Study <span className="text-red-500">*</span></label>
                                <input
                                    name="field_of_study"
                                    className={`input-field`}
                                    placeholder="e.g. Software Engineering"
                                    value={item.field_of_study}
                                    onChange={(e) => handleSchoolChange(index, 'field_of_study', e.target.value)}
                                />
                            </div>
        
                            <div className="auth-flex">
                                <div className="input-flex-item">
                                    <label htmlFor="start_year" className="font-semibold">Start Year <span className="text-red-500">*</span></label>
                                    <input
                                        type="number"
                                        name="start_year"
                                        className="input-field"
                                        min="1900"
                                        max={new Date().getFullYear()}
                                        placeholder="e.g. 2010"
                                        value={item.start_year}
                                        onChange={(e) => handleSchoolChange(index, 'start_year', e.target.value)}
                                        onInput={(e) => {
                                            if (e.currentTarget.value.length > 4) {
                                                e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                        }}}
                                    />
                                </div>
        
                                <div className="input-flex-item">
                                    <label htmlFor="end_year" className="font-semibold">End Year <span className="text-red-500">*</span></label>
                                    <input
                                        type="number"
                                        name="end_year"
                                        className="input-field"
                                        min="1900"
                                        max="2099"
                                        placeholder="e.g. 2022"
                                        value={item.end_year}
                                        onChange={(e) => handleSchoolChange(index, 'end_year', e.target.value)}
                                        onInput={(e) => {
                                            if (e.currentTarget.value.length > 4) {
                                                e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                        }}}
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                            {
                                schoolData.length > 1 && (
                                    <div className="flex items-end justify-end">
                                        <button
                                            type="button"
                                            className="text-[.9rem] text-red-500 underline"
                                            onClick={() => removeSchool(index)}
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

                <div className="mb-4">
                    <div>
                        <p className="text-[.9rem] font-bold">Add Other School</p>
                        <p className="text-[.8rem] color-grey-text">We recommend adding other educational information. They’ll also appear in your profile section.</p>
                    </div>
                    <button className="btn normal mt-2" onClick={addSchool}>+ Add Education</button>

                </div>

                <button className="btn btn-primary-fill full" onClick={submitSchools}>
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
            </div>
        </div>
    )
}

export default BecomeConsultantSchool