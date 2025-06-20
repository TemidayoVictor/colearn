import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Course } from '@/app/Types/types';

type courseState = {
    courseId: string | undefined;
    courses: Course[];
    setCourseId: (courseId: string | undefined) => void;
    setCourses: (courses: Course[]) => void;
    clearCourses: () => void;
};

export const courseStore = create<courseState>()(
    typeof window !== 'undefined' ?
        persist(
            (set) => ({
                courseId: '',
                courses: [],
                setCourseId: (courseId) => set({ courseId }),
                setCourses: (courses) => set({ courses }),
                clearCourses: () => {
                    set({ courseId: '', courses: [] });
                    localStorage.removeItem('course-storage'); // Remove persisted state
                }
            }),
            {
            name: 'course-storage', // Key in localStorage
            }
        )  :
      
        (set) => ({
            courseId: '',
            courses: [],
            setCourseId: (courseId) => set({ courseId }),
            setCourses: (courses) => set({ courses }),
            clearCourses: () => {
                set({ courseId: '', courses: [] });
                localStorage.removeItem('course-storage'); // Remove persisted state
            }
        }),
        
);