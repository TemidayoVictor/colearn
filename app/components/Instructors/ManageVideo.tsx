import React, {useEffect} from "react";
import { UseCourses } from "@/hooks/useCourses";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { courseStore } from "@/zustand/courseStore";

type ManageVideoProps = {
    type: string;
};

const ManageVideo = ({type}: ManageVideoProps) => {
    const {
        buttonLoader,
        formData3,
        errors3,
        uploadVideo,
        formData3b,
        errors3b,
        setFormData3b,
        handleInputChange3b,
        handleInputChange3,
        fileInputRef,
        handleImageClick,
        handleFileChange,
        handleFileChangeb,
        fileName,
        editVideo,
    } = UseCourses();  
    
    const progress = courseStore((state) => state.progress);
    const uploading = courseStore((state) => state.uploading);

    const video = courseStore((state) => state.video);

    useEffect(() => {
        const init = async () => {
            setFormData3b({
                title: video?.title || "",
                order: video?.order || 0,
                videoId: video?.id || 0,
                duration: video?.duration || 0,
                video: null                
            });
        };

        init();

    }, []);

    return (
        <div>
            {
                type == 'add' &&
                <div>
                    <h2 className="title-3">Add New Video</h2>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Video Title<span className="text-red-500">*</span> </label>
                        <input 
                            type="text" 
                            className={`upload-course-input ${errors3.title ? 'error' : ''}`} 
                            name="title"
                            value={formData3.title}
                            placeholder="Title of Video"
                            onChange={handleInputChange3} 
                            disabled={buttonLoader}
                        />
                    </div>
                
                    <div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold"> Upload Video Content<span className="text-red-500">*</span> </label>
                            <div className={`upload-course-video ${errors3.video ? 'error' : ''}`}>
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="video"
                                        accept="video/*,.mkv,.avi,.mov,.flv,.webm"
                                        onChange={(e) => handleFileChange(e)}
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
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Duration in minutes<span className="text-red-500">*</span> </label>
                        <div className="flex items-center gap-1">
                            <input 
                                type="number" 
                                className={`upload-course-input ${errors3.duration ? 'error' : ''}`} 
                                name="duration"
                                value={formData3.duration}
                                placeholder="Duration in minutes"
                                onChange={handleInputChange3} 
                                disabled={buttonLoader}
                            />
                            <span className="upload-course-input flex-1 font-bold">minutes</span>
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

                    <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={uploadVideo} disabled={buttonLoader}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Uploading Video . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Upload Video</span>
                                </div>                                        
                            )
                        }                                        
                    </button>
                </div>
            }

            {
                type == 'edit' &&
                <div>
                    <h2 className="title-3">Edit Video</h2>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Video Title<span className="text-red-500">*</span> </label>
                        <input 
                            type="text" 
                            className={`upload-course-input ${errors3b.title ? 'error' : ''}`} 
                            name="title"
                            value={formData3b.title}
                            placeholder="Title of Video"
                            onChange={handleInputChange3b} 
                            disabled={buttonLoader}
                        />
                    </div>
                
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
                                        onClick={handleImageClick}
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
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Duration in minutes<span className="text-red-500">*</span> </label>
                        <div className="flex items-center gap-1">
                            <input 
                                type="number" 
                                className={`upload-course-input ${errors3b.duration ? 'error' : ''}`} 
                                name="duration"
                                value={formData3b.duration}
                                placeholder="Duration in minutes"
                                onChange={handleInputChange3b} 
                                disabled={buttonLoader}
                            />
                            <span className="upload-course-input flex-1 font-bold">minutes</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Video Position<span className="text-red-500">*</span> </label>
                        <input 
                            type="text" 
                            className={`upload-course-input ${errors3b.order ? 'error' : ''}`} 
                            name="order"
                            value={formData3b.order}
                            placeholder="Video Position"
                            onChange={handleInputChange3b} 
                            disabled={buttonLoader}
                        />
                    </div>

                    <div className="mt-4">
                        <input // this may show zero, but the value is already saved in formData3b, and it works well
                            type="number" 
                            name="videoId"
                            defaultValue={formData3b.videoId}
                            disabled={buttonLoader}
                            hidden
                        />
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

                    <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={editVideo} disabled={buttonLoader}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Updating Video . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Updating Video</span>
                                </div>                                        
                            )
                        }                                        
                    </button>
                </div>
            }
        </div>
    )
}

export default ManageVideo