'use client';
import React, {useState} from "react";
import { toast } from 'react-toastify';
import { motion, AnimatePresence, Variants  } from "framer-motion";
import { createAccount } from "@/services/auth";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { useRouter } from 'next/navigation';

export const useSignUpForm = () => {
    const router = useRouter();
    const [password, setPassword] = useState<string> ('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState <boolean | null> (false);
    const [step, setStep] = useState<number> (1);
    const [hasMounted, setHasMounted] = useState<boolean | null> (false);
    const [direction, setDirection] = useState(1);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const togglePassword = () => setShowPassword(prev => !prev);

    const slideVariants: Variants = {
        initial: (direction: number) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0,
          position: 'absolute',
        }),
        animate: {
          x: 0,
          opacity: 1,
          position: 'relative',
          transition: { duration: 0.5 },
        },
        exit: (direction: number) => ({
          x: direction < 0 ? '100%' : '-100%',
          opacity: 0,
          position: 'absolute',
          transition: { duration: 0.5 },
        }),
      };

    const next = () => {
        setDirection(1);
        setStep(2);
    };

    const back = () => {
        setDirection(-1);
        setStep(1);
    };

    const isStrongPassword = (password: string) => {
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 8;
        return hasSpecialChar && hasNumber && hasUppercase && hasLowercase && hasMinLength;
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword:false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handlePreSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const newErrors = {
            firstName: formData.firstName.trim() === '',
            lastName: formData.lastName.trim() === '',
            email: formData.email.trim() === '' || !emailRegex.test(formData.email),
            password: false,
            confirmPassword: false
        };
      
        setErrors(newErrors);
      
        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            toast.error('Please fill in all required fields');
            return;
        }

        else {
            // show next screen
            next();
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // check if password is strong
    
        const newErrors = {
          firstName: formData.firstName.trim() === '',
          lastName: formData.lastName.trim() === '',
          email: formData.email.trim() === '',
          password: formData.password.trim() === '' || !isStrongPassword(formData.password),
          confirmPassword:  formData.password.trim() !== '' && isStrongPassword(formData.password) &&
          (formData.confirmPassword.trim() === '' || formData.confirmPassword !== formData.password),
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
                const response = await createAccount(formData);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    router.push('/onboarding');
                } 

                else {
                    setButtonLoader(false)
                    back();
                    showErrorToast(response.errors)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }

    };

    return {
        password,
        setPassword,
        showPassword,
        buttonLoader,
        step,
        hasMounted,
        setHasMounted,
        direction,
        togglePassword,
        slideVariants,
        next,
        back,
        formData,
        errors,
        handleChange,
        handlePreSubmit,
        handleSubmit,
    }
}