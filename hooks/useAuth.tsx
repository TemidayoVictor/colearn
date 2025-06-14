import axiosInstance from "@/utils/api";
import { useRouter } from 'next/navigation';
import { showErrorToast } from "@/utils/toastTypes";

export const useAuth = () => {
    const router = useRouter();

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get("/user");
            if (response.status !== 200) {
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
