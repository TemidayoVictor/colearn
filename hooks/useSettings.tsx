'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { change_email, verify_email_code, change_password, deactivate_account } from "@/services/settings";
import { genralStore } from "@/zustand/generalStore";
import { useRouter, usePathname  } from "next/navigation";
import { useLogout } from "./useLogout";

export const useSettings = () => {
    const router = useRouter();
    const pathname = usePathname();

    const {logoutHook} = useLogout();

    const user = authStore((state) => state.user);
    const userId = user?.id;

    const [email, setEmail] = useState<string>('');
    const [currentPassword, setCurrentPassword] = useState<string> ('');
    const [password, setPassword] = useState<string> ('');
    const [confirmPassword, setConfirmPassword] = useState<string> ('');
    const [reason, setReason] = useState<string>('');

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [showVerify, setShowVerify] = useState<boolean>(false);

    const [step, setStep] = useState<number>(1);
    const inputLength = 6;
    const [otp, setOtp] = useState<string[]>(Array(inputLength).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const newEmail = genralStore((state) => state.newEmail)

    const isStrongPassword = (password: string) => {
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 8;
        return hasSpecialChar && hasNumber && hasUppercase && hasLowercase && hasMinLength;
    };

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

    const setEmailGeneral = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setEmail(value);
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

    const changeEmail = async () => {
        if (!email) {
            showErrorToast('Please enter new email');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await change_email(email, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                genralStore.getState().setNewEmail(email)
                setShowVerify(true)
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

    const resend = async () => {
        if (!newEmail) {
            showErrorToast('Please enter new email');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await change_email(newEmail, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                genralStore.getState().setNewEmail(email)
                setShowVerify(true)
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

    const verifyEmailCode = async () => {
        if (!newEmail) {
            showErrorToast('Please enter your email');
            return;
        }

        const isOtpComplete = otp.every(digit => digit.trim() !== '');

        if (!isOtpComplete) {
            showErrorToast('Please enter the full 6-digit OTP');
            return;
        }

        const code = Number(otp.join(''));

        // submit
        setButtonLoader(true);
        try {
            const response = await verify_email_code(newEmail, code, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setTimeout(() => {
                    location.reload();
                }, 3000);
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

    const changePassword = async () => {
        if (!newEmail) {
            showErrorToast('Please enter your email');
            return;
        }

        if (!currentPassword || !password || !confirmPassword) {
            showErrorToast('Please fill in all fields');
            return;
        }

        if(confirmPassword !== password) {
            showErrorToast('Passwords do not match');
            return;
        }

        if(!isStrongPassword(password)) {
            showErrorToast('Please use a strong password');
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await change_password(currentPassword, password, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                logoutHook(setLoading);
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
        email,
        setEmail,
        password,
        setPassword,
        setConfirmPassword,
        setReason,
        setCurrentPassword,
        changeEmail,
        buttonLoader,
        showVerify, 
        setShowVerify,
        verifyEmailCode,
        step,
        handleChange,
        inputsRef,
        otp,
        handleKeyDown,
        setStep,
        maskEmail,
        setEmailGeneral,
        resend,
        changePassword,
    }
} 