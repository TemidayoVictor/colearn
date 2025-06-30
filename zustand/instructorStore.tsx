import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Certification, School } from '@/app/Types/types';

type InstructorState = {
  school: School | null;
  certification: Certification | null;

  schools: School[];
  certifications: Certification[];

  setSchool: (school: School | null) => void
  setCert: (certification: Certification | null) => void

  setSchools: (schools: School[]) => void
  setCerts: (certifications: Certification[]) => void
  
  clearAll: () => void
}

export const instructorStore = create<InstructorState>() (
  persist(
    (set) => ({
      school: null,
      certification: null,

      schools: [],
      certifications: [],

      setSchool: (school) => set({ school }),
      setCert: (certification) => set({ certification }),

      setSchools: (schools) => set({ schools}),
      setCerts: (certifications) => set({ certifications }),
      
      clearAll: () => {
        set({ school: null, certification: null, schools: [], certifications: []});
        localStorage.removeItem('instructor-storage'); // Remove persisted state
      }
    }),
    {
      name: 'instructor-storage', // Key in localStorage
    }
  )
)