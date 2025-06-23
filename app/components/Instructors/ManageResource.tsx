import React, {useRef, useState} from "react";
import { UseCourses } from "@/hooks/useCourses";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { courseStore } from "@/zustand/courseStore";

type ManageResoureProps = {
    type: string;
};

type Episode = {
    file: File | null;
    title: string;
};

const ManageResoure = ({type}: ManageResoureProps) => {
    const {
        buttonLoader,
        formData4,
        errors4,
        uploadResource,
        handleInputChange4,
        handleFileChange2,
        fileInputRef,
        handleImageClick,
        fileName,
    } = UseCourses();  
    
    const modules = courseStore((state) => state.modules);
    const videos = courseStore((state) => state.videos);

    const progress = courseStore((state) => state.progress);
    const uploading = courseStore((state) => state.uploading);

    return (
        <div>
            <div>
                <h2 className="title-3">Add New Resource</h2>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Resource Title<span className="text-red-500">*</span> </label>
                    <input 
                        type="text" 
                        className={`upload-course-input ${errors4.title ? 'error' : ''}`} 
                        name="title"
                        value={formData4.title}
                        placeholder="Title of Resource"
                        onChange={handleInputChange4} 
                        disabled={buttonLoader}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Resource Category<span className="text-red-500">*</span> </label>
                    <select name="category" className={`upload-course-input ${errors4.category ? 'error' : ''}`} value={formData4.category} onChange={handleInputChange4}>
                        <option value="">Select one</option>
                        <option value="Article">Article</option>
                        <option value="Assignment">Assignment</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Resource Type<span className="text-red-500">*</span> </label>
                    <select name="type" className={`upload-course-input ${errors4.type ? 'error' : ''}`} value={formData4.type} onChange={handleInputChange4}>
                        <option value="">Select one</option>
                        <option value="document">Document</option>
                        <option value="link">External URL</option>
                    </select>
                </div>
                {
                    formData4.type == 'document' &&
                    <div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold"> Upload Document<span className="text-red-500">*</span> </label>
                            <div className={`upload-course-video ${errors4.document ? 'error' : ''}`}>
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="video"
                                        accept=".docs,.pdf,.txt,.pptx,.xlsx,.csv,.zip,.rar"
                                        onChange={(e) => handleFileChange2(e)}
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
                                        onClick={handleImageClick}
                                    />
                                </div>
                                <p className="text-[.9rem] font-semibold">Upload a file by clicking the image</p>
                                <p className="text-[.8rem] color-grey-text text-center">Supported formats: docs,.pdf,.txt,.pptx,.xlsx,.csv,.zip,.rar</p>
                                {
                                    fileName && (
                                    <p className="text-center text-[.8rem] font-semibold">
                                        Selected File: {fileName}
                                    </p>
                                    )
                                }
                            </div>
                        </div>
                    </div> 
                }
                
                {
                    formData4.type == 'link' &&
                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">External URL<span className="text-red-500">*</span> </label>
                        <input 
                            type="text" 
                            className={`upload-course-input ${errors4.url ? 'error' : ''}`} 
                            name="url"
                            value={formData4.url}
                            placeholder="External URL"
                            onChange={handleInputChange4} 
                            disabled={buttonLoader}
                        />
                    </div>
                }

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Attach Resource to a Module (optional) </label>
                    <select name="moduleId" className={`upload-course-input `} value={formData4.moduleId} onChange={handleInputChange4}>
                        <option value="">Select one</option>
                        {
                            Array.isArray(modules) && modules.map((module, index) => (
                                <option key={index} value={module.id}>
                                    {module.title}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Attach Resource to a Video (optional) </label>
                    <select name="videoId" className={`upload-course-input `} value={formData4.videoId} onChange={handleInputChange4}>
                        <option value="">Select one</option>
                        {
                            Array.isArray(videos) && videos.map((video, index) => (
                                <option key={index} value={video.id}>
                                    {video.title}
                                </option>
                            ))
                        }
                    </select>
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

                <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={uploadResource} disabled={buttonLoader}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Uploading Resource . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Upload Resource</span>
                            </div>                                        
                        )
                    }                                        
                </button>
            </div>

            {/* {
                    modalType != 'booking' &&
                    <div className="upload-course-btns two">
                        <button className="btn normal" onClick={modalClose}>Cancel</button>

                        <button className="flex items-center gap-2 btn btn-primary-fill">
                            <span>Update</span>
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
                    </div>
                } */}
        </div>
    )
}

export default ManageResoure