'use client'
import React, { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
}

const Terms = () => {
    const [activeSection, setActiveSection] = useState<string | null>('terms')
    return (
        <div className="cover container">
            <div className="terms">
                <div className="terms-side-nav">
                    <h2 className={`${activeSection == 'terms' ? 'active' : ''}`} onClick={() => setActiveSection("terms")}>Terms of Use</h2>
                    <h2 className={`${activeSection == 'privacy' ? 'active' : ''}`} onClick={() => setActiveSection("privacy")}>Privacy Policy</h2>
                    <h2 className={`${activeSection == 'cookies' ? 'active' : ''}`} onClick={() => setActiveSection("cookies")}>Cookies Policy</h2>
                </div>
                <div className="terms-main">
                    
                    <div className="">
                        {
                            activeSection == 'terms' && (
                                <div>
                                    <h2 className="title">CoLearn Term of Use</h2>
                                    <p className="font-bold text-[1.2rem]">January 2025</p>
                                </div>
                            )
                        }

                        {
                            activeSection == 'privacy' && (
                                <div>
                                    <h2 className="title">CoLearn Privacy Policy</h2>
                                    <p className="font-bold text-[1.2rem]">January 2025</p>
                                </div>
                            )
                        }

                        {
                            activeSection == 'cookies' && (
                                <div>
                                    <h2 className="title">CoLearn Cookies Policy</h2>
                                    <p className="font-bold text-[1.2rem]">January 2025</p>
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut.
                        </p> 

                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut.</p>
                        
                        <p>Content 1 title
                        Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                        
                        <p>Content 2 title
                        Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>
                        
                        <p>Content 2 title
                        Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. </p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms