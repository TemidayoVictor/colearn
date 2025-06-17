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
}
  
type AuthState = {
  user: User | null;
  student: Student | null;
  isInitialized: boolean;
  setUser: (user: User) => void;
  setStudent: (student: Student) => void;
  clearUser: () => void;
};

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      student: null,
      isInitialized: false,
      setUser: (user) => set({ user, isInitialized: true }),
      setStudent: (student) => set({ student }),
      clearUser: () => {
        set({ user: null, student: null, isInitialized: false });
        localStorage.removeItem('auth-storage'); // Remove persisted state
      }
    }),
    {
      name: 'auth-storage', // Key in localStorage
    }
  )
);