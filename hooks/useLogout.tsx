import { logout } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { handleCsrfError } from "@/utils/handleCsrfTokenError";
import { authStore } from "@/zustand/authStore";
import { utilitiesStore } from "@/zustand/utilitiesStore";

export const useLogout = () => {
    const router = useRouter();
    const logoutHook = async(setLoading: (value: boolean) => void) => {
        setLoading(true)
        try {
            const response = await logout();
            if (response.success) {
                authStore.getState().clearUser();
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