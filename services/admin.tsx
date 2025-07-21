import axiosInstance from "@/utils/api";
import { handleApiError, handleApiResponse } from "@/utils/handleApiResponse";

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