import axios from 'axios';
import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';

export const createAccount = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
  try {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/createAccount", formData);
    return handleApiResponse(response);
  } 
  
  catch (error: any) {
    return handleApiError(error)
  }
};

export const logout = async() => {
  try {
    
    await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/logout");
    return handleApiResponse(response);
  }

  catch(error: any) {
    return handleApiError(error)
  }
}
