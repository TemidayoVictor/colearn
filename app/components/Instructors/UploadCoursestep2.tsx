'use client';
import React, {useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Episode = {
    file: File | null;
    title: string;
};

const UploadCourseStep2 = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    const [episodes, setEpisodes] = useState<Episode[]>([
        { file: null, title: '' }
    ]);

    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleAddEpisode = () => {
        setEpisodes((prev) => [...prev, { file: null, title: '' }]);
    };

    const handleTitleChange = (index: number, value: string) => {
        const updatedEpisodes = [...episodes];
        updatedEpisodes[index].title = value;
        setEpisodes(updatedEpisodes);
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = (index: number) => {
        fileInputRefs.current[index]?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0] || null;
        const updatedEpisodes = [...episodes];
        updatedEpisodes[index].file = file;
        setEpisodes(updatedEpisodes);
    };
    
    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

    

    return (
        <div>
            <div className="upload-course-body">
                <h2 className="title-3">Upload Course Video Content</h2>
                <p className="text-[.8rem] color-grey-text">Give a clear overview of the course content and outline who can enroll, preferably in bullet points.</p>

                <div className="upload-course-tabs-con">
                    <div className={`upload-course-tab cursor-pointer ${selected == 'single' ? 'active' : ''}`} onClick={() => handleSelect('single')}>
                        <input 
                            type="checkbox" 
                            className="custom-checkbox two  w-[15%]" 
                            checked={selected === 'single'}
                            onChange={() => handleSelect('single')}
                        />
                        <div className="w-[85%]">
                            <h3 className="font-semibold text-[.9rem]">Single Video</h3>
                            <p>A single clip of a video for the course</p>
                        </div>
                    </div>
                    <div className={`upload-course-tab cursor-pointer ${selected == 'series' ? 'active' : ''}`} onClick={() => handleSelect('series')}>
                        <input 
                            type="checkbox" 
                            className="custom-checkbox two w-[15%]" 
                            checked={selected === 'series'}
                            onChange={() => handleSelect('series')}
                        />
                        <div className="w-[85%]">
                            <h3 className="font-semibold text-[.9rem]">Series Version</h3>
                            <p>Breakdown series of video under a single topic</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="upload-course-body">
                {
                    selected === 'series' && (
                        <div>
                            <h2 className="font-normal text-[1.1rem]">Provide a breakdown of sub-series course content.</h2>
                            <p className="text-[.8rem] color-grey-text">Upload the series of video content under this Series</p>
                        </div>
                    )
                }

                {
                    episodes.map((item, index) => (
                        <div key={index}>
                            <div className="mt-4">
                                <label htmlFor="" className="text-[.9rem] font-semibold">Video Title<span className="text-red-500">*</span> </label>
                                <input 
                                    type="text"
                                    className="upload-course-input" 
                                    placeholder="Enter Course Video Title or Topic" 
                                    value={item.title}
                                    onChange={(e) => handleTitleChange(index, e.target.value)}
                                    required
                                />
                            </div>
        
                            <div className="mt-4">
                                <label htmlFor="" className="text-[.9rem] font-semibold"> Upload Video Content<span className="text-red-500">*</span> </label>
                                <div className="upload-course-video">
                                    <div>
                                        <input
                                            type="file"
                                            ref={(el) => {fileInputRefs.current[index] = el}}
                                            onChange={(e) => handleFileChange(e, index)}
                                            className="d-none"
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
                                    <p className="text-[.8rem] color-grey-text">Supported formats: MP4, AVI,MOV,WMV, FLV, WebM</p>
                                    {
                                        item.file && (
                                        <p className="text-center text-[.8rem] font-semibold">
                                            Selected File: {item.file.name}
                                        </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    selected === 'series' && (
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-[.9rem] font-semibold mt-4 cursor-pointer btn normal inline-block" onClick={handleAddEpisode}>Add More Episodes</p>
                            <Link href='/' className="text-[.9rem] font-semibold mt-4 cursor-pointer btn normal inline-block">Add Another Series</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UploadCourseStep2