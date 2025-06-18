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

type Preference = {
  id: number;
  name: string;
}

type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
}

type utilitiesState = {
  countries: Country[];
  languages: Language[];
  preferences: Preference[];
  categories: Category[];
  setCountry: (country: Country[]) => void;
  setLanguage: (language: Language[]) => void;
  setPreference: (preferences: Preference[]) => void;
  setCategory: (categories: Category[]) => void;
};

export const utilitiesStore = create<utilitiesState>()(
  persist(
    (set) => ({
      countries: [],
      languages: [],
      preferences: [],
      categories: [],
      setCountry: (countries) => set({ countries }),
      setLanguage: (languages) => set({ languages }),
      setPreference: (preferences) => set({ preferences }),
      setCategory: (categories) => set({ categories }),
    }),
    {
      name: 'utility-storage', // Key in localStorage
    }
  )
);