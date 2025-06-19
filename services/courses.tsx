import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';

export const upload_course = async (formData: {
    title: string;
    description: string;
    who_can_enroll: string;
    price: number;
    is_free: boolean;
}, userId: number | null | undefined) => {
    try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('who_can_enroll', formData.who_can_enroll);
        data.append('price', String(formData.price));
        data.append('is_free', String(formData.is_free));
        data.append('userId', String(userId));

        const response = await axiosInstance.post("/upload-course", data);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}