import React from "react";
import axiosInstance from "@/utils/api";

export const createAccount = async (formData: {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}) => {
    const response = await axiosInstance.post("/createAccount", formData);
    const {status, message, data} = response.data;

    if (status === 'success') {
      return { success: true, message, data };
    } else {
      // handle if status is 'error' even though it's in try block
      return { success: false, message: message || 'Something went wrong', errors: data?.errors || {} };
    }
}