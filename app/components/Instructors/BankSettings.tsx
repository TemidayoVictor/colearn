'use client'
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { Bank } from "@/app/Types/types";

const banks = [
    {
        bank: "HSBC Holdings PLC",
        account_number: "0211038826",
        account_name: "Favi Design"
    },

    {
        bank: "Wells fargo ",
        account_number: "0211038826",
        account_name: "Favi Design"
    },

    {
        bank: "Swiss Bank ",
        account_number: "0211038826",
        account_name: "Favi Design"
    }
];

const BankSettings = () => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
    const openModal = (key: string, item?: Bank | null) => {
        setShowModal(key);
        setSelectedBank(item || null);
    }
    const closeModal = () => setShowModal(null);
    return (
        <div>
            <div className="security-settings-cont bank">
                <h2 className="title-2">Bank Settings</h2>
                <p className="color-grey-text text-[.8rem]">Add and Edit Bank Information </p>

                <div className="bank-settings-body">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Active Banks</h2>
                        <div className="flex items-center gap-2 btn normal no" onClick={() => openModal("addBank")}>
                            <Image
                                aria-hidden
                                src="/assets/images/add-icon.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p className="font-semibold text-[.9rem]">Add Bank</p>
                        </div>
                    </div>
                    <div className="alert notification">
                        <p className="head">Note</p>
                        <p className="bod">Ensure your name on your CoLearn account is the same as your bank account details.</p>          
                    </div>
                    <div className="mt-4">
                        <div className="bank-details-cont">
                            {
                                banks.map((item, index) => (
                                    <div className="bod-grey p-2 rounded-[.3em] mb-4" key={index}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="font-semibold">{item.bank}</h2>
                                            </div>
                                                
                                            <div onClick={() => openModal("editbank", item)}>
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/dots-big.png"
                                                    alt="Colearn Image"
                                                    width={40}
                                                    height={40}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="bank-details">
                                            <div>
                                                <div className="bank-details-content">
                                                    <p>Account Name:</p>
                                                    <p className="font-semibold">{item.account_name}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="bank-details-content">
                                                    <p>Account Number:</p>
                                                    <p className="font-semibold">{item.account_number}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bank-details-content">
                                                    <p>Email:</p>
                                                    <p className="font-semibold">favidesign001@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal} bank={selectedBank}/>
            }
        </div>
    )
}

export default BankSettings;