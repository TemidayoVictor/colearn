'use client';
import React, {useState, useEffect} from "react";
import { useAuthInstructors } from "@/hooks/useAuth";
import BecomeConsultantSchool from "./BecomeConsultantSchool";
import BecomeConsultantCertifications from "./BecomeConsultantCertifications";
import BecomeConsultantVideo from "./BecomeConsultantVideo";
import Loader from "../Loader";
import { useRouter } from "next/navigation";

const BecomeConsultantBody = () => {
    const router = useRouter(); 
    const [step, setStep] = useState<number>(0);
    const [newUpdate, setNewUpdate] = useState<string>('reset');

    const updateStep = (newstep: number) => {
        setStep(newstep);
    }

    useEffect(() => {
        const init = async () => {
          await useAuthInstructors(router); 
          setNewUpdate("reset");
        };
        init();
    }, [newUpdate]);
    
    return (
        <div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="title-3 desktop">Become a Consultant</h2>
                </div>
                <div>
                    {
                        step < 3 &&
                        <p className="text-[.9rem] color-grey-text">Step {step + 1} of 3</p>
                    }
                </div>
            </div>

            <div>
                <BecomeConsultantSchool />
            </div>

        </div>
    )
}

export default BecomeConsultantBody