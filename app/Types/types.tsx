export type Experience = {
    title: string;
    company: string;
    duration: string;
    description: string;
};

export type ExperienceType = {
    title: String,
    organization: String,
    description: String,
    start_date: String,
    end_date: String,
    currently_working: boolean,
}

export type Bank = {
    bank: string;
    account_number: string;
    account_name: string;
}

export type ApiResponseType =
  | { success: true; message: any; data: any }
  | { success: false; message: any; errors: any };

export type Course = {
    id: number;
    instructor_id: number;
    title: string;
    description: string;
    who_can_enroll: string;
    thumbnail: string;
    is_published: boolean;
    price: number;
    is_free: boolean;
}

export type Module = {
    id: number;
    course_id: number;
    title: string;
    description: string;
    order: number;
    videos: number;
}

export type Video = {
    id: number;
    course_section_id: number;
    title: string;
    video_url: string;
    duration: number;
    order: number;
}

export type Resource = {
    id: number;
    course_id: number;
    course_section_id: string | undefined;
    course_video_id: string | undefined;
    title: string;
    type: string;
    category: string;
    file_path: string | null;
    external_url: string | null;
}

export type Category = {
    id: number;
    name: string;
}