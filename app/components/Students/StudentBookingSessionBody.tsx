'use client';
import React,{useState, useEffect} from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { consultantStore } from "@/zustand/consultantStore";
import { get_consultant } from "@/services/consultant";
import { showErrorToast } from "@/utils/toastTypes";
import { useAuthStudent } from "@/hooks/useAuth";
import { useConsultant } from "@/hooks/useConsultant";
import Loader from "../Loader";
import Calendar from "../Calendar";
import BookingInfo from "../BookingInfo";
import dayjs from "dayjs";
import BookingForm from "../BookingForm";

const StudentBookingSessionBody = () => {
    const params = useParams();
    const consultantId = params?.consultant as string;

    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);


    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); 
            // fetch consultant details
            try {
                const response = await get_consultant(consultantId);
                if (response.success) {
                    // save state globally
                    genralStore.getState().setConsultant(response.data.consultant);
                    consultantStore.getState().setSlots(response.data.consultant.slots);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }

            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);
    
    if(loading) return <Loader />

    return (
        <div>
            <div className='container'>
                <div className="booking-session two">
                    {/* <h2 className='title-2'>Book  a session with {`${consultant?.instructor?.user?.first_name} ${consultant?.instructor?.user?.last_name}`}</h2> */}
                    <div className="booking-session-cont three">
                        <div className="component">
                            <BookingInfo/>
                        </div>
                        <div className="component">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentBookingSessionBody