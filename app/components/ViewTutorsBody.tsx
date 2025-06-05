'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ViewTutorsOverview from "./ViewTutorsOverview";
import ViewTutorFooter from "./ViewTutorFooter";
import ViewTutorsTestimonials from "./ViewTutorsTestimonials";
import ExplorePopular from "./ExplorePopular";

type ViewTutorsBodyProps = {
    loggedIn?: boolean
}

const ViewTutorsBody = ({loggedIn}: ViewTutorsBodyProps) => {
    const [selectedTab, setSelectedTab] = useState<string>('overview');
    
    return (
        <div className="container">
            <div className="in-nav mb-[1.5em]">
                <span className={`in-nav-link color-grey-text ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}>Overview</span>
                <span className={`in-nav-link color-grey-text ${selectedTab == 'testimonials' ? 'active' : ''}`} onClick={() => setSelectedTab('testimonials')}>Testimonials</span>
                <span className={`in-nav-link color-grey-text ${selectedTab == 'library' ? 'active' : ''}`} onClick={() => setSelectedTab('library')}>Library</span>
            </div>

            <div className="view-tutors-body">
                {
                    selectedTab == 'overview' &&
                    <ViewTutorsOverview />
                }

                {
                    selectedTab == 'testimonials' &&
                    <ViewTutorsTestimonials />
                }

                {
                    selectedTab == 'library' &&
                    <div className="mt-[-3rem]">
                        <ExplorePopular type="sub" title="" addContainerClass={false} loggedIn={loggedIn}/>
                    </div>
                }
            </div>

            {
                !loggedIn &&
                <div>
                    <ViewTutorFooter />
                </div>
            }

        </div>
    )
}

export default ViewTutorsBody