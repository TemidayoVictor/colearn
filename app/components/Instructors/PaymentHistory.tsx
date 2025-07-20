'use client';
import React, {useState} from "react";
import Image from "next/image";

type PaymentHistoryProps = {
    type?: string;
}

const PaymentHistory = ({type}: PaymentHistoryProps) => {
    const [selectedTab, setSelectedTab] = useState<string>('revenue');
    
    return (
        <div className="spacing-inter">
            {
                type == 'admin' &&
                <div className="mt-[1.5em]">
                    <div className="in-nav scrollable">
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'revenue' ? 'active' : ''}`} onClick={() => setSelectedTab('revenue')}>Revenue</span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'transactions' ? 'active' : ''}`} onClick={() => setSelectedTab('transactions')}> <span>All Transactions</span></span>
                    </div>
                </div>
            }

            <div className="res-flex items-center justify-between my-4">
                <h2 className="font-semibold">Transaction History</h2>
                <div className="flex items-center justify-between gap-2 bg-white py-[.1em] px-[.7em] rounded-[.3rem] bod-grey res-w-full">
                    <Image
                        aria-hidden
                        src="/assets/images/search-normal-2.png"
                        alt="Colearn Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <div className="w-[100%]">
                        <input type="text" placeholder="Search" className="w-[100%] color-grey-text text-[.9rem] p-[.3em]" />
                    </div>
                </div>
            </div>

            <div className="transactions-body">
                <div>
                    {
                        [1,2,3,4].map((item, index) => (
                            <div className="transactions-content" key={index}>
                                <small className="font-semibold">Today</small>
                                <div className="mt-4">
                                    {
                                        [1,2,3].map((item, index) => (
                                            <div className="flex gap-2 justify-between my-[1em]" key={index}>
                                                <div className="left">
                                                    <div className="bg-success-light rounded-[50%] p-[.5em]">
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/received.png"
                                                            alt="Colearn Logo"
                                                            width={24}
                                                            height={24}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="res-flex items-center justify-between gap-2 right">
                                                    <div>
                                                        <p className="font-semibold">Course 28MN72, UI/UX Design Bootcamp Vol.1 Payment</p>
                                                        <p className="color-grey-text text-[.7rem] my-[.3em]">From: favi*****hg@gmail.com</p>
                                                    </div>
                                                    <div className="flex-mob">
                                                        <p className="color-green font-bold text-[.9rem]">$30.00</p>
                                                        <p className="color-grey-text text-[.7rem] my-[.3em]"><span>14 April, 2024</span> <span>&middot;</span> <span>12:04 AM</span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory;