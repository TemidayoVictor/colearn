'use client';
import React, {useState, useRef} from "react";
import { logout } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";

export const useOnboarding = () => {
    const [selected, setSelected] = useState<string | null>(null);

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

    const submitOtp = () => {
        alert(otp);
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
    }
}