import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Student, Instructor } from '@/app/Types/types';

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