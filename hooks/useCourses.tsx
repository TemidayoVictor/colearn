'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from 'next/navigation';
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { courseStore } from "@/zustand/courseStore";
import { upload_course, edit_course, add_module, edit_module, upload_video, edit_video, upload_resource, edit_resource } from "@/services/courses";
import { Module, Video, Resource } from "@/app/Types/types";

export const UseCourses = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const courseId = courseStore((state) => state.courseId);
    const moduleId = courseStore((state) => state.moduleId);
    const userId = user?.id;
    const categories = utilitiesStore((state) => state.categories);

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const [showModal, setShowModal] = useState<string | null>(null);
    const fileInputRef = useRef<(HTMLInputElement | null)>(null);
    const [fileName, setFileName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        who_can_enroll: string;
        price: number;
        is_free: boolean;
        course_picture: File | null;
      }>({
        title: '',
        description: '',
        who_can_enroll: '',
        price: 10,
        is_free: false,
        course_picture: null,
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false,
        who_can_enroll: false,
        price: false,
        categories: false,
        // course_picture: false
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

    const [formData2b, setFormData2b] = useState<{
        title: string;
        description: string;
        order: number;
        moduleId: number;
      }>({
        title: '',
        description: '',
        order: 0,
        moduleId: 0,
    });

    const [errors2b, setErrors2b] = useState({
        title: false,
        description: false,
        order: false
    });

    const [formData3, setFormData3] = useState<{
        title: string;
        video: File | null;
        duration: number;
      }>({
        title: '',
        video: null,
        duration: 0
    });

    const [errors3, setErrors3] = useState({
        title: false,
        video: false,
        duration:false,
    });

    const [formData3b, setFormData3b] = useState<{
        title: string;
        video: File | null;
        duration: number;
        order: number;
        videoId: number;
      }>({
        title: '',
        video: null,
        duration: 0,
        order: 0,
        videoId: 0,
    });

    const [errors3b, setErrors3b] = useState({
        title: false,
        duration:false,
        order: false,
        videoId: false,
    });

    const [formData4, setFormData4] = useState<{
        title: string;
        type: string;
        category: string;
        moduleId: string | undefined;
        videoId: string | undefined;
        document: File | null;
        url: string | undefined;
      }>({
        title: '',
        type: '',
        category: '',
        moduleId: '',
        videoId: '',
        document: null,
        url: '',

    });

    const [errors4, setErrors4] = useState({
        title: false,
        type: false,
        category: false,
        document: false,
        url: false,
    });

    const [formData4b, setFormData4b] = useState<{
        title: string;
        type: string;
        category: string;
        moduleId: string | undefined;
        videoId: string | undefined;
        document: File | null;
        url: string | undefined;
        resourceId: number;
      }>({
        title: '',
        type: '',
        category: '',
        moduleId: '',
        videoId: '',
        document: null,
        url: '',
        resourceId: 0,

    });

    const [errors4b, setErrors4b] = useState({
        title: false,
        type: false,
        category: false,
        url: false,
        resourceId:false
    });

    const openModal = (key: string) => {
        setShowModal(key);
    }

    const openModalEditModule = (key: string, item:Module) => {
        courseStore.getState().setModule(item);
        setShowModal(key);
    }

    const openModalEditVideo = (key: string, item:Video) => {
        courseStore.getState().setVideo(item);
        setShowModal(key);
    }

    const openModalEditResource = (key: string, item:Resource) => {
        courseStore.getState().setResource(item);
        setShowModal(key);
    }

    const closeModal = () => setShowModal(null);

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

    const handleInputChange2b = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData2b((prev) => ({ ...prev, [name]: value }));
        setErrors2b((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData3((prev) => ({ ...prev, [name]: value }));
        setErrors3((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange3b = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData3b((prev) => ({ ...prev, [name]: value }));
        setErrors3b((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange4 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData4((prev) => ({ ...prev, [name]: value }));
        setErrors4((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange4b = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData4b((prev) => ({ ...prev, [name]: value }));
        setErrors4b((prev) => ({ ...prev, [name]: false }));
    };
    
    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setFileName(file.name);
            setFormData((prev) => ({
                ...prev,
                course_picture: file
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && file.type.startsWith("video/")) {
            setFileName(file.name);
            setFormData3((prev) => ({
                ...prev,
                video: file
            }));
        }
    };

    const handleFileChangeb = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && file.type.startsWith("video/")) {
            setFileName(file.name);
            setFormData3b((prev) => ({
                ...prev,
                video: file
            }));
        }
    };

    const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setFileName(file.name);
            setFormData4((prev) => ({
                ...prev,
                document: file
            }));
        }
    };

    const handleFileChange2b = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setFileName(file.name);
            setFormData4b((prev) => ({
                ...prev,
                document: file
            }));
        }
    };

    const uploadCourse = async () => {
        const newErrors = {
            title: formData.title.trim() === '',
            description: formData.description.trim() === '',
            who_can_enroll: formData.who_can_enroll.trim() === '',
            price: !formData.is_free && formData.price === 0,
            categories: selectedItems.length === 0,
            // course_picture: formData.course_picture == null
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
                router.push(`/instructors/upload-course-data/${response.data.course.id}`);
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

    const editCourse = async () => {
        const newErrors = {
            title: formData.title.trim() === '',
            description: formData.description.trim() === '',
            who_can_enroll: formData.who_can_enroll.trim() === '',
            price: !formData.is_free && formData.price === 0,
            categories: selectedItems.length === 0,
            // course_picture: formData.course_picture == null
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await edit_course(formData, selectedItems, courseId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push(`/instructors/courses`);
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
            description: formData2.description === '',
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

    const editModule = async () => {

        const newErrors = {
            title: formData2b.title.trim() === '',
            description: formData2b.description === '',
            order: formData2b.order === 0,
        };
      
        setErrors2b(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        console.log(formData2b)

        try {
            setButtonLoader(true)
            const response = await edit_module(formData2b, courseId);
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

    const uploadVideo = async () => {

        const newErrors = {
            title: formData3.title.trim() === '',
            video: formData3.video === null,
            duration: formData3.duration === 0,
        };
      
        setErrors3(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await upload_video(formData3, moduleId);
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

    const editVideo = async () => {

        const newErrors = {
            title: formData3b.title.trim() === '',
            duration: formData3b.duration === 0,
            order: formData3b.order === 0,
            videoId: formData3b.videoId === 0,
        };
      
        setErrors3b(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await edit_video(formData3b, moduleId);
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

    const uploadResource = async () => {

        const newErrors = {
            title: formData4.title.trim() === '',
            category: formData4.category.trim() === '',
            type: formData4.type.trim() === '',
            document: formData4.type === 'document' && formData4.document === null,
            url: formData4.type === 'link' && formData4.url === '',
        };
      
        setErrors4(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await upload_resource(formData4, courseId);
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

    const editResource = async () => {

        const newErrors = {
            title: formData4b.title.trim() === '',
            category: formData4b.category.trim() === '',
            type: formData4b.type.trim() === '',
            url: formData4b.type === 'link' && formData4b.url === '',
            resourceId: formData4b.resourceId == 0,
        };
      
        setErrors4b(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        console.log(formData4b);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await edit_resource(formData4b);
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
        formData,
        errors,
        setFormData,
        buttonLoader,
        uploadCourse,
        handleFileChange1,
        handleInputChange,
        selectedItems, 
        setSelectedItems,
        handleCheckChange,
        categories,
        uploadModule,
        formData2,
        errors2,
        handleInputChange2,
        formData2b,
        errors2b,
        setFormData2b,
        handleInputChange2b,
        openModal,
        showModal,
        closeModal,
        formData3,
        errors3,
        uploadVideo,
        handleInputChange3,
        formData3b,
        errors3b,
        setFormData3b,
        handleInputChange3b,
        handleFileChangeb,
        fileInputRef,
        handleImageClick,
        handleFileChange,
        fileName,
        formData4,
        errors4,
        uploadResource,
        handleInputChange4,
        formData4b,
        errors4b,
        setFormData4b,
        handleInputChange4b,
        handleFileChange2,
        handleFileChange2b,
        loading, 
        setLoading,
        openModalEditModule,
        editCourse,
        editModule,
        setShowModal,
        editVideo,
        openModalEditVideo,
        editResource,
        openModalEditResource,
    }
}