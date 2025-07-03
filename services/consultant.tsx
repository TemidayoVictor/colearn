import axiosInstance from "@/utils/api";
import { handleApiResponse, handleApiError } from '@/utils/handleApiResponse';
import { School, Certification, Slot } from "@/app/Types/types";
import { courseStore } from "@/zustand/courseStore";

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
    // setUploading(true);
    courseStore.getState().setUploading(true);

    try {
        const response = await axiosInstance.post("/submit-intro-video", {
            instructorId,
            video,
          }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },

            onUploadProgress: (progressEvent) => {
                const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                // setProgress(percent);
                courseStore.getState().setProgress(percent);
            },
        });
        
        // setUploading(false);
        courseStore.getState().setUploading(false);
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const submit_application = async (instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/submit-application", {instructorId});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const create_consultant_account = async (instructorId: string | undefined) => {
    
    try {
        const response = await axiosInstance.post("/create-consultant-account", {instructorId});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const set_availability = async (
    consultantId: number | undefined,
    rate: string | undefined, 
    type: string | undefined | null,
    slots: Slot[],
) => {
    try {
        const response = await axiosInstance.post("/set-availability", {
            consultantId,
            rate,
            type,
            slots,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_all_consultants = async () => {
    try {
        const response = await axiosInstance.get("/get-all-consultants");
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_consultant = async (consultantId: string | undefined,) => {
    try {
        const response = await axiosInstance.post("/get-consultant", {consultantId});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const get_sessions = async (userId: number | undefined) => {
    try {
        const response = await axiosInstance.post("/get-sessions", {userId});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const book_session = async (
    consultantId: number | undefined,
    userId: number | undefined,
    date: string | undefined, 
    start_time: string | undefined,
    duration: number | undefined,
    note: string | undefined | null,
    user_time: string | undefined,
    consultant_date: string | undefined,
) => {
    try {
        const response = await axiosInstance.post("/book-session", {
            consultantId,
            userId,
            date,
            start_time,
            duration,
            note,
            user_time,
            consultant_date,
        });
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}

export const update_session = async (formData: {
    id: string | undefined,
    date: string | undefined, 
    start_time: string | undefined,
    duration: string | undefined,
    note: string | undefined | null,
    user_start_time: string | undefined,
    consultant_date: string | undefined,
}) => {
    try {
        const response = await axiosInstance.post("/update-session-user", {formData});
        return handleApiResponse(response);
    }

    catch(error: any) {
        return handleApiError(error)
    }
}