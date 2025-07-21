'use client';
import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { genralStore } from "@/zustand/generalStore";

type PaymentInfoProps = {
    type?: string
}

const PaymentInfo = ({type}: PaymentInfoProps) => {
    const [showBalance, setShowBalance] = useState<boolean | null>(false);
    const toggleBalance = () => setShowBalance(prev => !prev);
    const walletBalance = genralStore((state) => state.walletBalance)

    function formatNumber(num: number | string): string {
        return new Intl.NumberFormat().format(Number(num));
    }
    
    return (
        <div>
            <div className="payment-info">
                <div className="flex items-center gap-2">
                    <Image
                        aria-hidden
                        src="/assets/images/money-recive.png"
                        alt="Colearn Logo"
                        width={24}
                        height={24}
                        className="object-contain rounded-[50%]"
                    />
                    <p className="title-2">Financial Information</p>
                </div>
                <p>Wallet Balance</p>
                <div className="flex items-center justify-between"> 
                    <h2 className="title-2">{showBalance ? '****' : '$'+formatNumber(walletBalance || 0)}</h2> 
                    {/* <FontAwesomeIcon icon={showBalance ? faEye : faEyeSlash} className="w-5 h-5" onClick={toggleBalance} /> */}
                </div>
                <p>Spendable Balance</p>
                <div className="flex items-center justify-between"> 
                    <h2 className="title-2">{showBalance ? '****' : '$'+formatNumber(walletBalance || 0)}</h2> 
                    <FontAwesomeIcon icon={showBalance ? faEye : faEyeSlash} className="w-5 h-5" onClick={toggleBalance} />
                </div>
                {
                    type == 'admin' &&
                    <div className="flex gap-2">
                        <button className="btn btn-primary-fill">Credit Spendable</button>
                        <button className="btn error two">Debit Spendable</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PaymentInfo;