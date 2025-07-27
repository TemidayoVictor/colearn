import React, {useState, useEffect} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import { Transaction } from "@/app/Types/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faWallet } from '@fortawesome/free-solid-svg-icons'
import EmptyPage from "../EmptyPage";
import AccountModal from "./AccountModal";

type PaymentRevenueProps = {
    type?: string;
}

const PaymentWithdrawals = ({type}: PaymentRevenueProps) => {
    const withdrawals = genralStore((state) => state.withdrawals);

    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

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

    const approveTrigger = (item: Transaction) => {
        genralStore.getState().setTransaction(item);
        openModal("approve-withdrawal");
    }

    const declineTrigger = (item: Transaction) => {
        genralStore.getState().setTransaction(item);
        openModal("reject-withdrawal");
    }

    useEffect(() => {
        const init = async () => {
            if(!withdrawals)
            return
        };
        init();

    }, [withdrawals]);
    
    return (
        <div>
            <div>
                <div className="res-flex items-center justify-between my-4">
                    <h2 className="font-semibold">Withdrawal Requests</h2>
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
                            withdrawals && withdrawals.length > 0 ? (
                                withdrawals.map((item, index) => (
                                    <div className="transactions-content" key={index}>
                                        <div className="flex gap-2 justify-between my-[1em]">
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
                                                    <p className="font-semibold">
                                                        {item.description}{' '}
                                                        {item.status && (
                                                            <span
                                                            className={`
                                                                px-2 py-1 rounded text-white text-xs ml-2 capitalize
                                                                ${
                                                                item.status === 'approved'
                                                                    ? 'bg-green-600'
                                                                    : item.status === 'pending'
                                                                    ? 'bg-yellow-500'
                                                                    : item.status === 'declined'
                                                                    ? 'bg-red-600'
                                                                    : 'bg-gray-400'
                                                                }
                                                            `}
                                                            >
                                                            {item.status}
                                                            </span>
                                                        )}
                                                    </p>
                                                    <p className="color-grey-text text-[.7rem] my-[.3em] font-semibold"> Current Balance : ${item.wallet?.balance}</p>
                                                    <div className="flex gap-2 mt-2">
                                                        <button className="btn btn-success tw btn-small" onClick={(e) => approveTrigger(item) }>Approve</button>
                                                        <button className="btn error two btn-small" onClick={(e) => declineTrigger(item) }>Decline</button>
                                                    </div>
                                                </div>
                                                <div className="flex-mob">
                                                    <p className={`${item.type == 'credit' ? 'color-green' : 'color-error'} font-bold text-[.9rem]`}>$ {item.amount}</p>
                                                    <p className="color-grey-text text-[.7rem] my-[.3em]"><span>{formatDateTime(item.created_at)}</span> </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <EmptyPage image="/assets/images/empty-image.png"  header="No Withdrawal Requests" content="No pending withdrawal requests found" imageWidth={400} imageHeight={240}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default PaymentWithdrawals;