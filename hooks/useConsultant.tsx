'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from "next/navigation";
import { School, Certification } from "@/app/Types/types";
import { submit_schools, submit_certs } from "@/services/consultant";
import { courseStore } from "@/zustand/courseStore";

export const useConsultant = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const instructor = authStore((state) => state.instructor)
    const instructorId = instructor?.id;

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [schoolData, setSchoolData] = useState<School[]>([
        {
            name: '',
            degree: '',
            field_of_study: '',
            start_year: '',
            end_year: '',
        }
    ]);

    const handleSchoolChange = (index: number, field: string, value: any) => {
        setSchoolData((prev) =>
          prev.map((sch, idx) =>
            idx === index ? { ...sch, [field]: value } : sch
          )
        );
    };

    const [schErrors, setSchErrors] = useState(
        schoolData.map(() => ({
            name: false,
            degree: false,
            field_of_study: false,
            start_year: false,
            end_year: false,
        }))
    );

    const addSchool = () => {
        setSchoolData((prev) => [
            ...prev,
            {
                name: '',
                degree: '',
                field_of_study: '',
                start_year: '',
                end_year: '',
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
            image: null
        }
    ]);

    const handleCertChange = (index: number, field: string, value: any) => {
        setCertData((prev) =>
          prev.map((sch, idx) =>
            idx === index ? { ...sch, [field]: value } : sch
          )
        );
    };

    const [certErrors, setCertErrors] = useState(
        schoolData.map(() => ({
            name: false,
            organization: false,
        }))
    );

    const addCert = () => {
        setCertData((prev) => [
            ...prev,
            {
                name: '',
                organization: '',
                iss_date: '',
                exp_date: '',
                credential_url: '',
                image: null
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

    const submitCerts = async () => {
        if (!validateCertData()) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(certData)
        return

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
    }
}