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
    delete_blog,
    add_category,
    edit_category,
    delete_category,
    add_faq,
    edit_faq,
    delete_faq,
    users_search,
    course_search_admin,
} from "@/services/admin";
import { genralStore } from "@/zustand/generalStore";
import { GeneralSettings, Blog, Category, FAQ } from "@/app/Types/types";

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

    const blog = genralStore((state) => state.blog)
    const blogId = blog?.id

    const category = genralStore((state) => state.category)
    const categoryId = category?.id

    const faq = genralStore((state) => state.faq)
    const faqId = faq?.id

    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [reason, setReason] = useState<string>('');

    const [keyword, setKeyword] = useState<string>('');

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
        image: null,
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

    const [categoryData, setCategoryData] = useState<Category>({
        name: '',
        image: null,
        thumbnail: '',
    });

    const [categoryErrors, setCategoryErrors] = useState({
        name: false,
        image: false,
    });

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCategoryData((prev) => ({ ...prev, [name]: value }));
        setCategoryErrors((prev) => ({ ...prev, [name]: false }));
    };

    const [faqData, setFaqData] = useState<FAQ>({
        question: '',
        answer: '',
    });

    const [faqErrors, setFaqErrors] = useState({
        question: false,
        answer: false,
    });

    const handleFaqChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFaqData((prev) => ({ ...prev, [name]: value }));
        setFaqErrors((prev) => ({ ...prev, [name]: false }));
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
                image: file
            }));
        }
    };

    const handleCategoryFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);

            setCategoryData((prev) => ({
                ...prev,
                image: file
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
            thumbnail: blogData.image === null,
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

    const deleteBlog = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_blog(blogId);
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

    const addCategory = async () => {
        const newErrors = {
            name: categoryData.name.trim() === '',
            image: categoryData.image === null,
        };
        
        setCategoryErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(categoryData)

        try {
            setButtonLoader(true)
            const response = await add_category(categoryData);
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

    const editCategory = async () => {
        const newErrors = {
            name: categoryData.name.trim() === '',
            image: false,
        };
        
        setCategoryErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(categoryData)

        try {
            setButtonLoader(true)
            const response = await edit_category(categoryData);
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

    const deleteCategory = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_category(categoryId);
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

    const addFaq = async () => {
        const newErrors = {
            question: faqData.question.trim() === '',
            answer: faqData.answer.trim() === '',
        };
        
        setFaqErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(faqData)

        try {
            setButtonLoader(true)
            const response = await add_faq(faqData);
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

    const editFaq = async () => {
        const newErrors = {
            question: faqData.question.trim() === '',
            answer: faqData.answer.trim() === '',
        };
        
        setFaqErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in required fields');
            return;
        }

        console.log(faqData)

        try {
            setButtonLoader(true)
            const response = await edit_faq(faqData);
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

    const deleteFaq = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_faq(faqId);
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

    const search = async () => {

        if(!keyword) {
            showErrorToast('Please add a keyword')
            return
        }

        try {
            setButtonLoader(true)
            const response = await users_search(keyword);
            if (response.success) {
                // showSuccessToast(response.message)
                if(response.data.users.length > 0) {
                    genralStore.getState().setUsers(response.data.users);
                }

                else {
                    showErrorToast("No user found. Please try another Keyword")
                }
                // courseStore.getState().setNewUpdate('set');
                console.log(response.data);
                setButtonLoader(false)
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
                courseStore.getState().setNewUpdate('set');
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
            courseStore.getState().setNewUpdate('set');
        }
    }

        const search_course = async () => {
    
            if(!keyword) {
                showErrorToast('Please add a keyword')
                return
            }
    
            try {
                setButtonLoader(true)
                const response = await course_search_admin(keyword);
                if (response.success) {
                    // showSuccessToast(response.message)
                    if(response.data.courses.length > 0) {
                        genralStore.getState().setData(response.data);
                    }
    
                    else {
                        showErrorToast("No course found. Please try another Keyword")
                    }
                    // courseStore.getState().setNewUpdate('set');
                    console.log(response.data);
                    setButtonLoader(false)
                } 
    
                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                    courseStore.getState().setNewUpdate('set');
                }
            }
    
            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
                courseStore.getState().setNewUpdate('set');
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
        deleteBlog,
        categoryData,
        setCategoryData,
        categoryErrors,
        addCategory,
        editCategory,
        deleteCategory,
        handleCategoryChange,
        handleCategoryFileChange,
        faqData,
        setFaqData,
        faqErrors,
        addFaq,
        editFaq,
        deleteFaq,
        handleFaqChange,
        search,
        keyword,
        setKeyword,
        search_course,
    }
}