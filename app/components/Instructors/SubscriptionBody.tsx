'use client';
import React, {useState} from "react";
import Image from "next/image";

const SubscriptionBody = () => {
    const [activeTab, setActiveTab] = useState<string | null> ("monthly");
    return (
        <div>
            <div className="text-center subscription-text">
                <h2 className="title">Enjoy good benefit and better feature with CoLearn upgraded plan</h2>
                <p className="mt-3 color-grey-text text-[.9rem]">Take your knowledge-sharing business to the next level with our premium subscription. Designed specifically for knowledge entrepreneurs like you, our subscription offers exclusive features to help you create, market, and sell your online courses more effectively.</p>
            </div>

            <div className="subscription-cont-cover">
                <div className="subscription-tab-cont">
                    <div className={`subscription-tab ${activeTab == 'monthly' ? 'active' : ''}`} onClick={() => setActiveTab('monthly')}>Monthly</div>
                    <div className={`subscription-tab ${activeTab == 'yearly' ? 'active' : ''}`} onClick={() => setActiveTab('yearly')}>Yearly</div>
                </div>

                <div className="subscription-card-container">
                    <div className="subscription-card">
                        <div className="flex items-center gap-3 color-grey-text text-[1.1rem] ">
                            <div className="free-plan p-2 rounded-[.5rem]">
                                <Image
                                    aria-hidden
                                    src="/assets/images/bulb.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                            <p>Current Plan</p>
                        </div>

                        <p className="title-2 mt-[.7em]">Free</p>
                        <p className="title-2 mt-[.2em] ">Basic</p>

                        <div className="subscription-content">
                            {
                                [1,2,3,4].map((item) => (
                                    <div className="flex items-center gap-2 mt-2" key={item}>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/check.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p className="color-grey-text text-[.8rem]">Feature {item}</p>
                                    </div>
                                ))
                            }
                            {
                                [1,2,3,4].map((item) => (
                                    <div className="flex items-center gap-2 mt-2" key={item}>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/check.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p className="color-grey-text text-[.8rem]">Feature {item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="subscription-card">
                        <div className="flex items-center gap-3 color-grey-text text-[1.1rem] ">
                            <div className="premium-plan p-2 rounded-[.5rem]">
                                <Image
                                    aria-hidden
                                    src="/assets/images/star-outline.png"
                                    alt="Colearn Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain rounded-[50%]"
                                />
                            </div>
                        </div>

                        <p className="mt-[.7em]"><span className="title-2">$699.99 </span>/ <span className="color-grey-text text-[.8rem]">Month</span></p>
                        <button className="btn btn-primary-fill my-[1em] w-full">
                            Upgrade to Premium
                        </button>
                        <p className="title-2 mt-[.2em] ">Premium</p>

                        <div className="subscription-content">
                            {
                                [1,2,3,4].map((item, index) => (
                                    <div className="flex items-center gap-2 mt-2" key={index}>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/check.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p className="color-grey-text text-[.8rem]">Feature {item}</p>
                                    </div>
                                ))
                            }
                            {
                                [1,2,3,4].map((item) => (
                                    <div className="flex items-center gap-2 mt-2" key={item}>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/check.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p className="color-grey-text text-[.8rem]">Feature {item}</p>
                                    </div>
                                ))
                            }
                            {
                                [1,2,3,4].map((item) => (
                                    <div className="flex items-center gap-2 mt-2" key={item}>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/check.png"
                                            alt="Colearn Logo"
                                            width={20}
                                            height={20}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <p className="color-grey-text text-[.8rem]">Feature {item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionBody;