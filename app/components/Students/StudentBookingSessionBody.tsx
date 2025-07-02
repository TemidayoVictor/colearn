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
    
    const getConsultantById = genralStore((state) => state.getConsultantById);
    const consultant = getConsultantById(Number(consultantId));

    const router = useRouter(); 
    const [loading, setLoading] = useState<boolean>(true);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);

    const newUpdate = courseStore((state) => state.newUpdate);
    const slots = consultantStore((state) => state.slots);

    const convertTo24Hour = (timeStr: string): string => {
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
      
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
      
        return `${String(hours).padStart(2, '0')}:${minutes}`;
    };

    const parseTimeToDate = (time: string): Date => {
        return dayjs(time, ['h:mm A']).toDate();
    };

    const {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        duration,
        timeOptions2,
        setDuration,
        durationOptions,
    } = useConsultant();

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthStudent(router); 
            // fetch consultant details
            try {
                const response = await get_consultant(consultantId);
                console.log(response);
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

    useEffect(() => {
        if (selectedDate) {
          const weekday = dayjs(selectedDate).format('dddd');
          const slot = slots.find((s) => s.day === weekday && s.enabled);
          console.log(slot);
          if (slot) {
            
            const start = parseTimeToDate(slot.start_time);
            const end = parseTimeToDate(slot.end_time);

            console.log("Start:", start);
            console.log("End:", end);
            console.log("All options:", timeOptions2.map(parseTimeToDate));

            const filtered = timeOptions2.filter((t) => {
                const current = parseTimeToDate(t);
                return current >= start && current < end;
            });

            setAvailableSlots(filtered);

          } else {
            setAvailableSlots([]);
          }
        }
    }, [selectedDate, slots]);
    
    if(loading) return <Loader />

    return (
        <div>
            <div className='container'>
                <div className="booking-session two">
                    <h2 className='title-2'>Book  a session with {`${consultant?.instructor?.user?.first_name} ${consultant?.instructor?.user?.last_name}`}</h2>
                    <div className="booking-session-cont mt-[1.5em]">
                        <div className="component">
                            <Calendar />
                            <BookingForm />
                        </div>
                        <div className="component">
                            <BookingInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentBookingSessionBody