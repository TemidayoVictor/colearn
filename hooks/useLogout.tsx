'use client';
import React, {useState} from "react";
import { logout } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { handleCsrfError } from "@/utils/handleCsrfTokenError";
import { authStore } from "@/zustand/authStore";
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { consultantStore } from "@/zustand/consultantStore";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { instructorStore } from "@/zustand/instructorStore";

export const useLogout = () => {
    const router = useRouter();

    const logoutHook = async(setLoading: (value: boolean) => void) => {
        setLoading(true)
        try {
            const response = await logout();
            if (response.success) {
                
                // clear all global states
                authStore.getState().clearUser();
                consultantStore.getState().clearAll();
                courseStore.getState().clearCourses();
                instructorStore.getState().clearAll();
                genralStore.getState().clearAll();
                utilitiesStore.getState().clearUtilities();

                showSuccessToast(response.message)
                router.push('/authentication/login');
                setLoading(false);
            } 

            else {
                const redirected = handleCsrfError(response, router);
                if (!redirected) {
                  showErrorToast(response.message);
                  console.log(response);
                  setLoading(false);
                }
            }
        }

        catch(err:any) {
            console.log(err);
            showErrorToast('Unexpected error occurred');
            setLoading(false);
        }
    }

    return {
        logoutHook
    }
}