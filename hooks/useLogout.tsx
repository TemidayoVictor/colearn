import { logout } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { handleCsrfError } from "@/utils/handleCsrfTokenError";
export const useLogout = () => {
    const router = useRouter();
    const logoutHook = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const response = await logout();
            if (response.success) {
                showSuccessToast(response.message)
                router.push('/authentication/login');
            } 

            else {
                const redirected = handleCsrfError(response, router);
                if (!redirected) {
                  showErrorToast(response.message);
                  console.log(response);
                }
            }
        }

        catch(err:any) {
            showErrorToast('Unexpected error occurred');
        }
    }

    return {
        logoutHook
    }
}