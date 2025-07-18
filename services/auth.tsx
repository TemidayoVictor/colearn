import axiosInstance from "@/utils/api";
import axiosInstanceWeb from '@/utils/web';
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';

export const createAccount = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/createAccount", formData);
    return handleApiResponse(response);
  } 
  
  catch (error: any) {
    return handleApiError(error)
  }
};

export const login = async (loginData: {
    email: string;
    password: string;
  }) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstanceWeb.post("/login", loginData);
    return handleApiResponse(response);
  } 

  catch (error: any) {
    return handleApiError(error)
  }
};

export const logout = async() => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstanceWeb.post("/logout");
    return handleApiResponse(response);
  }

  catch(error: any) {
    return handleApiError(error)
  }
}

export const forgot_password = async (formData: {
  email: string
}) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/forgot-password", formData);
    return handleApiResponse(response);
  } 

  catch (error: any) {
    return handleApiError(error)
  }
};

export const verify_reset_code = async (formData: {
  email: string,
  code: number,
}) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/verify-reset-code", formData);
    return handleApiResponse(response);
  } 

  catch (error: any) {
    return handleApiError(error)
  }
};

export const reset_password = async (formData: {
  email: string,
  code: number | undefined,
  password: string
}) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });

    const response = await axiosInstance.post("/reset-password", formData);
    return handleApiResponse(response);
  } 

  catch (error: any) {
    return handleApiError(error)
  }
};

export const add_admin = async (formData: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;   
}) => {
  try {
    await axiosInstanceWeb.get(`/sanctum/csrf-cookie?refresh=${Date.now()}`, {
      withCredentials: true,
    });
    
    const data = new FormData();
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('role', formData.role);

    const response = await axiosInstance.post("/add-admin", data);

    return handleApiResponse(response);
  }

  catch(error: any) {
      return handleApiError(error)
  }
}
