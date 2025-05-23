'use client';
import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PaymentInfo = () => {
    const [showBalance, setShowBalance] = useState<boolean | null>(false);
    const toggleBalance = () => setShowBalance(prev => !prev);
    return (
        <div className="container-3">
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
                <p>Revenue Generated</p>
                <div className="flex items-center justify-between"> 
                    <h2 className="title-2">{showBalance ? '****' : '$3,982.32'}</h2>
                    <FontAwesomeIcon icon={showBalance ? faEye : faEyeSlash} className="w-5 h-5" onClick={toggleBalance} />
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo;