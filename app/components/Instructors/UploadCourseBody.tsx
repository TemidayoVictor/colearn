'use client';
import React, {useState} from "react";
import Image from "next/image";
import UploadCourseForm from "./UploadCourseForm";

const UploadCourseBody = () => {
    const [step, setStep] = useState<number>(0);

    const updateStep = (newstep: number) => {
        setStep(newstep);
    }
    
    return (
        <div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/left-arrow.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[.9rem] font-semibold">Back</p>
                    </div>
                    <h2 className="title-3">Create Course</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step {step + 1} of 3</p>
                </div>
            </div>

            <div>
                <UploadCourseForm sendData={updateStep} />
            </div>

        </div>
    )
}

export default UploadCourseBody