'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from "next/navigation";
import { School, Certification, Slot, Review } from "@/app/Types/types";
import { 
    submit_schools, 
    submit_certs, 
    submit_intro_video, 
    edit_schools, 
    edit_certs,
    submit_application, 
    create_consultant_account,
    set_availability,
    book_session,
    update_session,
    cancel_session_user,
    cancel_session_consultant,
    cancel_session_admin,
    update_session_consultant,
    reschedule_session_consultant,
    approve_reschedule,
    update_payment,
    update_session_status,
    add_review,
    stripe_checkout,
} from "@/services/consultant";
import { courseStore } from "@/zustand/courseStore";
import { consultantStore } from "@/zustand/consultantStore";
import { genralStore } from "@/zustand/generalStore";
import dayjs, {Dayjs} from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const useConsultant = () => {
    const router = useRouter();
    const user = authStore((state) => state.user)
    const userId = user?.id;

    const instructor = authStore((state) => state.instructor)
    const instructorId = instructor?.id;

    // Currently logged in consultant
    const consultant = authStore((state) => state.consultant);
    const consultantId = consultant?.id;

    const booking = genralStore((state) => state.booking);
    const bookingId = booking?.id;

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    // for consultants that are selected for booking
    const selectedConsultant = genralStore((state) => state.consultant);
    const selectedConsultantId = selectedConsultant?.id;

    const fileInputRef = useRef<(HTMLInputElement | null)>(null);
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [introVideo, setIntroVideo] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [selected, setSelected] = useState<string | null | undefined>();
    const [rate, setRate] = useState<string | undefined>();

    // const [selectedDate, setSelectedDate] = useState('');
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
    const [availableSlots, setAvailableSlots] = useState<{ consultantTime: string; userTime: string }[]>([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedUserTime, setSelectedUserTime] = useState('');
    const [duration, setDuration] = useState(30);

    const slots = consultantStore((state) => state.slots);
    const toggleSlotEnabled = consultantStore((state) => state.toggleSlotEnabled);
    const updateSlot = consultantStore((state) => state.updateSlot);

    const [note, setNote] = useState<string | null>(null);
    const [cancelNote, setCancelNote] = useState<string>();
    const [feedbackNote, setFeedbackNote] = useState<string>();

    const [schoolData, setSchoolData] = useState<School[]>([
        {
            name: '',
            degree: '',
            field_of_study: '',
            start_year: '',
            end_year: '',
            id: ''
        }
    ]);

    const [editSchoolData, setEditSchoolData] = useState<School>(
        {
            name: '',
            degree: '',
            field_of_study: '',
            start_year: '',
            end_year: '',
            id: '',  
        }
    );

    const [schErrors, setSchErrors] = useState(
        schoolData.map(() => ({
            name: false,
            degree: false,
            field_of_study: false,
            start_year: false,
            end_year: false,
        }))
    );

    const [editSchErrors, setEditSchErrors] = useState({
        name: false,
        degree: false,
        field_of_study: false,
        start_year: false,
        end_year: false,
    });

    const handleSchoolChange = (index: number, field: string, value: any) => {
        setSchoolData((prev) =>
          prev.map((sch, idx) =>
            idx === index ? { ...sch, [field]: value } : sch
          )
        );
    };

    const handleSchoolEdit = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditSchoolData((prev) => ({ ...prev, [name]: value }));
        setEditSchErrors((prev) => ({ ...prev, [name]: false }));
    };

    const addSchool = () => {
        setSchoolData((prev) => [
            ...prev,
            {
                name: '',
                degree: '',
                field_of_study: '',
                start_year: '',
                end_year: '',
                id:''
            },
        ])
    }

    const removeSchool = (index: number) => {
        setSchoolData((prev) => prev.filter((_, idx) => idx !== index));
        setSchErrors((prev) => prev.filter((_, idx) => idx !== index)); 
    };

    const validateSchoolData = () => {
        const newErrors = schoolData.map((school) => ({
          name: school.name.trim() === '',
          degree: school.degree.trim() === '',
          field_of_study: school.field_of_study.trim() === '',
          start_year: school.start_year.trim() === '',
          end_year: school.end_year.trim() === '',
        }));
      
        setSchErrors(newErrors);
      
        // Return true if all experiences are valid
        return newErrors.every((errorObj) =>
          Object.values(errorObj).every((fieldError) => fieldError === false)
        );
    };


    const [certData, setCertData] = useState<Certification[]>([
        {
            name: '',
            organization: '',
            iss_date: '',
            exp_date: '',
            credential_url: '',
            image: null,
            certificate_file_path: '',
            id: ''
        }
    ]);

    const [editCertData, setEditCertData] = useState<Certification>(
        {
            name: '',
            organization: '',
            iss_date: '',
            exp_date: '',
            credential_url: '',
            image: null,
            certificate_file_path: '',
            id: ''
        }
    );

    const [certErrors, setCertErrors] = useState(
        schoolData.map(() => ({
            name: false,
            organization: false,
        }))
    );

    const [editCertErrors, setEditCertErrors] = useState({
        name: false,
        organization: false,        
    })
    

    const handleCertChange = (index: number, field: string, value: any) => {
        setCertData((prev) =>
          prev.map((sch, idx) =>
            idx === index ? { ...sch, [field]: value } : sch
          )
        );
    };

    const handleCertEdit = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditCertData((prev) => ({ ...prev, [name]: value }));
        setEditCertErrors((prev) => ({ ...prev, [name]: false }));
    };

    const addCert = () => {
        setCertData((prev) => [
            ...prev,
            {
                name: '',
                organization: '',
                iss_date: '',
                exp_date: '',
                credential_url: '',
                image: null,
                certificate_file_path: '',
                id: ''
            },
        ])
    }

    const removeCert = (index: number) => {
        setCertData((prev) => prev.filter((_, idx) => idx !== index));
        setCertErrors((prev) => prev.filter((_, idx) => idx !== index)); 
    };

    const validateCertData = () => {
        const newErrors = certData.map((cert) => ({
            name: cert.name.trim() === '',
            organization: cert.organization.trim() === '',
        }));
      
        setCertErrors(newErrors);
      
        // Return true if all experiences are valid
        return newErrors.every((errorObj) =>
          Object.values(errorObj).every((fieldError) => fieldError === false)
        );
    };

    const handleImageClick = (index: number) => {
        fileInputRefs.current[index]?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0] || null;
        const updatedCerts = [...certData];
        updatedCerts[index].image = file;
        setCertData(updatedCerts);
    };

    const handleImageClickb = () => {
        fileInputRef.current?.click();
    };

    const handleFileChangeb = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && file.type.startsWith("video/")) {
            setFileName(file.name);
            setIntroVideo(file);
        }
    };

    const handleFileEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setFileName(file.name);
            setEditCertData((prev) => ({
                ...prev,
                image: file
            }));
        }
    };

    const timeOptions = Array.from({ length: 24 * 2 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minutes = i % 2 === 0 ? "00" : "30";
        const ampm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minutes} ${ampm}`;
    });
      
    const daysOfWeek = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    const toggleDay = (index: number) => {
        toggleSlotEnabled(index);
      };
      
      const handleTimeChange = (
        index: number,
        field: "start_time" | "end_time",
        value: string
      ) => {
        updateSlot(index, { [field]: value });
    };

    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

    const generateTimeSlots = (): string[] => {
        const slots: string[] = [];
        const start = dayjs().hour(0).minute(0);
      
        for (let i = 0; i < 48; i++) {
          slots.push(start.add(i * 30, 'minute').format('h:mm A')); // 'h:mm A' = 12-hour format
        }
      
        return slots;
    };

    const timeOptions2 = generateTimeSlots();
      
    const durationOptions = [30, 60, 90];

    const [updateBooking, setUpdateBooking] = useState<{
        id: string;
        date: string;
        start_time: string;
        user_start_time: string;
        duration: number;
        note: string;
        consultant_date: string,
        userId: number | undefined;
      }>({
        id: '',
        date: '',
        start_time: '',
        user_start_time: '',
        duration: 0,
        note: '',
        consultant_date: '',
        userId: 0,
    });

    const [errors, setErrors] = useState({
        date: false,
        start_time: false,
        user_start_time: false,
        duration: false,
    });

    const [approveBooking, setApproveBooking] = useState<{
        channel: string;
        link: string;
        note: string;
        id: string | undefined;
        type: string;
      }>({
        channel: '',
        link: '',
        note: '',
        id: bookingId,
        type: 'approved',
    });

    const [approveErrors, setApproveErrors] = useState({
        channel: false,
        link: false,
        note: false,
    });

    const [rescheduleBooking, setRescheduleBooking] = useState<{
        id: string;
        type: string;
        date: string;
        start_time: string;
        note: string;
        user_time: string;
        user_date: string;
      }>({
        id: '',
        type: '',
        date: '',
        start_time: '',
        note: '',
        user_time: '',
        user_date: '',
    });

    const [rescheduleErrors, setRescheduleErrors] = useState({
        type: false,
        date: false,
        start_time: false,
        note: false,
    });

    const [reviewData, setReviewData] = useState<Review>({
        id: '',
        user_id: '',
        course_id: '',
        title: '',
        review: '',
        rating: 0,
        instructor_id: '',
    });

    const [reviewError, setReviewError] = useState({
        title: false,
        review: false,
        rating: false,
    });

    const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        setUpdateBooking((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleApproveChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        setApproveBooking((prev) => ({
            ...prev,
            [name]: value,
        }));

        setApproveErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleRescheduleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        setRescheduleBooking((prev) => ({
            ...prev,
            [name]: value,
        }));

        setRescheduleErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReviewData((prev) => ({ ...prev, [name]: value }));
        setReviewError((prev) => ({ ...prev, [name]: false }));
    };


    const submitSchools = async () => {
        if (!validateSchoolData()) {
            showErrorToast('Please fill in all fields');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await submit_schools(schoolData, instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const editSchool = async () => {
        const newErrors = {
            name: editSchoolData.name.trim() === '',
            degree: editSchoolData.degree.trim() === '',
            field_of_study: editSchoolData.field_of_study.trim() === '',
            start_year: editSchoolData.start_year.trim() === '',
            end_year: editSchoolData.end_year.trim() === '',
        };
      
        setEditSchErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        console.log(editSchoolData);

        // submit
        setButtonLoader(true);
        try {
            const response = await edit_schools(editSchoolData);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const submitCerts = async () => {
        if (!validateCertData()) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(certData)

        // submit
        setButtonLoader(true);
        try {
            const response = await submit_certs(certData, instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const editCert = async () => {
        const newErrors = {
            name: editCertData.name.trim() === '',
            organization: editCertData.organization.trim() === '',
        };
      
        setEditCertErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await edit_certs(editCertData);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const submitIntroVideo = async () => {
        if (introVideo == null) {
            showErrorToast('Please add introduction video');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await submit_intro_video(introVideo, instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const submitApplication = async () => {
        // submit
        setButtonLoader(true);
        try {
            const response = await submit_application(instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const createConsultantAccount = async () => {
        // submit
        setButtonLoader(true);
        try {
            const response = await create_consultant_account(instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push('/consultants/set-availability')
                // courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const validateSlots = (slots: Slot[]): boolean => {
        for (const slot of slots) {
          if (slot.enabled && (!slot.start_time || !slot.end_time)) {
            showErrorToast(`Please select start and end time for ${slot.day}`);
            return false;
          }
        }
        return true;
    };

    const setAvailability = async () => {
        if( selected === null || selected === undefined) {
            showErrorToast('Please select a consultant type');
            return;
        }

        if (selected === 'paid' && !rate) {
            showErrorToast('Please set your rate');
            return;
        }
        
        if (!validateSlots(slots)) {
            return;
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await set_availability(consultantId, rate, selected, slots);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const bookSession = async () => {
        // validate input

        if (!selectedDate) {
            showErrorToast('Please select a date');
            return;
        }

        if (!selectedTime) {
            showErrorToast('Please select a time');
            return;
        }

        if (!duration) {
            showErrorToast('Please select a duration');
            return;
        }

        const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");

        const userTimezone = user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userDateTime = dayjs.tz(`${formattedDate } ${selectedTime}`, 'YYYY-MM-DD hh:mm A', userTimezone);

        // get the equivalent date in the consultant's timezone
        const selectedConsultantTimeZone = selectedConsultant?.instructor?.user?.timezone || 'America/New_York';
        const consultantDateTime = userDateTime.tz(selectedConsultantTimeZone);
        const consultantDateDisplay = consultantDateTime.format("dddd, MMM D YYYY");

        // submit
        setButtonLoader(true);
        
        try {
            const response = await book_session(selectedConsultantId, userId, formattedDate, selectedTime, duration, note, selectedUserTime, consultantDateDisplay);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push('/students/bookings');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const updateSession = async () => {
        const newErrors = {
            date: updateBooking.date.trim() === '',
            start_time: updateBooking.start_time.trim() === '',
            user_start_time: updateBooking.user_start_time.trim() === '',
            duration: updateBooking.duration === 0,
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(updateBooking);

        const formattedDate = dayjs(updateBooking.date).format("YYYY-MM-DD");

        const userTimezone = user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userDateTime = dayjs.tz(`${formattedDate } ${updateBooking.start_time}`, 'YYYY-MM-DD hh:mm A', userTimezone);

        // get the equivalent date in the consultant's timezone
        const consultant = booking?.consultant

        const selectedConsultantTimeZone = consultant?.instructor?.user?.timezone || 'America/New_York';
        const consultantDateTime = userDateTime.tz(selectedConsultantTimeZone);
        const consultantDateDisplay = consultantDateTime.format("dddd, MMM D YYYY");

        const payload = {
            ...updateBooking,
            consultant_date: consultantDateDisplay,
        };

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session(payload);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const cancelSessionUser = async () => {
        if(!cancelNote) {
            showErrorToast('Please add a reason for cancelling');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await cancel_session_user(bookingId, cancelNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const cancelSessionConsultant = async () => {
        if(!cancelNote) {
            showErrorToast('Please add a reason for cancelling');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await cancel_session_consultant(bookingId, cancelNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const cancelSessionAdmin = async () => {
        if(!cancelNote) {
            showErrorToast('Please add a reason for cancelling');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await cancel_session_admin(bookingId, cancelNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const approveSession = async () => {
        const newErrors = {
            channel: approveBooking.channel.trim() === '',
            link: approveBooking.link.trim() === '',
            note: approveBooking.note.trim() === '',
        };
      
        setApproveErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session_consultant(approveBooking);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const rescheduleSessionConsultant = async () => {

        const newErrors = {
            type: rescheduleBooking.type.trim() === '',
            date: rescheduleBooking.date.trim() === '',
            start_time: rescheduleBooking.start_time.trim() === '',
            note: rescheduleBooking.note.trim() === '',
        };
      
        setRescheduleErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        const formattedDate = dayjs(rescheduleBooking.date).format("YYYY-MM-DD");

        const consultantTimezone = user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        const consultantDate = dayjs.tz(`${formattedDate } ${rescheduleBooking.start_time}`, 'YYYY-MM-DD hh:mm A', consultantTimezone);

        // get the equivalent date in the consultant's timezone
        const userData = booking?.user

        const userTimeZone = userData?.timezone || 'America/New_York';
        const userDateTime = consultantDate.tz(userTimeZone);
        const userDateDisplay = userDateTime.format("YYYY-MM-DD");

        const payload = {
            ...rescheduleBooking,
            user_date: userDateDisplay,
        };

        console.log(payload);

        // submit
        setButtonLoader(true);
        
        try {
            const response = await reschedule_session_consultant(payload);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const approveReschedule = async () => {
        // submit
        setButtonLoader(true);
        
        try {
            const response = await approve_reschedule(bookingId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const makePayment = async () => {
        // submit
        setButtonLoader(true);
        
        try {
            const response = await stripe_checkout(bookingId);
            if (response.success) {
                // showSuccessToast(response.message)
                // courseStore.getState().setNewUpdate('set');
                window.location.href = response.data.url;
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const markAsComplete = async () => {
        
        if(!feedbackNote) {
            showErrorToast('Please fill in required fields');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session_status(bookingId, 'completed_user' , feedbackNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const markAsCompleteConsultant = async () => {
        
        if(!feedbackNote) {
            showErrorToast('Please fill in required fields');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session_status(bookingId, 'completed_consultant', feedbackNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const markAsMissedUser = async () => {
        if(!feedbackNote) {
            showErrorToast('Please fill in required fields');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session_status(bookingId, 'missed_user', feedbackNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const markAsMissedConsultant = async () => {
        if(!feedbackNote) {
            showErrorToast('Please fill in required fields');
            return
        }

        // submit
        setButtonLoader(true);
        
        try {
            const response = await update_session_status(bookingId, 'missed_consultant', feedbackNote);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const addReview = async () => {

        const newErrors = {
            title: reviewData.title.trim() === '',
            rating: reviewData.rating === 0,
            review: reviewData.review.trim() === '',
        };
        
        setReviewError(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await add_review(reviewData);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
                courseStore.getState().setNewUpdate('set');
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
            courseStore.getState().setNewUpdate('set');
        }
    }


    return {
        buttonLoader,
        schoolData,
        setSchoolData,
        addSchool,
        removeSchool,
        handleSchoolChange,
        submitSchools,
        certData,
        handleCertChange,
        addCert,
        removeCert,
        fileInputRefs,
        handleImageClick,
        handleFileChange,
        submitCerts,
        introVideo,
        setIntroVideo,
        submitIntroVideo,
        fileInputRef,
        handleImageClickb,
        handleFileChangeb,
        fileName,
        editSchoolData,
        setEditSchoolData,
        editCertData,
        setEditCertData,
        handleSchoolEdit,
        editSchool,
        editSchErrors,
        handleCertEdit,
        handleFileEdit,
        editCert,
        submitApplication,
        timeOptions,
        daysOfWeek,
        slots,
        toggleDay,
        handleTimeChange,
        setAvailability,
        createConsultantAccount,
        selected,
        handleSelect,
        rate, 
        setRate,
        setSelected,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        duration,
        setDuration,
        durationOptions,
        timeOptions2,
        availableSlots, 
        setAvailableSlots,
        bookSession,
        setNote,
        setSelectedUserTime,
        updateBooking,
        setUpdateBooking,
        handleUpdateChange,
        updateSession,
        cancelSessionUser,
        cancelNote,
        setCancelNote,
        approveBooking, 
        handleApproveChange,
        approveSession,
        approveErrors,
        setApproveBooking,
        rescheduleBooking, 
        setRescheduleBooking,
        rescheduleSessionConsultant,
        handleRescheduleChange,
        approveReschedule,
        cancelSessionConsultant,
        makePayment,
        markAsComplete,
        markAsCompleteConsultant,
        markAsMissedUser,
        markAsMissedConsultant,
        feedbackNote, 
        setFeedbackNote,
        cancelSessionAdmin,
        addReview,
        reviewData,
        setReviewData,
        reviewError,
        handleReviewChange,
    }
}