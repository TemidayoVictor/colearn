'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { useRouter } from 'next/navigation';
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import {    
            upload_course, edit_course, delete_course,
            add_module, edit_module, delete_module,
            upload_video, edit_video, delete_video,
            upload_resource, edit_resource, delete_resource,
            publish_course, add_to_cart, remove_from_cart,
            create_coupon,delete_coupon, add_coupon, checkout_calcuate,
            enroll, mark_video_as_complete, add_review,
        } from "@/services/courses";
import { Module, Video, Resource, Cart, Review } from "@/app/Types/types";

export const UseCourses = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const instructor = authStore((state) => state.instructor);

    const courseId = courseStore((state) => state.courseId);
    const moduleId = courseStore((state) => state.moduleId);
    const videoId = courseStore((state) => state.videoId);
    const resourceId = courseStore((state) => state.resourceId);

    const cart = genralStore((state) => state.cart);

    const userId = user?.id;
    const instructorId = instructor?.id;
    const categories = utilitiesStore((state) => state.categories);

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);

    const [showModal, setShowModal] = useState<string | null>(null);
    const fileInputRef = useRef<(HTMLInputElement | null)>(null);
    const [fileName, setFileName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const [couponCode, setCouponCode] = useState<string | undefined>('')

    const [checkoutVerified, setCheckoutVerified] = useState<boolean>(false);
    const [checkoutTotal, setCheckoutTotal] = useState<string>('');

    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        who_can_enroll: string;
        price: number;
        is_free: boolean;
        course_picture: File | null;
        total_duration: number;
        level: string;
      }>({
        title: '',
        description: '',
        who_can_enroll: '',
        price: 10,
        is_free: false,
        course_picture: null,
        total_duration: 1,
        level: '',
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false,
        who_can_enroll: false,
        price: false,
        categories: false,
        total_duration: false,
        level: false
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
        moduleId: string | undefined;
      }>({
        title: '',
        description: '',
        order: 0,
        moduleId: '',
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
        body: string,
        type: string,
      }>({
        title: '',
        video: null,
        duration: 0,
        body: '',
        type: '',
    });

    const [errors3, setErrors3] = useState({
        title: false,
        video: false,
        duration:false,
        body: false,
        type: false,
    });

    const [formData3b, setFormData3b] = useState<{
        title: string;
        video: File | null;
        duration: number;
        order: number;
        videoId: string | undefined;
        body: string,
        type: string,
      }>({
        title: '',
        video: null,
        duration: 0,
        order: 0,
        videoId: '',
        body: '',
        type: '',
    });

    const [errors3b, setErrors3b] = useState({
        title: false,
        duration:false,
        order: false,
        videoId: false,
        body: false,
        type: false,
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
        resourceId: string | undefined;
      }>({
        title: '',
        type: '',
        category: '',
        moduleId: '',
        videoId: '',
        document: null,
        url: '',
        resourceId: '',

    });

    const [errors4b, setErrors4b] = useState({
        title: false,
        type: false,
        category: false,
        url: false,
        resourceId:false
    });

    const [couponData, setCouponData] = useState<{
        code: string;
        type: string;
        value: string;
        max: string;
        expiry: string;
        amount: string;
      }>({
        code: '',
        type: '',
        value: '',
        max: '',
        expiry: '',
        amount: '',
    });

    const [couponError, setCouponError] = useState({
        type: false,
        value: false,
        expiry: false,
    });

    const [reviewData, setReviewData] = useState<Review>({
        id: '',
        user_id: '',
        course_id: '',
        title: '',
        review: '',
        rating: 0,
    });

    const [reviewError, setReviewError] = useState({
        title: false,
        review: false,
        rating: false,
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

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCouponData((prev) => ({ ...prev, [name]: value }));
        setCouponError((prev) => ({ ...prev, [name]: false }));
    };

    const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReviewData((prev) => ({ ...prev, [name]: value }));
        setReviewError((prev) => ({ ...prev, [name]: false }));
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
            total_duration: formData.total_duration === 0,
            level: formData.level === '',
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
                router.push(`/instructors/manage-course-data/${response.data.course.id}`);
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
            total_duration: formData.total_duration === 0,
            level: formData.level === '',
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

    const deleteCourse = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_course(courseId);
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

    const deleteModule = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_module(moduleId);
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
            video: formData3.type === 'video' && formData3.video === null,
            duration: formData3.duration === 0,
            body: formData3.type === 'text' && formData3.body === '',
            type: formData3.type === '',
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
            videoId: formData3b.videoId === '',
            body: formData3b.type === 'text' && formData3b.body === '',
            type: formData3b.type === '',
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

    const deleteVideo = async () => {
        
        try {
            setButtonLoader(true)
            const response = await delete_video(videoId);
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
            resourceId: formData4b.resourceId == '',
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

    const deleteResource = async () => {
        try {
            setButtonLoader(true)
            const response = await delete_resource(resourceId);
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

    const publishCourse = async () => {
        try {
            setButtonLoader(true)
            const response = await publish_course(courseId);
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

    const addToCart = async (courseId: string | undefined) => {
        try {
            setButtonLoader(true)
            const response = await add_to_cart(userId, courseId);
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

    const removeFromCart = async (id: string | undefined) => {
        try {
            setButtonLoader(true)
            const response = await remove_from_cart(id);
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

    const createCoupon = async () => {

        const newErrors = {
            type: couponData.type.trim() === '',
            value: couponData.value.trim() === '',
            expiry: couponData.expiry.trim() === '',
        };
      
        setCouponError(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await create_coupon(couponData, instructorId);
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

    const deleteCoupon = async (id: string | undefined) => {
        try {
            setButtonLoader(true)
            const response = await delete_coupon(id);
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

    const addCoupon = async (id: string | null) => {
        try {
            setButtonLoader(true)
            const response = await add_coupon(id, couponCode);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
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

    const checkoutCalculate = async () => {
        try {
            setButtonLoader(true)
            const response = await checkout_calcuate(userId, cart);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setCheckoutVerified(true);
                setCheckoutTotal(response.data.total);
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

    const enrollStudent = async () => {
        try {
            setButtonLoader(true)
            const response = await enroll(userId, cart);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push('/students/courses');
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

    const markVideoAsComplete = async (
        userId: number | undefined, 
        videoId: string | undefined, 
        courseId: string | undefined) => {
        try {
            setButtonLoader(true)
            const response = await mark_video_as_complete(userId, videoId, courseId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
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

    const addReview = async () => {

        const newErrors = {
            title: reviewData.title.trim() === '',
            rating: reviewData.rating === 0,
            review: reviewData.review.trim() === '',
        };
      
        setReviewError(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        try {
            setButtonLoader(true)
            const response = await add_review(reviewData);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
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
        publishCourse,
        deleteCourse,
        deleteModule,
        deleteVideo,
        deleteResource,
        addToCart,
        removeFromCart,
        couponData,
        couponError,
        handleCouponChange,
        createCoupon,
        deleteCoupon,
        addCoupon,
        couponCode, 
        setCouponCode,
        checkoutCalculate,
        checkoutVerified,
        checkoutTotal,
        enrollStudent,
        markVideoAsComplete,
        addReview,
        reviewData,
        setReviewData,
        reviewError,
        handleReviewChange,
    }
}