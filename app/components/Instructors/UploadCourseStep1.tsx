import React from "react";
import { UseCourses } from "@/hooks/useCourses";

const UploadCourseStep1 = () => {
    const {
        formData,
        errors,
    } = UseCourses();
    return (
        <div>
            <div>
                <div className="upload-course-body">
                    <h2 className="title-3">Create and upload your course.</h2>
                    <p className="text-[.8rem] color-grey-text">Let help you set up your course content, we will guide you all the way</p>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Course Title<span className="text-red-500">*</span> </label>
                        <input 
                            type="text" 
                            className="upload-course-input" 
                            placeholder="Enter Course Title or Topic" 
                        />
                    </div>
                </div>

                <div className="upload-course-body">
                    <h2 className="title-3">Provide Course Overview</h2>
                    <p className="text-[.8rem] color-grey-text">Give a clear overview of the course content and outline who can enroll, preferably in bullet points.</p>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Detailed Description of Course<span className="text-red-500">*</span> </label>
                        <textarea className="upload-course-textarea" placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course." required></textarea>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Who can enroll<span className="text-red-500">*</span> </label>
                        <textarea className="upload-course-textarea" placeholder="E.g  B2B and B2C Professionals: Ideal for those in business-to-business and business-to-consumer sectors looking to refine their marketing strategies and content creation with AI insights." required></textarea>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Course Price<span className="text-red-500">*</span> </label>
                        <input type="number" className="upload-course-input" placeholder="price" required/>
                    </div>

                    <div className="mt-4">
                        <label className="flex items-center gap-3 text-sm cursor-pointer">
                            <span className="text-[.95rem] font-medium text-gray-700">Make this course free</span>
                            <div className="relative inline-block w-12 h-6">
                            <input
                                type="checkbox"
                                name="is_free"
                                // checked={exp.currently_working}
                                // onChange={(e) => handleExperienceChange(index, 'currently_working', e.target.checked)}
                                className="opacity-0 w-0 h-0 peer"
                            />
                            <div className="absolute top-0 left-0 w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                            <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-all duration-300"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default UploadCourseStep1