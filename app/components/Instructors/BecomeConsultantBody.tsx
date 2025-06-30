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
import EmptyPage from "../EmptyPage";
import { useConsultant } from "@/hooks/useConsultant";

const BecomeConsultantBody = () => {
    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);
    const instructor = authStore((state) => state.instructor);
    const consultantProgress = instructor?.consultant_progress
    
    const newUpdate = courseStore((state) => state.newUpdate);

    const { createConsultantAccount } = useConsultant();

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

            case 4:
            return (
                <div>
                    <EmptyPage image="/assets/images/empty-image.png"  header="Application Under Review" content="Your consultant application has been received and is currently under review. You’ll be notified once a decision has been made." imageWidth={400} imageHeight={240}/>
                </div>    
            )

            case 5:
            return (
                <div>
                    <EmptyPage image="/assets/images/empty-image.png"  header="Application Approved" content="Congratulations! Your application as a consultant has been approved. You're now ready to offer consulting sessions to learners." imageWidth={400} imageHeight={240} button={true} linkTitle="Proceed" buttonClick={createConsultantAccount} />
                </div>    
            )

            case 6:
            return (
                <div>
                    <EmptyPage image="/assets/images/empty-image.png"  header="Application Rejected" content="Unfortunately, your application to become a consultant was not approved at this time. You may review your submission and apply again with updated information." imageWidth={400} imageHeight={240}/>
                </div>    
            )

            default: // 3
            return (
                <BecomeConsultantPreview />
            )
        }
    }

    const renderStep = () => {
        switch(consultantProgress) {
            case 4:
            return (
                "Pending"
            )
            case 5: 
            return (
                "Approved"
            )
            case 6:
            return (
                "Rejected"
            )
            default:
            return (
                `Step ${consultantProgress ? consultantProgress + 1 : 1} of 4`
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
                    <p className="text-[.9rem] color-grey-text">{renderStep()}</p>
                </div>
            </div>

            <div>
                {renderContent()}
            </div>

        </div>
    )
}

export default BecomeConsultantBody