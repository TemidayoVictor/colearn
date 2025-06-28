'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from "next/navigation";
import { School, Certification } from "@/app/Types/types";
import { submit_schools, submit_certs, submit_intro_video, edit_schools } from "@/services/consultant";
import { courseStore } from "@/zustand/courseStore";

export const useConsultant = () => {
    const router = useRouter();
    const instructor = authStore((state) => state.instructor)
    const instructorId = instructor?.id;

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const fileInputRef = useRef<(HTMLInputElement | null)>(null);
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [introVideo, setIntroVideo] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');

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

    const handleFileEdit = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setFileName(file.name);
            setEditCertData((prev) => ({
                ...prev,
                image: file
            }));
        }
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
    }
}