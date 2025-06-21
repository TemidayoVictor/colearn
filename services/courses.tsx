import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { courseStore } from "@/zustand/courseStore";

export const upload_course = async (formData: {
    title: string;
    description: string;
    who_can_enroll: string;
    price: number;
    is_free: boolean;
}, categories: string[], userId: number | null | undefined) => {
    try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('who_can_enroll', formData.who_can_enroll);
        data.append('price', String(formData.price));
        data.append('is_free', String(formData.is_free));
        data.append('userId', String(userId));

        categories.forEach((category, index) => {
            data.append(`categories[${index}]`, category);
        });

        const response = await axiosInstance.post("/upload-course", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const add_module = async (formData: {
    title: string;
    description: string;
}, courseId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/upload-module", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_modules = async (courseId: string | undefined) => {
    try {
        const data = new FormData();
        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/all-course-modules", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_course_details = async (courseId: string) => {
    try {
        const data = new FormData();

        data.append('courseId', courseId);

        const response = await axiosInstance.post("/get-course-details", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const upload_video = async (formData: {
    title: string;
    video: File | null;
    duration: number;
}, moduleId: string | undefined) => {

    // setUploading(true);
    courseStore.getState().setUploading(true);

    try {
        const data = new FormData();

        if (formData.video) {
            data.append('video', formData.video);
        }

        data.append('title', formData.title);
        data.append('duration', String(formData.duration));
        data.append('moduleId', String(moduleId));

        const response = await axiosInstance.post("/upload-video", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            
            onUploadProgress: (progressEvent) => {
                const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                // setProgress(percent);
                courseStore.getState().setProgress(percent);
            },

        });
        // setUploading(false);
        courseStore.getState().setUploading(false);
        return handleApiResponse(response);
    }

    catch(error: any) {
        // setUploading(false);
        courseStore.getState().setUploading(false);
        return handleApiError(error)
    }
}

export const get_module_videos = async (moduleId: string | undefined) => {

    try {
        const data = new FormData();
        data.append('moduleId', String(moduleId));

        const response = await axiosInstance.post("/get-module-videos", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}