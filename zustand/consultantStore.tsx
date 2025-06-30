import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Slot } from '@/app/Types/types';

type ConsultantState = {
    slot: Slot | null,
    slots: Slot[],

    setSlot: (slot: Slot | null) => void,
    setSlots: (slots: Slot[]) => void,

    clearAll: () => void,
}

export const consultantStore = create<ConsultantState>() (
  persist(
    (set) => ({
        slot: null,
        slots: [],

        setSlot: (slot) => set({slot}),
        setSlots: (slots) => set({slots}),
        
        clearAll: () => {
        set({ slot: null, slots: []});
        localStorage.removeItem('consultant-storage'); // Remove persisted state
        }
    }),
    {
      name: 'consultant-storage', // Key in localStorage
    }
  )
)