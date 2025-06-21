import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, Module } from '@/app/Types/types';

type courseState = {
    courseId: string | undefined;
    course: Course | null;
    courses: Course[];
    moduleId: string | undefined;
    module: Module | null;
    modules: Module[];
    setCourseId: (courseId: string | undefined) => void;
    setCourse: (course: Course) => void;
    setCourses: (courses: Course[]) => void;
    setModuleId: (moduleId: string | undefined) => void;
    setModule: (module: Module) => void;
    setModules: (modules: Module[]) => void;
    clearCourses: () => void;
};

export const courseStore = create<courseState>()(
    persist(
        (set) => ({
            courseId: '',
            course: null,
            courses: [],
            moduleId: '',
            module: null,
            modules: [],
            setCourseId: (courseId) => set({ courseId }),
            setCourses: (courses) => set({ courses }),
            setCourse: (course) => set({ course }),
            setModuleId: (moduleId) => set({ moduleId }),
            setModule: (module) => set({ module }),
            setModules: (modules) => set({ modules }),
            clearCourses: () => {
                set({ courseId: '', course: null, courses: [], moduleId: '', module: null, modules: [] });
                localStorage.removeItem('course-storage'); // Remove persisted state
            }
        }),
        {
        name: 'course-storage', // Key in localStorage
        }
    )  
        
);