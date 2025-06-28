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
        </div>
    )
}

export default BecomeConsultantPreview