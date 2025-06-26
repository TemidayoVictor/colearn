import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { courseStore } from "@/zustand/courseStore";

export const upload_course = async (formData: {
    title: string;
    description: string;
    who_can_enroll: string;
    price: number;
    is_free: boolean;
    course_picture: File | null;
}, categories: string[], userId: number | null | undefined) => {
    try {
        const data = new FormData();

        if (formData.course_picture) {
            data.append('course_picture', formData.course_picture);
        }

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('who_can_enroll', formData.who_can_enroll);
        data.append('price', String(formData.price));
        data.append('is_free', String(formData.is_free));
        data.append('userId', String(userId));

        categories.forEach((category, index) => {
            data.append(`categories[${index}]`, category);
        });

        const response = await axiosInstance.post("/upload-course", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const edit_course = async (formData: {
    title: string;
    description: string;
    who_can_enroll: string;
    price: number;
    is_free: boolean;
    course_picture: File | null; 
}, categories: string[], courseId: string | undefined) => {
    try {
        const data = new FormData();

        if (formData.course_picture) {
            data.append('course_picture', formData.course_picture);
        }

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('who_can_enroll', formData.who_can_enroll);
        data.append('price', String(formData.price));
        data.append('is_free', String(formData.is_free));
        data.append('courseId', String(courseId));

        categories.forEach((category, index) => {
            data.append(`categories[${index}]`, category);
        });

        const response = await axiosInstance.post("/edit-course", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

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

export const get_course_details_edit = async (courseId: string) => {
    try {
        const data = new FormData();

        data.append('courseId', courseId);

        const response = await axiosInstance.post("/get-course-details-edit", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const delete_course = async (courseId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/delete-course", data);
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

export const edit_module = async (formData: {
    title: string;
    description: string;
    order: number;
    moduleId: string | undefined;
}, courseId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('moduleId', String(formData.moduleId));
        data.append('order', String(formData.order));
        data.append('courseId', String(courseId)); 

        const response = await axiosInstance.post("/edit-module", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_module_details = async (moduleId: string | undefined) => {

    try {
        const data = new FormData();
        data.append('moduleId', String(moduleId));

        const response = await axiosInstance.post("/get-module-details", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const delete_module = async (moduleId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('moduleId', String(moduleId));

        const response = await axiosInstance.post("/delete-module", data);
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

export const edit_video = async (formData: {
    title: string;
    video: File | null;
    duration: number;
    order: number;
    videoId: string | undefined;
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
        data.append('order', String(formData.order));
        data.append('videoId', String(formData.videoId));
        data.append('moduleId', String(moduleId));

        const response = await axiosInstance.post("/edit-video", data, {
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

export const delete_video = async (videoId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('videoId', String(videoId));

        const response = await axiosInstance.post("/delete-video", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const upload_resource = async (formData: {
    title: string;
    type: string;
    category: string;
    moduleId: string | undefined;
    videoId: string | undefined;
    document: File | null;
    url: string | undefined;
}, courseId: string | undefined) => {
    
    // setUploading(true);
    courseStore.getState().setUploading(true);
    
    try {
        const data = new FormData();

        if (formData.document) {
            data.append('document', formData.document);
        }

        data.append('title', formData.title);
        data.append('type', formData.type);
        data.append('category', formData.category);
        data.append('moduleId', String(formData.moduleId));
        data.append('videoId', String(formData.videoId));
        data.append('url', String(formData.url));
        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/upload-resource", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            
            // onUploadProgress: (progressEvent) => {
            //     const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            //     // setProgress(percent);
            //     courseStore.getState().setProgress(percent);
            // },

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


export const edit_resource = async (formData: {
    title: string;
    type: string;
    category: string;
    moduleId: string | undefined;
    videoId: string | undefined;
    document: File | null;
    url: string | undefined;
    resourceId: string | undefined;
}) => {
    
    // setUploading(true);
    courseStore.getState().setUploading(true);
    
    try {
        const data = new FormData();

        if (formData.document) {
            data.append('document', formData.document);
        }

        data.append('title', formData.title);
        data.append('type', formData.type);
        data.append('category', formData.category);
        data.append('moduleId', String(formData.moduleId));
        data.append('videoId', String(formData.videoId));
        data.append('url', String(formData.url));
        data.append('resourceId', String(formData.resourceId));

        const response = await axiosInstance.post("/edit-resource", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            
            // onUploadProgress: (progressEvent) => {
            //     const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            //     // setProgress(percent);
            //     courseStore.getState().setProgress(percent);
            // },

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

export const delete_resource = async (resourceId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('resourceId', String(resourceId));

        const response = await axiosInstance.post("/delete-resource", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const publish_course = async (courseId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/publish-resource", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}