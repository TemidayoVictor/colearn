import { ApiResponseType } from "@/app/Types/types";
export const handleApiResponse = (response: any): ApiResponseType => {
    const { status, message, data, errors } = response?.data || {};
  
    if (status === "success") {
      return { success: true, message, data };
    }
  
    return {
      success: false,
      message: message || "Something went wrong",
      errors: errors || {},
    };
};

export const handleApiError = (error: any): ApiResponseType => {
    return {
      success: false,
      message: error?.message || "Unexpected error occurred",
      errors: {},
    };
};
  