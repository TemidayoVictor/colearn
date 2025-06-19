import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { ApiResponseType, ExperienceType } from "@/app/Types/types";

export const verify_otp = async (otp: number, userId: number | null | undefined): Promise<ApiResponseType> => {
    try {
        const response = await axiosInstance.post("/verify-otp-onboarding", {
            otp,
            userId,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const resend_otp = async (userId: number | null | undefined): Promise<ApiResponseType> => {
    try {
        const response = await axiosInstance.post("/resend-otp-onboarding", {
            userId,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const select_account = async (userId: number | null | undefined, selected:string): Promise<ApiResponseType> => {
    try {
        const response = await axiosInstance.post("/select-account", {
            userId,
            selected,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_details = async (
    formData: {
        profilePhoto: File | null;
        gender: string;
        country: string;
        phone: string;
        country_phone_code: number;
        country_iso: string;
        country_iso3: string;
    }, 
    languages: string[], userId: number | undefined) => {
    
    try {
        const data = new FormData();

        if (formData.profilePhoto) {
            data.append('profile_photo', formData.profilePhoto);
        }
      
        data.append('gender', formData.gender);
        data.append('country', formData.country);
        data.append('phone', formData.phone);
        data.append('country_phone_code', String(formData.country_phone_code));
        data.append('country_iso', formData.country_iso);
        data.append('country_iso3', formData.country_iso3);
        data.append('userId', String(userId));

        languages.forEach((language, index) => {
            data.append(`languages[${index}]`, language);
        });

        const response = await axiosInstance.post("/submit-details", data, {
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

export const add_preferences = async ( preferences: string[] | null, userId: number | undefined) => {
    try {
        const data = new FormData();

        preferences?.forEach((preferences, index) => {
            data.append(`preferences[${index}]`, preferences);
        });

        data.append('userId', String(userId));

        const response = await axiosInstance.post("/add-preferences", data);

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_professional_details = async (
    formData: {
        title: string;
        headline: string;
        category: string;
    }, 
    userId: number | undefined) => {
    
    try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('headline', formData.headline);
        data.append('category', formData.category);
        data.append('userId', String(userId));

        const response = await axiosInstance.post("/submit-professional-details", data);

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_experiences = async (experiences: ExperienceType[], userId: number | undefined) => {
    
    try {
        const response = await axiosInstance.post("/submit-experiences", {
            experiences,
            userId,
          });

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}