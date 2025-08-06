import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { courseStore } from "@/zustand/courseStore";
import { Cart, Review } from "@/app/Types/types";

export const get_all_courses = async () => {
    try {
        const response = await axiosInstance.get("/all-courses");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_all_instructor_courses = async (instructorId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('instructorId', String(instructorId));

        const response = await axiosInstance.post("/all-instructors-courses", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const upload_course = async (formData: {
    title: string;
    description: string;
    who_can_enroll: string;
    price: number;
    is_free: boolean;
    course_picture: File | null;
    total_duration: number;
    level: string;
    summary: string;
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
        data.append('total_duration', String(formData.total_duration));
        data.append('level', formData.level);
        data.append('summary', formData.summary);

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
    total_duration: number;
    level: string;
    summary: string;
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
        data.append('total_duration', String(formData.total_duration));
        data.append('level', formData.level);
        data.append('summary', formData.summary);

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

export const get_course_details = async (courseId: string, userId: number | undefined) => {
    try {
        const data = new FormData();

        data.append('courseId', courseId);
        data.append('userId', String(userId))

        const response = await axiosInstance.post("/get-course-details", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_course_student = async (courseId: string) => {
    try {
        const data = new FormData();

        data.append('courseId', courseId);

        const response = await axiosInstance.post("/get-course-student", data);
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
    body: string,
    type: string,
}, moduleId: string | undefined) => {

    // setUploading(true);
    courseStore.getState().setUploading(true);

    try {
        const data = new FormData();

        if (formData.video) {
            data.append('video', formData.video);
        }

        data.append('title', formData.title);
        data.append('body', formData.body);
        data.append('type', formData.type);
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
    body: string,
    type: string,
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
        data.append('body', formData.body);
        data.append('type', formData.type);
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

export const add_to_cart = async (userId: number | undefined ,courseId: string | undefined) => {
    try {
        const data = new FormData();

        data.append('userId', String(userId));
        data.append('courseId', String(courseId));

        const response = await axiosInstance.post("/add-to-cart", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_cart = async (userId: number | undefined) => {
    try {
        const data = new FormData();

        data.append('userId', String(userId));

        const response = await axiosInstance.post("/get-cart", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const remove_from_cart = async (id: string | undefined) => {
    try {
        const data = new FormData();

        data.append('id', String(id));

        const response = await axiosInstance.post("/remove-from-cart", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_coupons = async (id: string | undefined) => {
    try {
        const data = new FormData();

        data.append('id', String(id));

        const response = await axiosInstance.post("/get-coupons", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const create_coupon = async ( CouponData:{
    code: string,
    type: string,
    value: string,
    max: string,
    expiry: string,
    amount: string}, instructorId:string | undefined) => {
    try {
        const data = new FormData();

        data.append('code', CouponData.code);
        data.append('type', CouponData.type);
        data.append('value', CouponData.value);
        data.append('usage_limit', CouponData.max);
        data.append('expires_at', CouponData.expiry);
        data.append('amount', CouponData.amount);
        data.append('instructorId', String(instructorId));

        const response = await axiosInstance.post("/create-coupon", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const delete_coupon = async (id: string | undefined) => {
    try {
        const data = new FormData();

        data.append('id', String(id));

        const response = await axiosInstance.post("/delete-coupon", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const add_coupon = async (id: string | null, code: string | undefined) => {
    try {
        const data = new FormData();

        data.append('id', String(id));
        data.append('code', String(code));

        const response = await axiosInstance.post("/add-coupon", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const checkout_calcuate = async (id: number | undefined, cart: Cart[]) => {
    try {
        const response = await axiosInstance.post("/checkout-calculate", {
            id,
            cart,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const enroll = async (id: number | undefined, cart: Cart[]) => {
    try {
        const response = await axiosInstance.post("/enroll", {
            id,
            cart,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const enrolled_courses = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/enrolled-courses", {
            id
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const watch_video = async (
    userId: number | undefined,
    videoId: string | undefined,
    courseId: string | undefined,
) => {
    try {
        console.log(`${userId} ${videoId} ${courseId}`)
        const response = await axiosInstance.post("/watch-video", {
            userId,
            videoId,
            courseId,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const mark_video_as_complete = async (
    userId: number | undefined,
    videoId: string | undefined,
    courseId: string | undefined,
) => {
    try {
        const response = await axiosInstance.post("/mark-video-as-complete", {
            userId,
            videoId,
            courseId,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const add_review = async (formData: Review) => {
    try {
        const data = new FormData();

        data.append('user_id', String(formData.user_id));
        data.append('course_id', String(formData.course_id));
        data.append('title', formData.title);
        data.append('rating', String(formData.rating));
        data.append('review', formData.review);

        const response = await axiosInstance.post("/review", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const course_search = async (keyword: string) => {
    try {
        const data = new FormData();

        data.append('keyword', keyword);

        const response = await axiosInstance.post("/course-search", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

