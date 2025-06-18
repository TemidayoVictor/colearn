import axiosInstanceWeb from "@/utils/web";
import { useRouter } from 'next/navigation';
import { showErrorToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";

export const useAuth = () => {
    const router = useRouter();
    const { setUser, setStudent } = authStore.getState();

    const checkAuth = async () => {
        try {
            const response = await axiosInstanceWeb.get("/user");
            if (response.status === 200) {
                const { user, student } = response.data;

                // store user globally
                setUser(user);
                
                // check userType and store
                if (user.type === 'student' && student) {
                    setStudent(student);
                }
            }

            else {
                showErrorToast("Session Expired. Please Log in");
                router.push('/authentication/login');
            }
        } catch (error) {
            console.log(error);
            showErrorToast("Session Expired. Please Log in");
            router.push('/authentication/login');
        }
    };

    return checkAuth;
};
