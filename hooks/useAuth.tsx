import axiosInstanceWeb from "@/utils/web";
import { useRouter } from 'next/navigation';
import { showErrorToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";

export const useAuth = () => {
    const router = useRouter();

    const checkAuth = async () => {
        try {
            const response = await axiosInstanceWeb.get("/user");
            if (response.status === 200) {
                // store user globally
                authStore.getState().setUser(response.data);   
            }

            else {
                showErrorToast("Unauthorized Access. Please Log in");
                router.push('/authentication/login');
            }
        } catch (error) {
            showErrorToast("Unauthorized Access. Please Log in");
            router.push('/authentication/login');
        }
    };

    return checkAuth;
};
