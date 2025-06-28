import React from "react";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { useConsultant } from "@/hooks/useConsultant";
import BecomeConsultantPreviewBody from "./BecomeConsultantPreviewBody";

const BecomeConsultantPreview = () => {

    const {
        buttonLoader,
    } = useConsultant();

    return (
        <div>
            <div className="my-2">
                <h2 className="title-3">Application Preview</h2>
                <p className="text-[.9rem] color-grey-text">You're almost done! Please review your details carefully before submitting your consultant application.</p>
            </div>
            
            <div>
                <BecomeConsultantPreviewBody />
            </div>

            <div className="upload-course-form">
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

export default BecomeConsultantPreview