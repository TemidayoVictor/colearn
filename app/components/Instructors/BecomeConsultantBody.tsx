'use client';
import React, {useState, useEffect} from "react";
import { useAuthInstructors } from "@/hooks/useAuth";
import BecomeConsultantSchool from "./BecomeConsultantSchool";
import BecomeConsultantCertifications from "./BecomeConsultantCertifications";
import BecomeConsultantVideo from "./BecomeConsultantVideo";
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

    useEffect(() => {
        setLoading(true);
        const init = async () => {
          await useAuthInstructors(router); 
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
                    <p className="text-[.9rem] color-grey-text">Step {consultantProgress ? consultantProgress + 1 : 1} of 3</p>
                </div>
            </div>

            <div>
                {
                    consultantProgress == 0 &&
                    <BecomeConsultantSchool />
                }

                {
                    consultantProgress == 1 &&
                    <BecomeConsultantCertifications />
                }

                {
                    consultantProgress == 2 &&
                    <BecomeConsultantVideo />
                }
            </div>

        </div>
    )
}

export default BecomeConsultantBody