import axiosInstance from "@/utils/api";
import { handleApiError, handleApiResponse } from "@/utils/handleApiResponse";
import { GeneralSettings, Blog } from "@/app/Types/types";

export const admin_dashboard = async () => {
    try {
        const response = await axiosInstance.get("/admin-dashboard");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_courses = async () => {
    try {
        const response = await axiosInstance.get("/admin-course");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const credit_wallet = async (id: number | undefined, amount: number) => {
    try {
        const response = await axiosInstance.post("/credit-wallet", {
            id,
            amount
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const debit_wallet = async (id: number | undefined, amount: number) => {
    try {
        const response = await axiosInstance.post("/debit-wallet", {
            id,
            amount
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_credit = async (id: number | undefined, amount: number) => {
    try {
        const response = await axiosInstance.post("/admin-credit", {
            id,
            amount
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_debit = async (id: number | undefined, amount: number) => {
    try {
        const response = await axiosInstance.post("/admin-debit", {
            id,
            amount
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const all_transactions = async () => {
    try {
        const response = await axiosInstance.post("/all-transactions");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_transactions = async () => {
    try {
        const response = await axiosInstance.post("/admin-transactions");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_credit_transactions = async () => {
    try {
        const response = await axiosInstance.post("/admin-credit-transactions");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const admin_debit_transactions = async () => {
    try {
        const response = await axiosInstance.post("/admin-debit-transactions");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const all_users_admin = async () => {
    try {
        const response = await axiosInstance.get("/all-users-admin");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_user_details = async (id: string | undefined) => {
    try {
        const response = await axiosInstance.post("/get-user-details", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const update_general_settings = async (formData: GeneralSettings) => {
    try {
        const response = await axiosInstance.post("/update-general-settings", formData);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const withdraw_funds = async (id: number | undefined, amount: number) => {
    try {
        const response = await axiosInstance.post("/withdraw-funds", {
            id,
            amount
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const approve_withdrawal = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/approve-withdrawal", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const reject_withdrawal = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/reject-withdrawal", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const all_unapproved_consultants = async () => {
    try {
        const response = await axiosInstance.get("/all-unapproved-consultants");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const approve_consultant = async (instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/approve-consultant", {instructorId});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const decline_consultant = async (instructorId: string | undefined, reason: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/decline-consultant", {instructorId, reason});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const create_blog = async (formData: Blog) => {
    
    try {
        const data = new FormData();

        if (formData.thumbnail) {
            data.append('thumbnail', formData.thumbnail);
        }

        data.append('user_id', String(formData.user_id));
        data.append('title', formData.title);
        data.append('excerpt', formData.excerpt);
        data.append('body', String(formData.body));
        data.append('is_published', String(formData.is_published));

        const response = await axiosInstance.post("/create-blog", data, {
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

export const edit_blog = async (formData: Blog) => {
    
    try {
        const data = new FormData();

        if (formData.thumbnail) {
            data.append('thumbnail', formData.thumbnail);
        }
        
        data.append('title', formData.title);
        data.append('excerpt', formData.excerpt);
        data.append('body', String(formData.body));

        const response = await axiosInstance.post("/edit-blog", data, {
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

