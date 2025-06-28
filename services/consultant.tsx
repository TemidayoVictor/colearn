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

export const edit_schools = async (school: School) => {
    const data = new FormData();

    data.append('id', String(school.id));
    data.append('name', school.name);
    data.append('degree', school.degree);
    data.append('field_of_study', school.field_of_study);
    data.append('start_year', school.start_year);
    data.append('end_year', school.end_year);
    
    try {
        const response = await axiosInstance.post("/edit-schools", data);
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
          }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const edit_certs = async (certification: Certification) => {
    const data = new FormData();

    if (certification.image) {
        data.append('image', certification.image);
    }

    data.append('id', String(certification.id));
    data.append('name', certification.name);
    data.append('organization', certification.organization);
    data.append('iss_date', certification.iss_date);
    data.append('exp_date', certification.exp_date);
    data.append('credential_url', certification.credential_url);
    
    try {
        const response = await axiosInstance.post("/edit-certs", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }) ;
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_intro_video = async (video: File, instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/submit-intro-video", {
            instructorId,
            video,
          }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });

        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}