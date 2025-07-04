import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Consultant, Booking } from '@/app/Types/types';

type GeneralState = {
    consultant: Consultant | null;
    consultants: Consultant[];

    booking: Booking | null;
    bookings: Booking[]; 

    setConsultant: (consultant: Consultant) => void
    setConsultants: (consultants: Consultant[]) => void

    setBooking: (booking: Booking) => void
    setBookings: (bookings: Booking[]) => void

    getConsultantById: (id: number) => Consultant | undefined;

    clearAll: () => void,
}

export const genralStore = create<GeneralState>() (
  persist(
    (set, get) => ({
      consultant: null,
      consultants: [],

      booking: null,
      bookings: [],

      setBooking: (booking) => set({booking}),
      setBookings: (bookings) => set({bookings}),

      setConsultant: (consultant) => set({consultant}),
      setConsultants: (consultants) => set({consultants}),

      getConsultantById: (id) => get().consultants.find((c) => c.id === id),
      
      clearAll: () => {
      set({consultant: null, consultants: [], booking: null, bookings: []});
      localStorage.removeItem('general-storage'); // Remove persisted state
      }
    }),
    {
      name: 'general-storage', // Key in localStorage
    }
  )
)