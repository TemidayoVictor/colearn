'use client';
import React, {useState, useEffect} from "react";
import BlogBody from "./BlogBody";

const UtilitiesBody = () => {
    const [selectedTab, setSelectedTab] = useState<string>('categories');

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