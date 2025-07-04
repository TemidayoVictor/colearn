import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, Module, Video, Resource, Category } from '@/app/Types/types';

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

    resourceId: string | undefined;
    resource: Resource | null;
    resources: Resource[];

    categories: Category[];

    uploading: boolean;
    progress: number;

    newUpdate: string;
    
    setCourseId: (courseId: string | undefined) => void;
    setCourse: (course: Course) => void;
    setCourses: (courses: Course[]) => void;
    
    setModuleId: (moduleId: string | undefined) => void;
    setModule: (module: Module) => void;
    setModules: (modules: Module[]) => void;

    setVideoId: (videoId: string | undefined) => void;
    setVideo: (video: Video) => void;
    setVideos: (videos: Video[]) => void;

    setResourceId: (resourceId: string | undefined) => void;
    setResource: (resource: Resource) => void;
    setResources: (resources: Resource[]) => void;

    setCategories: (categories: Category[]) => void;

    setUploading: (uploading: boolean) => void;
    setProgress: (progress: number) => void;

    setNewUpdate: (newUpdate: string) => void;
    
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

            resourceId: '',
            resource: null,
            resources: [],

            categories: [],

            uploading: false,
            progress: 0,

            newUpdate: 'reset',

            setCourseId: (courseId) => set({ courseId }),
            setCourses: (courses) => set({ courses }),
            setCourse: (course) => set({ course }),
            
            setModuleId: (moduleId) => set({ moduleId }),
            setModule: (module) => set({ module }),
            setModules: (modules) => set({ modules }),

            setVideoId: (videoId) => set({ videoId }),
            setVideo: (video) => set({ video }),
            setVideos: (videos) => set({ videos }),

            setResourceId: (resourceId) => set({ resourceId }),
            setResource: (resource) => set({ resource }),
            setResources: (resources) => set({ resources }),

            setCategories: (categories) => set({ categories }),

            setUploading: (uploading) => set({ uploading }),
            setProgress: (progress) => set({ progress }),

            setNewUpdate: (newUpdate) => set({newUpdate}),
            
            clearCourses: () => {
                set({   
                        courseId: '', course: null, courses: [],
                        moduleId: '', module: null, modules: [],
                        videoId: '', video: null, videos: [],
                        resourceId: '', resource: null, resources: [],
                        categories: [],
                        uploading: false, progress: 0, newUpdate: 'reset',
                    });
                localStorage.removeItem('course-storage'); // Remove persisted state
            }
        }),
        {
        name: 'course-storage', // Key in localStorage
        }
    )  
        
);