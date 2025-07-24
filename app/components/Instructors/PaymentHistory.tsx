'use client';
import React, {useState} from "react";
import PaymentHistoryRevenue from "./PaymentHistoryRevenue";
import PaymentHistorySettings from "./PaymentHistorySettings";
import PaymentWithdrawals from "./PaymentWithdrawals";

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
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'settings' ? 'active' : ''}`} onClick={() => setSelectedTab('settings')}> <span>Settings</span></span>
                        <span className={`in-nav-link three flex gap-2 items-center two color-grey-text ${selectedTab == 'withdrawal' ? 'active' : ''}`} onClick={() => setSelectedTab('withdrawal')}> <span>Withdrawal Requests</span></span>
                    </div>
                </div>
            }

            {
                selectedTab == 'revenue' &&
                <PaymentHistoryRevenue type={type}/>            
            }

            {
                selectedTab == 'settings' &&
                <PaymentHistorySettings />
            }

            {
                selectedTab == 'withdrawal' &&
                <PaymentWithdrawals />
            }
        </div>
    )
}

export default PaymentHistory;