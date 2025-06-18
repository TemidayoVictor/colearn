import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  type: string | null;
  email_verified_at: string | null;
  email_verification_code: number;
  profile_progress: string | null;
};

type Student = {
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

type Instructor = {
  id: number;
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
}
  
type AuthState = {
  user: User | null;
  student: Student | null;
  instructor: Instructor | null;
  isInitialized: boolean;
  setUser: (user: User) => void;
  setStudent: (student: Student) => void;
  setInstructor: (instructor: Instructor) => void;
  clearUser: () => void;
};

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      student: null,
      instructor: null,
      isInitialized: false,
      setUser: (user) => set({ user, isInitialized: true }),
      setStudent: (student) => set({ student }),
      setInstructor: (instructor) => set({ instructor }),
      clearUser: () => {
        set({ user: null, student: null, instructor: null, isInitialized: false });
        localStorage.removeItem('auth-storage'); // Remove persisted state
      }
    }),
    {
      name: 'auth-storage', // Key in localStorage
    }
  )
);