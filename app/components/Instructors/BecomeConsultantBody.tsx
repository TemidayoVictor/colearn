'use client';
import React, {useState, useEffect} from "react";
import { useAuthBecomeConsultant } from "@/hooks/useAuth";
import BecomeConsultantSchool from "./BecomeConsultantSchool";
import BecomeConsultantCertifications from "./BecomeConsultantCertifications";
import BecomeConsultantVideo from "./BecomeConsultantVideo";
import BecomeConsultantPreview from "./BecomeConsultantPreview";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";

const BecomeConsultantBody = () => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);
    const instructor = authStore((state) => state.instructor);
    const consultantProgress = instructor?.consultant_progress
    
    const newUpdate = courseStore((state) => state.newUpdate);

    const renderContent = () => {
        switch(consultantProgress) {
            case 0 :
            return (
                <BecomeConsultantSchool />
            )

            case 1:
            return (
                <BecomeConsultantCertifications />
            )

            case 2:
            return (
                <BecomeConsultantVideo />
            )

            default:
            return (
                <BecomeConsultantPreview />
            )
        }
    }

    useEffect(() => {
        setLoading(true);
        const init = async () => {
          await useAuthBecomeConsultant(router); 
          courseStore.getState().setNewUpdate('reset');
          setLoading(false);
        };
        init();

    }, [newUpdate]);

    if(loading) return <Loader />

    
    
    return (
        <div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="title-3 desktop">Become a Consultant</h2>
                </div>
                <div>
                    <p className="text-[.9rem] color-grey-text">Step {consultantProgress ? consultantProgress + 1 : 1} of 4</p>
                </div>
            </div>

            <div>
                {renderContent()}
            </div>

        </div>
    )
}

export default BecomeConsultantBody