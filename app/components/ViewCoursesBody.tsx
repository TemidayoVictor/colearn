'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseCourses } from "@/hooks/useCourses";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";
import { showErrorToast } from "@/utils/toastTypes";
import ViewCoursesContent from "./ViewCoursesContent";
import ViewCoursesContentMain from "./ViewCoursesContentMain";
import ViewCoursesTestimonials from "./ViewCoursesTestimonials";

const ViewCoursesBody = () => {
    const router = useRouter();
    const course = courseStore((state) => state.course)

    const loggedIn = authStore((state) => state.isInitialized);

    const {addToCart} = UseCourses();
    const [selectedTab, setSelectedTab] = useState<string>('overview');

    const addToCartTrigger = (item: string | undefined) => {
        if(loggedIn) {
            addToCart(item);
        }

        else {
            showErrorToast('Please login to add to cart')
            router.push('/authentication/login')
        }
    }

    return (
        <div className="container">
            <div className="in-nav mb-[1.5em]">
                <span className={`in-nav-link color-grey-text ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}>Overview</span>
                {/* <span className={`in-nav-link color-grey-text ${selectedTab == 'course-content' ? 'active' : ''}`} onClick={() => setSelectedTab('course-content')}>Content</span> */}
                <span className={`in-nav-link color-grey-text ${selectedTab == 'testimonials' ? 'active' : ''}`} onClick={() => setSelectedTab('testimonials')}>Testimonials</span>
            </div>

            <div className="view-courses-body">
                <div className="left">
                    {
                        selectedTab == 'overview' &&
                        <ViewCoursesContent/>
                    }

                    {
                        selectedTab == 'course-content' &&
                        <ViewCoursesContentMain />
                    }

                    {
                        selectedTab == 'testimonials' &&
                        <ViewCoursesTestimonials type="web"/>
                    }
                </div>

                <div className="right">
                    <div className="class-list-sub-top">
                        <p>Subtotals</p>
                        
                        <div>
                            <h2 className="cart-total">${course?.price}</h2>
                            {/* <h2 className="cart-total old">$90.00</h2> */}
                        </div>
                        
                        <button className="bt-btn two btn btn-primary-fill" onClick={(e) => addToCartTrigger(course?.id)}>
                            <span>Add to Cart</span>
                            <span>
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-right.png"
                                    alt="Colearn Logo"
                                    width={12}
                                    height={12}
                                    className="object-contain"
                                />
                            </span>
                        </button>

                        {/* <Link href='/' className="bt-btn two btn normal">
                            <span>Buy Now</span>
                            <span>
                                <Image
                                    aria-hidden
                                    src="/assets/images/arrow-right.png"
                                    alt="Colearn Logo"
                                    width={12}
                                    height={12}
                                    className="object-contain"
                                />
                            </span>
                        </Link> */}
                    </div>

                    <div className="course-features">
                        <h2 className="title-3 mb-4">This Course Includes</h2>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/monitor.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">{course?.total_duration} hour{course?.total_duration && course?.total_duration > 1 ? 's' : ''} on-demand video</p>
                            </div>

                            {/* <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/help-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">1 Practice Test</p>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/book-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Assignment</p>
                            </div> */}

                            {/* <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/note-text.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">1 Article</p>
                            </div> */}

                            {
                                (course?.resources ?? []).length > 0 ? (
                                    <div className="flex items-center gap-2 mb-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/folder-2.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                        <p className="text-[.9rem]">{course?.resources.length || 0} Resources</p>
                                    </div>
                                ) : (
                                    ""
                                )
                            }

                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/help-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Full lifetime access</p>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/award.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[.9rem]">Certificate of completion</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="coupon">
                        <p className="text-[.8rem]">Promo / Coupon Code</p>
                        <div className="flex items-center gap-1 mt-2">
                            <Image
                                aria-hidden
                                src="/assets/images/tick-circle.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                            <p className="success text-[.8rem] font-bold">Coupon  code applied “A8sh83yf8y8h”</p>
                        </div>
                        <div className="flex items-center justify-between my-[1em] py-[.5em] px-[1.5em] footer-input-cover coupon-cover">
                            <div className="flex items-center gap-2">
                                <input type="text" placeholder="Coupon code" className="footer-input coupon-input w-[100%] text-[.8rem]" />
                            </div>
                            <div>
                                <Link href='/' className="flex gap-2 footer-btn coupon-btn">
                                    Apply
                                </Link>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ViewCoursesBody