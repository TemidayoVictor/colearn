import React from "react";

const UploadCourseStep3 = () => {
    return (
        <div>
            <div className="upload-course-body">
                <h2><span className="title-3">Upload Others</span> <span>(Optional)</span></h2>
                <p className="text-[.8rem] color-grey-text">Kindly upload optional content such as Assignments, Quizzes/Practice Tests, and Articles.</p>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Upload Article </label>
                    <input type="file" className="upload-course-input"/>
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Upload Assignment </label>
                    <input type="file" className="upload-course-input"/>
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Upload Quiz/Live Test </label>
                    <input type="file" className="upload-course-input"/>
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Upload Quiz/Live Test Answer </label>
                    <input type="file" className="upload-course-input"/>
                </div>
            </div>
        </div>
    )
}

export default UploadCourseStep3