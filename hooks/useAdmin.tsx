'use client';
import React, {useState, useEffect, use} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { add_admin } from "@/services/auth";
import { 
    credit_wallet, 
    debit_wallet, 
    all_transactions, 
    admin_transactions, 
    admin_credit_transactions, 
    admin_debit_transactions,
    admin_credit,
    admin_debit, 
} from "@/services/admin";
import { genralStore } from "@/zustand/generalStore";

export const useAdmin = () => {
    const router = useRouter();
    
    const selectedUser = genralStore((state) => state.user);
    const selectedUserId = selectedUser?.id;

    const user = authStore((state) => state.user);
    const userId = user?.id

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);

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

    const creditWallet = async() => {

        if(!amount) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await credit_wallet(selectedUserId, amount);
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

    const debitWallet = async() => {

        if(!amount) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await debit_wallet(selectedUserId, amount);
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

    const adminCredit = async() => {

        if(!amount) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await admin_credit(userId, amount);
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

    const adminDebit = async() => {

        if(!amount) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await admin_debit(userId, amount);
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
        formData,
        handleInputChange,
        addAdminUser,
        creditWallet,
        debitWallet,
        adminCredit,
        adminDebit,
        setAmount,
    }
}