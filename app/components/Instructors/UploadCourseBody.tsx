'use client';
import React, {useState} from "react";
import Image from "next/image";
import UploadCourseForm from "./UploadCourseForm";
import Link from "next/link";

const UploadCourseBody = () => {
    const [step, setStep] = useState<number>(0);

    const updateStep = (newstep: number) => {
        setStep(newstep);
    }
    
    return (
        <div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href='/instructors/courses' className="flex items-center gap-2 cursor-pointer">
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
                    </Link>
                    {
                        step < 3 &&
                        <h2 className="title-3 desktop">Create Course</h2>
                    }
                </div>
                <div>
                    {
                        step < 3 &&
                        <p className="text-[.9rem] color-grey-text">Step {step + 1} of 3</p>
                    }
                </div>
            </div>

            <div>
                {
                    step < 3 &&
                    <h2 className="title-3 mt-3 mobile">Create Course</h2>
                }
                <UploadCourseForm sendData={updateStep} />
            </div>

        </div>
    )
}

export default UploadCourseBody