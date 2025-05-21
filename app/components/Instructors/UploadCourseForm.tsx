'use client';
import React, {useState} from "react";
import Image from "next/image";
import UploadCourseStep1 from "./UploadCourseStep1";
import UploadCourseStep2 from "./UploadCoursestep2";

type UploadCourseFormProps = {
    sendData: (step: number) => void;
}

const UploadCourseForm = ({sendData}: UploadCourseFormProps) => {
    const [step, setStep] = useState<number>(0);

    const sections = [
        <UploadCourseStep1 key="details" />,
        <UploadCourseStep2 key="content" />,
        // <CoursePricing key="pricing" />,
        // <CourseReview key="review" />,
    ];

    const handleNext = () => {
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
            <div className="upload-course-btns">
                <button className={`btn normal`} disabled={step === 0} onClick={handleBack}>Back</button>
                <button className="bt-btn btn btn-primary-fill" onClick={handleNext}>
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