'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { upload_course } from "@/services/courses";
import { useRouter } from 'next/navigation';
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { courseStore } from "@/zustand/courseStore";
import { add_module } from "@/services/courses";

export const UseCourses = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const courseId = courseStore((state) => state.courseId);
    const userId = user?.id;
    const categories = utilitiesStore((state) => state.categories);

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [newUpdate, setNewUpdate] = useState<string>('reset');

    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => {
        setShowModal(key);
    }

    const closeModal = () => setShowModal(null);

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
        price: 10,
        is_free: false,
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false,
        who_can_enroll: false,
        price: false,
        categories: false,
    });

    const [formData2, setFormData2] = useState<{
        title: string;
        description: string;
      }>({
        title: '',
        description: '',
    });

    const [errors2, setErrors2] = useState({
        title: false,
        description: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData2((prev) => ({ ...prev, [name]: value }));
        setErrors2((prev) => ({ ...prev, [name]: false }));
    };

    const uploadCourse = async () => {
        const newErrors = {
            title: formData.title.trim() === '',
            description: formData.description.trim() === '',
            who_can_enroll: formData.who_can_enroll.trim() === '',
            price: !formData.is_free && formData.price === 0,
            categories: selectedItems.length === 0,
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await upload_course(formData, selectedItems, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push(`/instructors/upload-module/${response.data.course.id}`);
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

    const uploadModule = async () => {

        const newErrors = {
            title: formData2.title.trim() === '',
            description: formData2.description.trim() === '',
        };
      
        setErrors2(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await add_module(formData2, courseId);
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
        handleInputChange,
        selectedItems, 
        setSelectedItems,
        handleCheckChange,
        categories,
        uploadModule,
        formData2,
        errors2,
        handleInputChange2,
        openModal,
        showModal,
        closeModal,
    }
}