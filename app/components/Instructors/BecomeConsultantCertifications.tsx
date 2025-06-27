'use client';
import React, {useState} from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";

const BecomeConsultantCertifications = () => {
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    return (
        <div>
            <div className="upload-course-form">
                <div className="upload-course-body">
                    <h2 className="title-3">Add Professional License and Certification</h2>
                    <p className="text-[.8rem] color-grey-text">Upgrade  your profile by providing your educational background information.</p>
                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Certification Name <span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Certified UI / UX Designer"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Issuing Organization <span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Issuing Organization"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Date Issued <span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Date Issued"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Credential ID<span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Credential ID"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>

                </div>

                <div className="mb-4">
                    <div>
                        <p className="text-[.9rem] font-bold">Add License & Certification</p>
                        <p className="text-[.8rem] color-grey-text">We recommend adding more than one license & Certification. They’ll also appear in your profile section.</p>
                    </div>
                    <button className="btn normal mt-2">+ Add License & Certification</button>

                </div>

                <button className="btn btn-primary-fill full">
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

export default BecomeConsultantCertifications