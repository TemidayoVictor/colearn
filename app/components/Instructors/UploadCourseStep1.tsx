import React, {useEffect} from "react";
import { UseCourses } from "@/hooks/useCourses";
import MultiDropdownSelector from "../MultiDropdownSelector";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { courseStore } from "@/zustand/courseStore";

type UploadCourseProps = {
    type?: string;
}

const UploadCourseStep1 = ({type}:UploadCourseProps) => {
    const {
        formData,
        errors,
        setFormData,
        handleInputChange,
        selectedItems, 
        setSelectedItems,
        categories,
        uploadCourse,
        editCourse,
        handleCheckChange,
        handleFileChange1,
        buttonLoader,
        fileInputRef,
        handleImageClick,
        fileName,
    } = UseCourses();

    const course = courseStore((state) => state.course);
    const selectedCategories = courseStore((state) => state.categories);
    console.log(selectedCategories)

    if(type == 'edit') {
        useEffect(() => {
            const init = async () => {
                setFormData({
                    title: course?.title || "",
                    description: course?.description || "",
                    who_can_enroll: course?.who_can_enroll || "",
                    price: course?.price || 0,
                    is_free: course?.is_free || false,
                    course_picture: null,
                });
            };
    
            init();
    
        }, []);
    }

    return (
        <div>
            {
                !type &&
                <div>
                    <div className="upload-course-body">
                        <h2 className="title-3">Create and upload your course.</h2>
                        <p className="text-[.8rem] color-grey-text">Let help you set up your course content, we will guide you all the way</p>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Title<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`upload-course-input ${errors.title ? 'error' : ''}`} 
                                name="title"
                                value={formData.title}
                                placeholder="Enter Course Title or Topic"
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>

                    <div className="upload-course-body">
                        <h2 className="title-3">Provide Course Overview</h2>
                        <p className="text-[.8rem] color-grey-text">Give a clear overview of the course content and outline who can enroll, preferably in bullet points.</p>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Detailed Description of Course<span className="text-red-500">*</span> </label>
                            <textarea
                                name="description"
                                className={`upload-course-textarea ${errors.description ? 'error' : ''}`}
                                placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course."
                                value={formData.description}
                                onChange={handleInputChange}
                            />

                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Who can enroll<span className="text-red-500">*</span> </label>
                            <textarea
                                name="who_can_enroll"
                                className={`upload-course-textarea ${errors.who_can_enroll ? 'error' : ''}`}
                                placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course."
                                value={formData.who_can_enroll}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Select categories for course<span className="text-red-500">*</span> </label>
                            <div className="mt-1">
                                <MultiDropdownSelector
                                    options={categories}
                                    selected={selectedItems}
                                    setSelected={setSelectedItems}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Cover Image<span className="text-red-500">*</span> </label>
                            <div className={`upload-course-video`}>
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="video"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange1(e)}
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
                                <p className="text-[.8rem] color-grey-text text-center">Supported formats: jpg, jpeg, png</p>
                                {
                                    fileName && (
                                    <p className="text-center text-[.8rem] font-semibold">
                                        Selected File: {fileName}
                                    </p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Price<span className="text-red-500">*</span> </label>
                            <div className="flex items-center gap-1">
                                <span className="upload-course-input flex-1 font-bold">$</span>
                                <input 
                                    type="number" 
                                    className={`upload-course-input ${errors.price ? 'error' : ''}`} 
                                    name="price"
                                    value={formData.price}
                                    placeholder="Enter Course Title or Topic"
                                    onChange={handleInputChange} 
                                    disabled={formData.is_free}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="flex items-center gap-3 text-sm cursor-pointer">
                                <span className="text-[.95rem] font-medium text-gray-700">Make this course free</span>
                                <div className="relative inline-block w-12 h-6">
                                <input
                                    type="checkbox"
                                    name="is_free"
                                    checked={formData.is_free}
                                    onChange={handleCheckChange}
                                    className="opacity-0 w-0 h-0 peer"
                                />
                                <div className="absolute top-0 left-0 w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                                <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-all duration-300"></div>
                                </div>
                            </label>
                        </div>  
                    </div>
                    <div className="upload-course-btns">
                        {/* <button className={`btn normal`} disabled={step === 0} onClick={handleBack}>Back</button> */}

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={uploadCourse}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Creating Course . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Create Course</span>
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
            }

            {
                type == 'edit' &&
                <div>
                    <div className="upload-course-body">
                        <h2 className="title-3">Edit Course</h2>
                        <p className="text-[.8rem] color-grey-text">Let help you set up your course content, we will guide you all the way</p>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Title<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`upload-course-input ${errors.title ? 'error' : ''}`} 
                                name="title"
                                value={formData.title}
                                placeholder="Enter Course Title or Topic"
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>

                    <div className="upload-course-body">
                        <h2 className="title-3">Provide Course Overview</h2>
                        <p className="text-[.8rem] color-grey-text">Give a clear overview of the course content and outline who can enroll, preferably in bullet points.</p>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Detailed Description of Course<span className="text-red-500">*</span> </label>
                            <textarea
                                name="description"
                                className={`upload-course-textarea ${errors.description ? 'error' : ''}`}
                                placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course."
                                value={formData.description}
                                onChange={handleInputChange}
                            />

                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Who can enroll<span className="text-red-500">*</span> </label>
                            <textarea
                                name="who_can_enroll"
                                className={`upload-course-textarea ${errors.who_can_enroll ? 'error' : ''}`}
                                placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course."
                                value={formData.who_can_enroll}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Cover Image<span className="text-red-500">*</span> </label>
                            <div className={`upload-course-video`}>
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="video"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange1(e)}
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
                                <p className="text-[.8rem] color-grey-text text-center">Supported formats: jpg, jpeg, png</p>
                                {
                                    fileName && (
                                    <p className="text-center text-[.8rem] font-semibold">
                                        Selected File: {fileName}
                                    </p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Select categories for course<span className="text-red-500">*</span> </label>
                            <div className="mt-1">
                                <MultiDropdownSelector
                                    options={categories}
                                    selected={selectedItems}
                                    setSelected={setSelectedItems}
                                    initial={selectedCategories}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Course Price<span className="text-red-500">*</span> </label>
                            <div className="flex items-center gap-1">
                                <span className="upload-course-input flex-1 font-bold">$</span>
                                <input 
                                    type="number" 
                                    className={`upload-course-input ${errors.price ? 'error' : ''}`} 
                                    name="price"
                                    value={formData.price}
                                    placeholder="Enter Course Title or Topic"
                                    onChange={handleInputChange} 
                                    disabled={formData.is_free}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="flex items-center gap-3 text-sm cursor-pointer">
                                <span className="text-[.95rem] font-medium text-gray-700">Make this course free</span>
                                <div className="relative inline-block w-12 h-6">
                                <input
                                    type="checkbox"
                                    name="is_free"
                                    checked={formData.is_free}
                                    onChange={handleCheckChange}
                                    className="opacity-0 w-0 h-0 peer"
                                />
                                <div className="absolute top-0 left-0 w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                                <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-all duration-300"></div>
                                </div>
                            </label>
                        </div>  
                    </div>
                    <div className="upload-course-btns">
                        {/* <button className={`btn normal`} disabled={step === 0} onClick={handleBack}>Back</button> */}

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={editCourse}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Editing Course . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Edit Course</span>
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
            }
        </div>
    )
}   

export default UploadCourseStep1