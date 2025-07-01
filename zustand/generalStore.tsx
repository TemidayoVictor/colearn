import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Consultant } from '@/app/Types/types';

type GeneralState = {
    consultants: Consultant[];

    setConsultants: (consultants: Consultant[]) => void

    clearAll: () => void,
}

export const genralStore = create<GeneralState>() (
  persist(
    (set) => ({
      consultants: [],

      setConsultants: (consultants) => set({consultants}),
      
      clearAll: () => {
      set({consultants: []});
      localStorage.removeItem('general-storage'); // Remove persisted state
      }
    }),
    {
      name: 'general-storage', // Key in localStorage
    }
  )
)