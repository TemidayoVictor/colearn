'use client';
import React, {useState, useEffect} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { add_admin } from "@/services/auth";

export const useAdmin = () => {
    const router = useRouter();
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const [formData, setFormData] = useState<{
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: string;
      }>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: '',
    });

    const [errors, setErrors] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        role:false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const addAdminUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            first_name: formData.first_name.trim() === '',
            last_name: formData.last_name.trim() === '',
            email: formData.email.trim() === '',
            password: formData.password.trim() === '',
            role:  formData.role.trim() === '',
        };
        
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await add_admin(formData);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
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
    }

    return {
        buttonLoader,
        formData,
        handleInputChange,
        addAdminUser,
    }
}