import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type Country = {
    id: number;
    iso: string;
    name: string;
    nicename: string;
    iso3: string;
    numcode: number;
    phonecode: number;
}

type Language = {
    id: number;
    name: string;
}

type utilitiesState = {
    countries: Country[];
    languages: Language[];
    setCountry: (country: Country[]) => void;
    setLanguage: (language: Language[]) => void;
};

export const utilitiesStore = create<utilitiesState>()(
  persist(
    (set) => ({
      countries: [],
      languages: [],
      setCountry: (countries) => set({ countries }),
      setLanguage: (languages) => set({ languages }),
    }),
    {
      name: 'utility-storage', // Key in localStorage
    }
  )
);