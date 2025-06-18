'use client';
import React, {useState} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { useRouter } from 'next/navigation';
import { login } from "@/services/auth";
import { utilitiesStore } from "@/zustand/utilitiesStore";

const useLogin = () => {
    const router = useRouter();
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // check if password is strong
    
        const newErrors = {
            email: loginData.email.trim() === '',
            password: loginData.password.trim() === '',
        };
    
        setErrors(newErrors);
    
        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }
    
        else {
            // create account
            setButtonLoader(true);
            try {
                const response = await login(loginData);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    console.log(response);

                    // store countries in the global state
                    utilitiesStore.getState().setCountry(response.data.countries);
                    utilitiesStore.getState().setLanguage(response.data.languages);
                    utilitiesStore.getState().setPreference(response.data.preferences);
                    
                    if(response.data.user.type != "Inactive" && response.data.user.profile_progress != "completed") {
                        router.push(`/onboarding/${response.data.user.type}`);
                    }

                    else if(response.data.user.type != "Inactive" && response.data.user.profile_progress == "completed") {
                        router.push(`/${response.data.user.type}s/dashboard`);
                    }

                    else {
                        router.push('/onboarding');
                    }
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                setButtonLoader(false)
                console.log(err);
                showErrorToast('Unexpected error occurred');
            }
        }

    };

    return {
        loginData,
        errors,
        handleChange,
        buttonLoader,
        handleLogin,
    }
}

export default useLogin