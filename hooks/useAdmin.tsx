'use client';
import React, {useState, useRef} from "react";
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
    update_general_settings,
    withdraw_funds,
    approve_withdrawal,
    reject_withdrawal,
    approve_consultant,
    decline_consultant,
    create_blog,
    edit_blog,
} from "@/services/admin";
import { genralStore } from "@/zustand/generalStore";
import { GeneralSettings, Blog } from "@/app/Types/types";

export const useAdmin = () => {
    const router = useRouter();
    
    const user = authStore((state) => state.user);
    const userId = user?.id

    const instructor = genralStore((state) => state.instructor);
    const instructorId = instructor?.id;

    const selectedUser = genralStore((state) => state.user);
    const selectedUserId = selectedUser?.id;

    const transaction = genralStore((state) => state.transaction);
    const transactionId = transaction?.id;

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [reason, setReason] = useState<string>('');

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

    const [settingsData, setSettingsData] = useState<GeneralSettings>({
        course_percentage: 0,
        consultation_perentage: 0,
        minimum_withdrawal: 0,
    });

    const [setttingsErrors, setSettingsErrors] = useState({
        course_percentage: false,
        consultation_perentage: false,
        minimum_withdrawal: false,
    });

    const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSettingsData((prev) => ({ ...prev, [name]: value }));
        setSettingsErrors((prev) => ({ ...prev, [name]: false }));
    };

    const [blogData, setBlogData] = useState<Blog>({
        user_id: userId,
        title: '',
        excerpt: '',
        body: '',
        is_published: false,
        thumbnail: null
    });

    const [blogErrors, setBlogErrors] = useState({
        title: false,
        excerpt: false,
        body: false,
        thumbnail: false,
    });

    const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlogData((prev) => ({ ...prev, [name]: value }));
        setBlogErrors((prev) => ({ ...prev, [name]: false }));
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click(); // triggers hidden input
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);

            setBlogData((prev) => ({
                ...prev,
                thumbnail: file
            }));
        }
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

    const updateGeneralSetting = async() => {
        
        const newErrors = {
            course_percentage: settingsData.course_percentage === 0,
            consultation_perentage: settingsData.consultation_perentage === 0,
            minimum_withdrawal: settingsData.minimum_withdrawal === 0,
        };
        
        setSettingsErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please empty or 0 values not allowed');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await update_general_settings(settingsData);
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

    const withdrawFunds = async() => {
        
        if(!amount) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await withdraw_funds(userId, amount);
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

    const approveWithdrawal = async() => {
        
        if(!transactionId) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await approve_withdrawal(transactionId);
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

    const rejectWithdrawal = async() => {
        
        if(!transactionId) {
            showErrorToast('Please add an amount')
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await reject_withdrawal(transactionId);
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

    const approveConsultant = async() => {
        
        if(!instructorId) {
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await approve_consultant(instructorId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
                router.push('/admin/user-verification');
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

    const declineConsultant = async() => {
        
        if(!instructorId && !reason) {
            showErrorToast('Please add a reason');
            return
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await decline_consultant(instructorId, reason);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
                router.push('/admin/user-verification');
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

    const createBlog = async () => {
        const newErrors = {
            title: blogData.title.trim() === '',
            excerpt: blogData.excerpt.trim() === '',
            body: blogData.body.trim() === '',
            thumbnail: blogData.thumbnail === null,
        };
        
        setBlogErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(blogData)

        try {
            setButtonLoader(true)
            const response = await create_blog(blogData);
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

    const editBlog = async () => {
        const newErrors = {
            title: blogData.title.trim() === '',
            excerpt: blogData.excerpt.trim() === '',
            body: blogData.body.trim() === '',
            thumbnail: false,
        };
        
        setBlogErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(blogData)

        try {
            setButtonLoader(true)
            const response = await edit_blog(blogData);
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
        handleSettingsChange,
        settingsData,
        setSettingsData,
        updateGeneralSetting,
        withdrawFunds,
        approveWithdrawal,
        rejectWithdrawal,
        approveConsultant,
        reason, 
        setReason,
        declineConsultant,
        createBlog,
        blogData,
        blogErrors,
        setBlogData,
        handleBlogChange,
        handleClick,
        fileInputRef,
        preview,
        handleFileChange,
        editBlog,
    }
}