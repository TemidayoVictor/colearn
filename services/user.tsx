import axiosInstance from "@/utils/api";
import axiosInstanceWeb from "@/utils/web";
import { handleApiError, handleApiResponse } from "@/utils/handleApiResponse";
import { GeneralSettings } from "@/app/Types/types";

export const get_user_transactions = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/get-user-transactions", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const student_dashboard = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/student-dashboard", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const user_profile = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/user-profile", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const instructor_dashboard = async (id: number | undefined) => {
    try {
        const response = await axiosInstance.post("/instructor-dashboard", {
            id,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const web_data = async () => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });
    const response = await axiosInstanceWeb.get("/web-data");
    return handleApiResponse(response);
  } 
  
  catch (error: any) {
    return handleApiError(error)
  }
};