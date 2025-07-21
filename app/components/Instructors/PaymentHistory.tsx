'use client';
import React, {useState, useMemo, useEffect} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import { Transaction } from "@/app/Types/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faWallet } from '@fortawesome/free-solid-svg-icons'

type PaymentHistoryProps = {
    type?: string;
}

const PaymentHistory = ({type}: PaymentHistoryProps) => {    
    const transactionsFetch = genralStore((state) => state.transactions);

    const groupedTransactions = useMemo(() => {
        return transactionsFetch && typeof transactionsFetch === "object"
          ? transactionsFetch
          : {};
    }, [transactionsFetch]);

    const [selectedTab, setSelectedTab] = useState<string>('revenue');

    function formatDateTime(datetime: string): string {
        const date = new Date(datetime);
      
        const day = date.getDate(); // 3
        const month = date.toLocaleString('default', { month: 'long' }); // June
        const year = date.getFullYear(); // 2025
        const time = date.toLocaleTimeString('default', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }); // 11:41 AM
      
        return `${day} ${month}, ${year} · ${time}`;
      }

    useEffect(() => {
        const init = async () => {
            if(!transactionsFetch)
            return
        };
        init();

    }, [transactionsFetch]);
    
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
                        Object.entries(groupedTransactions).map(([month, eachTransaction]) => (
                            <div className="transactions-content" key={month}>
                                <h2 className="font-semibold"> {month} </h2>
                                <div className="mt-4">
                                    {
                                        (eachTransaction as Transaction[]).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((item, index) => (
                                            <div className="flex gap-2 justify-between my-[1em]" key={index}>
                                                <div className="left">
                                                    {
                                                        item.type == 'credit' ? (
                                                            <div className="bg-success-light rounded-[50%] p-[.5em] w-[24px] h-[24px] flex items-center justify-center p-[1em]">
                                                                {/* <Image
                                                                    aria-hidden
                                                                    src="/assets/images/received.png"
                                                                    alt="Colearn Logo"
                                                                    width={24}
                                                                    height={24}
                                                                    className="object-contain"
                                                                /> */}
                                                                <FontAwesomeIcon icon={faArrowDown} className="text-green-500" />
                                                            </div>
                                                        ) : (
                                                            <div className="bg-error-light rounded-[50%] p-[.5em] w-[24px] h-[24px] flex items-center justify-center p-[1em]">
                                                                {/* <Image
                                                                    aria-hidden
                                                                    src="/assets/images/received.png"
                                                                    alt="Colearn Logo"
                                                                    width={24}
                                                                    height={24}
                                                                    className="object-contain"
                                                                /> */}
                                                                <FontAwesomeIcon icon={faArrowUp} className="text-red-500" />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="res-flex items-center justify-between gap-2 right">
                                                    <div>
                                                        <p className="font-semibold"> {item.description} </p>
                                                        <p className="color-grey-text text-[.7rem] my-[.3em]"> {item.type == 'credit' ? 'To' : 'From'} : {item.user.email}</p>
                                                    </div>
                                                    <div className="flex-mob">
                                                        <p className={`${item.type == 'credit' ? 'color-green' : 'color-error'} font-bold text-[.9rem]`}>$ {item.amount}</p>
                                                        <p className="color-grey-text text-[.7rem] my-[.3em]"><span>{formatDateTime(item.created_at)}</span> </p>
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