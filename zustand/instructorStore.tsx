import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Certification, School, ExperienceType } from '@/app/Types/types';

type InstructorState = {
  school: School | null;
  certification: Certification | null;
  experience: ExperienceType | null;

  schools: School[];
  certifications: Certification[];
  experiences: ExperienceType[];

  setSchool: (school: School | null) => void
  setCert: (certification: Certification | null) => void
  setExperience: (experience: ExperienceType | null) => void

  setSchools: (schools: School[]) => void
  setCerts: (certifications: Certification[]) => void
  setExperiences: (experiences: ExperienceType[]) => void
  
  clearAll: () => void
}

export const instructorStore = create<InstructorState>() (
  persist(
    (set) => ({
      school: null,
      certification: null,
      experience: null,

      schools: [],
      certifications: [],
      experiences: [],

      setSchool: (school) => set({ school }),
      setCert: (certification) => set({ certification }),
      setExperience: (experience) => set({experience}),

      setSchools: (schools) => set({ schools}),
      setCerts: (certifications) => set({ certifications }),
      setExperiences: (experiences) => set({experiences}),
      
      clearAll: () => {
        set({ 
          school: null, certification: null, experience: null,
          schools: [], certifications: [], experiences: [],
        });
        localStorage.removeItem('instructor-storage'); // Remove persisted state
      }
    }),
    {
      name: 'instructor-storage', // Key in localStorage
    }
  )
)