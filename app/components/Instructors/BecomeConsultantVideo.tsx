'use client';
import React, {useState} from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";
import { courseStore } from "@/zustand/courseStore";

const BecomeConsultantVideo = () => {
    const progress = courseStore((state) => state.progress);
    const uploading = courseStore((state) => state.uploading);

    const {
        buttonLoader,
        submitIntroVideo,
        fileInputRef,
        handleImageClickb,
        handleFileChangeb,
        fileName,
    } = useConsultant()
    return (
        <div>
            <div className="upload-course-form">
                <div className="upload-course-body">
                    <h2 className="title-3">Introductory Video</h2>
                    <p className="text-[.8rem] color-grey-text">Record an introductory video about  your self, what you do and how you can help others.</p>

                    <div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold"> Upload Video Content<span className="text-red-500">*</span> </label>
                            <div className={`upload-course-video`}>
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="video"
                                        accept="video/*,.mkv,.avi,.mov,.flv,.webm"
                                        onChange={(e) => handleFileChangeb(e)}
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
                                        onClick={handleImageClickb}
                                    />
                                </div>
                                <p className="text-[.9rem] font-semibold">Upload a file by clicking the image</p>
                                <p className="text-[.8rem] color-grey-text text-center">Supported formats: MP4, AVI, MOV, FLV, WebM</p>
                                {
                                    fileName && (
                                    <p className="text-center text-[.8rem] font-semibold">
                                        Selected File: {fileName}
                                    </p>
                                    )
                                }
                            </div>
                        </div>

                        {
                            uploading && (
                                <div className="w-full bg-gray-200 h-4 mt-4 rounded overflow-hidden">
                                <div
                                    className="bg-[#00A6E6] h-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                                </div>
                            )
                        }

                        {uploading && <p className="mt-2 text-[.8rem] color-grey-text">{progress}% Complete</p>}
                    </div>
                </div>

                <button className="btn btn-primary-fill full" onClick={submitIntroVideo}>
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

export default BecomeConsultantVideo