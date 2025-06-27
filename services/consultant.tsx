import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { School, Certification } from "@/app/Types/types";

export const submit_schools = async (schools: School[], instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/submit-schools", {
            schools,
            instructorId,
          });

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_certs = async (certs: Certification[], instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/submit-certs", {
            certs,
            instructorId,
          });

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}