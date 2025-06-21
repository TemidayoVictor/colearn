import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, Module, Video } from '@/app/Types/types';

type courseState = {
    courseId: string | undefined;
    course: Course | null;
    courses: Course[];

    moduleId: string | undefined;
    module: Module | null;
    modules: Module[];

    videoId: string | undefined;
    video: Video | null;
    videos: Video[];

    uploading: boolean;
    progress: number;
    
    setCourseId: (courseId: string | undefined) => void;
    setCourse: (course: Course) => void;
    setCourses: (courses: Course[]) => void;
    
    setModuleId: (moduleId: string | undefined) => void;
    setModule: (module: Module) => void;
    setModules: (modules: Module[]) => void;

    setVideoId: (videoId: string | undefined) => void;
    setVideo: (video: Video) => void;
    setVideos: (videos: Video[]) => void;

    setUploading: (uploading: boolean) => void;
    setProgress: (progress: number) => void;
    
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

            videoId: '',
            video: null,
            videos: [],

            uploading: false,
            progress: 0,

            setCourseId: (courseId) => set({ courseId }),
            setCourses: (courses) => set({ courses }),
            setCourse: (course) => set({ course }),
            
            setModuleId: (moduleId) => set({ moduleId }),
            setModule: (module) => set({ module }),
            setModules: (modules) => set({ modules }),

            setVideoId: (videoId) => set({ videoId }),
            setVideo: (video) => set({ video }),
            setVideos: (videos) => set({ videos }),

            setUploading: (uploading) => set({ uploading }),
            setProgress: (progress) => set({ progress }),
            
            clearCourses: () => {
                set({   
                        courseId: '', course: null, courses: [],
                        moduleId: '', module: null, modules: [],
                        videoId: '', video: null, videos: [],
                        uploading: false, progress: 0,
                    });
                localStorage.removeItem('course-storage'); // Remove persisted state
            }
        }),
        {
        name: 'course-storage', // Key in localStorage
        }
    )  
        
);