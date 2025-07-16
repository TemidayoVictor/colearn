import axiosInstance from "@/utils/api";
import axiosInstanceWeb from '@/utils/web';
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';

export const change_email = async (email: string, id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/change-email", {
            email,
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const verify_email_code = async (email: string,  code: number, id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/verify-email-code", {
            email,
            code,
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const change_password = async (current_password: string, password: string, id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/change-password", {
            current_password,
            password,
            id,

        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const deactivate_account = async (id: number | undefined, reason: string) => {
    try {
        const response = await axiosInstance.post("/deactivate-account", {
            id,
            reason,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const reactivate_account = async (id: number | undefined, reason: string | null) => {
    try {
        const response = await axiosInstance.post("/reactivate-account", {
            id,
            reason,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}