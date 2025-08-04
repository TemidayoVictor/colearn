'use client';
import React, {useState, useEffect} from "react";
import { get_all_blogs } from "@/services/admin";
import { useAuthAdmin } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import Loader from "../Loader";
import BlogBody from "./BlogBody";

const UtilitiesBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('categories');
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)
    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        const init = async () => {
            setLoading(true)
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await get_all_blogs();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setBlogs(response.data.blogs);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    if (loading) return <Loader />

    return (
        <div className="container-3">
            <div className="mt-[1.5em]">
                <div className="in-nav scrollable">
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'categories' ? 'active' : ''}`} onClick={() => setSelectedTab('categories')}>Categories</span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'faqs' ? 'active' : ''}`} onClick={() => setSelectedTab('faqs')}> <span>FAQs</span></span>
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'blog' ? 'active' : ''}`} onClick={() => setSelectedTab('blog')}> <span>Blog</span></span>
                </div>
            </div>

            <div>
                {
                    selectedTab == 'blog' &&
                    <BlogBody />
                }
            </div>
        </div>
    )
}

export default UtilitiesBody