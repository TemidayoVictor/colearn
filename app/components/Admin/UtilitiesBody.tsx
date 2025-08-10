'use client';
import React, {useState, useEffect} from "react";
import { get_all_blogs } from "@/services/admin";
import { get_all_categories } from "@/services/admin";
import { get_all_faqs } from "@/services/admin";
import { useAuthAdmin } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { useRouter } from "next/navigation";
import { courseStore } from "@/zustand/courseStore";
import { genralStore } from "@/zustand/generalStore";
import { subscribers } from "@/services/admin";
import Loader from "../Loader";
import BlogBody from "./BlogBody";
import CategoryBody from "./CategoryBody";
import FAQBody from "./FAQBody";
import SubscriberBody from "./SubscriberBody";

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
                const [categoryRes, faqRes, blogRes, subRes] = await Promise.all([
                    get_all_categories(),
                    get_all_faqs(),
                    get_all_blogs(),
                    subscribers(),
                ]);

                if (categoryRes.success) {
                    // save state globally
                    genralStore.getState().setCategorys(categoryRes.data.categories);
                } 
    
                else {
                    showErrorToast(categoryRes.message)
                    console.log(categoryRes)
                }

                if (faqRes.success) {
                    // save state globally
                    genralStore.getState().setFAQs(faqRes.data.faqs);
                } 
    
                else {
                    showErrorToast(faqRes.message)
                    console.log(faqRes)
                }

                if (blogRes.success) {
                    // save state globally
                    genralStore.getState().setBlogs(blogRes.data.blogs);
                } 
    
                else {
                    showErrorToast(blogRes.message)
                    console.log(blogRes)
                }

                if (subRes.success) {
                    // save state globally
                    console.log(subRes)
                    genralStore.getState().setSubscribers(subRes.data.subscribers);
                } 
    
                else {
                    showErrorToast(subRes.message)
                    console.log(subRes)
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
                    <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'subscribers' ? 'active' : ''}`} onClick={() => setSelectedTab('subscribers')}> <span>Subscribers</span></span>
                </div>
            </div>

            <div>
                {
                    selectedTab == 'categories' &&
                    <CategoryBody />
                }

                {
                    selectedTab == 'faqs' &&
                    <FAQBody />
                }

                {
                    selectedTab == 'blog' &&
                    <BlogBody />
                }

                {
                    selectedTab == 'subscribers' &&
                    <SubscriberBody />
                }
            </div>
        </div>
    )
}

export default UtilitiesBody