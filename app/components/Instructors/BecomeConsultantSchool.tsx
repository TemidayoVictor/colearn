'use client';
import React, {useState} from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";

const degreeOptions = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BSc)",
  "Bachelor of Education (BEd)",
  "Bachelor of Engineering (BEng)",
  "Bachelor of Laws (LLB)",
  "Master of Arts (MA)",
  "Master of Science (MSc)",
  "Master of Education (MEd)",
  "Master of Business Administration (MBA)",
  "Master of Engineering (MEng)",
  "Master of Laws (LLM)",
  "Doctor of Philosophy (PhD)",
  "Doctor of Education (EdD)",
  "Doctor of Medicine (MD)",
  "Postgraduate Diploma",
  "Professional Certificate",
  "Technical/Vocational Certificate",
];

const BecomeConsultantSchool = () => {
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    return (
        <div>
            <div className="upload-course-form">
                <div className="upload-course-body">
                    <h2 className="title-3">Hello, Favour Ayomide. Ready to be a Consultant!?</h2>
                    <p className="text-[.8rem] color-grey-text">Upgrade  your profile by providing your educational background information.</p>

                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Name of School <span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Senior Developer"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Degree<span className="text-red-500">*</span></label>
                        <select name="" id="" className={`input-field`}>
                            <option value="">Select one</option>
                            {
                                degreeOptions.map((degree, index) => (
                                    <option key={index} value={degree}>
                                        {degree}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div className="input-box">
                        <label htmlFor="title" className="font-semibold">Field of Study <span className="text-red-500">*</span></label>
                        <input
                            name="title"
                            className={`input-field`}
                            placeholder="e.g. Senior Developer"
                            // value={exp.title}
                            // onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div>
                        <p className="text-[.9rem] font-bold">Add Other School</p>
                        <p className="text-[.8rem] color-grey-text">We recommend adding other educational information. They’ll also appear in your profile section.</p>
                    </div>
                    <button className="btn normal mt-2">+ Add Education</button>

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

export default BecomeConsultantSchool