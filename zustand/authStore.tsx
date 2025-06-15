import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
    id: number;
    name: string;
    email: string;
    type: string | null;
    email_verified_at: string | null;
    email_verification_code: number;
};
  
type AuthState = {
    user: User | null;
    isInitialized: boolean;
    setUser: (user: User) => void;
    clearUser: () => void;
};

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isInitialized: false,
      setUser: (user) => set({ user, isInitialized: true }),
      clearUser: () => {
        set({ user: null, isInitialized: false });
        localStorage.removeItem('auth-storage'); // Remove persisted state
      }
    }),
    {
      name: 'auth-storage', // Key in localStorage
    }
  )
);