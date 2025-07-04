'use client';
import React, {useState} from "react";
import Image from "next/image";
import UploadCourseStep1 from "./UploadCourseStep1";
import UploadCourseStep2 from "./UploadCoursestep2";
import UploadCourseStep3 from "./UploadCourseStep3";
import UploadCourseStep4 from "./UploadCourseStep4";
import { Course } from "@/app/Types/types";

type UploadCourseFormProps = {
    sendData: (step: number) => void;
    type?: string; 
}

const UploadCourseForm = ({sendData, type}: UploadCourseFormProps) => {
    const [step, setStep] = useState<number>(0);

    const sections = [
        <UploadCourseStep1 key="details" type={type} />, // this redirects to upload module page on success
        <UploadCourseStep2 key="content" />, // currently not being used. Was added based on U.I.
        <UploadCourseStep3 key="additions"/>, // currently not being used. Was added based on U.I.
        <UploadCourseStep4 key="success" />, // currently not being used. Was added based on U.I.
    ];

    const handleNext = async () => {
        // upload();
        if (step < sections.length - 1) setStep(step + 1);
        sendData(step + 1);
        const container = document.querySelector('.upload-course-form');
        if (container instanceof HTMLElement) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const handleBack = () => {
        if (step > 0) setStep(step - 1);
        sendData(step - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div className="upload-course-form">
            <div>
                {
                    sections[step]
                }
            </div>
            {/* {
                step < sections.length - 1 &&
                <div className="upload-course-btns">
                    <button className={`btn normal`} disabled={step === 0} onClick={handleBack}>Back</button>

                    <button className="flex items-center gap-2 btn btn-primary-fill" onClick={upload}>
                        <span>{step < sections.length - 2 ? 'Proceed' : 'Submit'}</span>
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

export default UploadCourseForm