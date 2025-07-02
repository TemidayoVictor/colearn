import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Consultant } from '@/app/Types/types';

type GeneralState = {
    consultant: Consultant | null;
    consultants: Consultant[];

    setConsultant: (consultant: Consultant) => void
    setConsultants: (consultants: Consultant[]) => void

    getConsultantById: (id: number) => Consultant | undefined;

    clearAll: () => void,
}

export const genralStore = create<GeneralState>() (
  persist(
    (set, get) => ({
      consultant: null,
      consultants: [],

      setConsultant: (consultant) => set({consultant}),
      setConsultants: (consultants) => set({consultants}),

      getConsultantById: (id) => get().consultants.find((c) => c.id === id),
      
      clearAll: () => {
      set({consultant: null, consultants: []});
      localStorage.removeItem('general-storage'); // Remove persisted state
      }
    }),
    {
      name: 'general-storage', // Key in localStorage
    }
  )
)