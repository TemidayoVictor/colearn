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


export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    type: string | null;
    email_verified_at: string | null;
    email_verification_code: number;
    profile_progress: string | null;
    country_iso3: string;
    timezone: string | null;
    profile_photo: string | null;
};
  
export type Student = {
    id: number;
    user_id: number;
    phone: string | null;
    profile_photo: string | null;
    bio: string | null;
    country: string | null;
    gender: string | null;
    is_active: string | null;
    languages: string[];
}
  
export type Instructor = {
    id: string | undefined;
    user_id: number;
    title: string;
    professional_headline: string;
    phone: string | null;
    profile_photo: string | null;
    bio: string | null;
    country: string | null;
    gender: string | null;
    website: string | null;
    linkedin_url: string | null;
    twitter_url: string | null;
    youtube_url: string | null;
    is_approved: string | null;
    is_active: string | null;
    disciplines: string | null;
    languages: string[];
    category: string;
    consultant_active: boolean;
    intro_video_url: string;
    consultant_progress: number;
    experience_years: string;
    user: User | null;
}

export type Instructors = {
    id: string | undefined;
    user_id: number;
    title: string;
    professional_headline: string;
    phone: string | null;
    profile_photo: string | null;
    bio: string | null;
    country: string | null;
    gender: string | null;
    website: string | null;
    linkedin_url: string | null;
    twitter_url: string | null;
    youtube_url: string | null;
    is_approved: string | null;
    is_active: string | null;
    disciplines: string | null;
    languages: string[];
    category: string;
    consultant_active: boolean;
    intro_video_url: string;
    consultant_progress: number;
    experience_years: string;
    user: User;
}

export type Consultant = {
    id: number;
    instructor_id: number;
    hourly_rate: string | undefined;
    available_days: string | null;
    available_time_start: string | null;
    available_time_end: string | null;
    type: string | null;
    instructor: Instructor | null;
}

export type Consultants = {
    id: number;
    instructor_id: number;
    hourly_rate: string | undefined;
    available_days: string | null;
    available_time_start: string | null;
    available_time_end: string | null;
    type: string | null;
    instructor: Instructors;
}

export type Course = {
    id: string | undefined;
    instructor_id: number;
    title: string;
    description: string;
    who_can_enroll: string;
    thumbnail: string;
    is_published: boolean;
    price: number;
    is_free: boolean;
    created_at: Date
    videos_count: number;
    total_duration: number | null;
    level: string | null;
    instructor: Instructor;
}

export type Module = {
    id: string | undefined;
    course_id: number;
    title: string;
    description: string;
    order: number;
    videos_count: number;
}

export type Video = {
    id: string | undefined;
    course_section_id: number;
    title: string;
    video_url: string;
    duration: number;
    order: number;
}

export type Resource = {
    id: string | undefined;
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

export type School = {
    id: string | null | undefined,
    name: string;
    degree: string;
    field_of_study: string;
    start_year: string;
    end_year: string;
}

export type Certification = {
    id: string | null | undefined,
    name: string;
    organization: string;
    iss_date: string;
    exp_date: string;
    credential_url: string;
    image: File | null;
    certificate_file_path: string;
}

export type Slot = {
    id: string | undefined;
    day: string;
    start_time: string;
    end_time: string;
    enabled: boolean;
    consultant_id: number;
};

export type Booking = {
    id: string | undefined;
    user_id: number;
    consultant_id: number;
    date: string | undefined;
    start_time: string | undefined;
    end_time: string | undefined;
    duration: number | undefined;
    amount: string | undefined;
    status: string | undefined;
    note: string | undefined;
    date_string: string | undefined;
    consultant_note: string | undefined;
    payment_status: string | undefined;
    channel: string | undefined;
    booking_type: string | undefined;
    booking_link: string | undefined;
    user_time: string | undefined;
    consultant_date: string | undefined;
    user_end_time: string | undefined;
    consultant: Consultant | null;
    user: User | null;
    cancel_note: string;
    reschedule_time: string | undefined;
    reschedule_note: string | undefined;
    reschedule_date: string | undefined;
    reschedule_date_user: string | undefined;
    reschedule_time_user: string | undefined;
    missed_client: boolean | null;
    missed_consultant: boolean | null;
    missed_client_note: string | undefined;
    missed_consultant_note: string | undefined;
    created_at: string;
}