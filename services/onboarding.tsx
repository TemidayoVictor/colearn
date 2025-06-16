import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { ApiResponseType } from "@/app/Types/types";

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