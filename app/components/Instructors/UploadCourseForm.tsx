import React from "react";
import Image from "next/image";

const UploadCourseForm = () => {
    return (
        <div className="upload-course-form">
            <div>
                <div className="upload-course-body">
                    <h2 className="title-3">Create and upload your course.</h2>
                    <p className="text-[.8rem] color-grey-text">Let help you set up your course content, we will guide you all the way</p>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Course Title<span className="text-red-500">*</span> </label>
                        <input type="text" className="upload-course-input" placeholder="Enter Course Title or Topic" required/>
                    </div>
                </div>

                <div className="upload-course-body">
                    <h2 className="title-3">Provide Course Overview</h2>
                    <p className="text-[.8rem] color-grey-text">Give a clear overview of the course content and outline who can enroll, preferably in bullet points.</p>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">What they will learn<span className="text-red-500">*</span> </label>
                        <textarea className="upload-course-textarea" placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course." required></textarea>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Who can enroll<span className="text-red-500">*</span> </label>
                        <textarea className="upload-course-textarea" placeholder="E.g  B2B and B2C Professionals: Ideal for those in business-to-business and business-to-consumer sectors looking to refine their marketing strategies and content creation with AI insights." required></textarea>
                    </div>
                </div>

                <div className="upload-course-body">
                    <h2 className="title-3">Provide Course Content</h2>
                    <p className="text-[.8rem] color-grey-text">Give a clear breakdown of the course content, preferably in bullet points.</p>

                    <div className="mt-4">
                        <label htmlFor="" className="text-[.9rem] font-semibold">Provide Course Content<span className="text-red-500">*</span> </label>
                        <textarea className="upload-course-textarea" placeholder="E.g  Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course." required></textarea>
                    </div>
                </div>
            </div>

            <div className="upload-course-btns">
                <button className="btn normal">Back</button>
                <button className="bt-btn btn btn-primary-fill">
                    <span>Proceed</span>
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
        </div>
    )
}

export default UploadCourseForm