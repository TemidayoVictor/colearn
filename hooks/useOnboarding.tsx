'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { verify_otp, resend_otp, select_account } from "@/services/onboarding";

export const useOnboarding = () => {
    const user = authStore((state) => state.user);
    const userId = user?.id;
    const [selected, setSelected] = useState<string | null>(null);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [newUpdate, setNewUpdate] = useState<string>('reset');

    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

    const inputLength = 6;
    const [otp, setOtp] = useState<string[]>(Array(inputLength).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return; // Allow only digits
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    
        if (value && index < inputLength - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputsRef.current[index - 1]?.focus();
        }
    };

    function maskEmail(email: string): string {
        const [username, domain] = email.split("@");
        if (username.length <= 3) {
          return `${username[0]}***@${domain}`;
        }
      
        const visiblePart = (username ?? "").slice(0, 4);
        const maskedPart = "*".repeat(username.length - 4);
        return `${visiblePart}${maskedPart}@${domain ?? "domain"}`;
    }

    const submitOtp = async () => {
        const isOtpComplete = otp.every(digit => digit.trim() !== '');

        if (!isOtpComplete) {
            showErrorToast('Please enter the full 6-digit OTP');
            return;
        }

        const otpValue = Number(otp.join(''));

        // check if otp is correct
        setButtonLoader(true);
        try {
            const response = await verify_otp(otpValue, userId);
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

    const resendOtp = async () => {
        setButtonLoader(true);
        try {
            const response = await resend_otp(userId);
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

    const submitUser = async() => {
        if (selected == null) {
            showErrorToast('Please select an account type');
            return;
        }

        setButtonLoader(true);
        try {
            const response = await select_account(userId, selected);
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
        handleSelect,
        otp,
        handleChange,
        handleKeyDown,
        maskEmail,
        inputsRef,
        submitOtp,
        selected,
        buttonLoader,
        newUpdate,
        setNewUpdate,
        resendOtp,
        submitUser,
    }
}