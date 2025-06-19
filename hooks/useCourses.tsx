'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { upload_course } from "@/services/courses";
import { useRouter } from 'next/navigation';

export const UseCourses = () => {
    const user = authStore((state) => state.user);
    const userId = user?.id;

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [newUpdate, setNewUpdate] = useState<string>('reset');

    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        who_can_enroll: string;
        price: number;
        is_free: boolean;
      }>({
        title: '',
        description: '',
        who_can_enroll: '',
        price: 0,
        is_free: false,
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false,
        who_can_enroll: false,
        price: false,
    });

    const uploadCourse = async () => {

        const newErrors = {
            title: formData.title.trim() === '',
            description: formData.description.trim() === '',
            who_can_enroll: formData.who_can_enroll.trim() === '',
            price: !formData.is_free && formData.price === 0,
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }
        
        try {
            const response = await upload_course(formData, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setNewUpdate('set');
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
        formData,
        errors,
        buttonLoader,
        uploadCourse,
    }
}