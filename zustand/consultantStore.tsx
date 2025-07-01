import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Slot } from '@/app/Types/types';

type ConsultantState = {
    slot: Slot | null,
    slots: Slot[],

    updateSlot: (index: number, data: Partial<Slot>) => void;
    toggleSlotEnabled: (index: number) => void;

    setSlot: (slot: Slot | null) => void,
    setSlots: (slots: Slot[]) => void,

    clearAll: () => void,
}

const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

export const consultantStore = create<ConsultantState>() (
  persist(
    (set) => ({
        slot: null,
        slots: [],

        setSlot: (slot) => set({slot}),
        setSlots: (slots) => set({slots}),

        updateSlot: (index, data) =>
        set((state) => {
            const updated = [...state.slots];
            updated[index] = { ...updated[index], ...data };
            return { slots: updated };
        }),
        
        toggleSlotEnabled: (index) =>
        set((state) => {
            const updated = [...state.slots];
            const slot = updated[index];
            updated[index] = {
            ...slot,
            enabled: !slot.enabled,
            start_time: "",
            end_time: "",
            };
            return { slots: updated };
        }),
        
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