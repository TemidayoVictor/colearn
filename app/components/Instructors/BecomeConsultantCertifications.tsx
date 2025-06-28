import React from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";

const BecomeConsultantCertifications = () => {
    const {
        buttonLoader,
        certData,
        handleCertChange,
        addCert,
        removeCert,
        fileInputRefs,
        handleImageClick,
        handleFileChange,
        submitCerts,
     } = useConsultant();

    return (
        <div>
            <div className="upload-course-form">
                <h2 className="title-3">Add Professional License and Certification</h2>
                <p className="text-[.8rem] color-grey-text">Upgrade  your profile by providing your certification and licenses.</p>
                {
                    certData.map((item, index) => (
                        <div className="upload-course-body" key={index}>
                            <div className="input-box">
                                <label htmlFor="name" className="font-semibold">Certification Name <span className="text-red-500">*</span></label>
                                <input
                                    name="name"
                                    className={`input-field`}
                                    placeholder="e.g. Certified UI / UX Designer"
                                    value={item.name}
                                    onChange={(e) => handleCertChange(index, 'name', e.target.value)}
                                />
                            </div>
        
                            <div className="input-box">
                                <label htmlFor="organization" className="font-semibold">Issuing Organization <span className="text-red-500">*</span></label>
                                <input
                                    name="organization"
                                    className={`input-field`}
                                    placeholder="e.g. Issuing Organization"
                                    value={item.organization}
                                    onChange={(e) => handleCertChange(index, 'organization', e.target.value)}
                                />
                            </div>

                            <div className="auth-flex">
                                <div className="input-flex-item">
                                    <label htmlFor="iss_date" className="font-semibold">Date Issued (optional)</label>
                                    <input
                                        type="date"
                                        name="iss_date"
                                        className={`input-field`}
                                        placeholder="e.g. Date Issued"
                                        value={item.iss_date}
                                        onChange={(e) => handleCertChange(index, 'iss_date', e.target.value)}
                                    />
                                </div>
        
                                <div className="input-flex-item">
                                    <label htmlFor="end_year" className="font-semibold">Expiry Date (optional)</label>
                                    <input
                                        type="date"
                                        name="exp_date"
                                        className="input-field"
                                        placeholder="Expiry Date"
                                        value={item.exp_date}
                                        onChange={(e) => handleCertChange(index, 'exp_date', e.target.value)}
                                    />
                                </div>
                            </div>
        
                            <div className="input-box">
                                <label htmlFor="credential_url" className="font-semibold">Certification URL (optional)</label>
                                <input
                                    name="credential_url"
                                    className={`input-field`}
                                    placeholder="e.g. URL of Certification if any"
                                    value={item.credential_url}
                                    onChange={(e) => handleCertChange(index, 'credential_url', e.target.value)}
                                />
                            </div>

                            <div>
                                <div className="mt-4">
                                    <label htmlFor="" className="font-semibold"> Certification Image (optional) </label>
                                    <div className={`upload-course-video`}>
                                        <div>
                                            <input
                                                type="file"
                                                ref={(el) => {fileInputRefs.current[index] = el}}
                                                onChange={(e) => handleFileChange(e, index)}
                                                name="image"
                                                accept="image/*"
                                                className="d-none"
                                                disabled={buttonLoader}
                                            />
        
                                            <Image
                                                aria-hidden
                                                src="/assets/images/video-upload.png"
                                                alt="Colearn Logo"
                                                width={76}
                                                height={64}
                                                className="object-contain"
                                                onClick={() => handleImageClick(index)}
                                            />
                                        </div>
                                        <p className="text-[.9rem] font-semibold">Upload a file by clicking the image</p>
                                        <p className="text-[.8rem] color-grey-text text-center">Supported formats: MP4, AVI, MOV, FLV, WebM</p>
                                        {
                                            item.image && (
                                            <p className="text-center text-[.8rem] font-semibold">
                                                Selected File: {item.image.name}
                                            </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-3">
                                {
                                    certData.length > 1 && (
                                        <div className="flex items-end justify-end">
                                            <button
                                                type="button"
                                                className="text-[.9rem] text-red-500 underline"
                                                onClick={() => removeCert(index)}
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
                        <p className="text-[.9rem] font-bold">Add License & Certification</p>
                        <p className="text-[.8rem] color-grey-text">We recommend adding more than one license & Certification. They’ll also appear in your profile section.</p>
                    </div>
                    <button className="btn normal mt-2" onClick={addCert}>+ Add License & Certification</button>
                </div>

                <button className="btn btn-primary-fill full" onClick={submitCerts}>
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