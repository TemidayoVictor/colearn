'use client';
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "../Instructors/AccountModal";

const AdminAccountBody = () => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => {
        setShowModal(key);
    }
    const closeModal = () => setShowModal(null);
    return (
        <div className="student-account">
            <div>
                <h2 className="title-2">Profile</h2>
            </div>

            <div className="details-sect">
                <Image
                    aria-hidden
                    src="/assets/images/profile-img-2.png"
                    alt="Colearn Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-[.3em]"
                />
                <h2 className="font-semibold">Favi Ayomide</h2>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="title-3">Account Information</h2>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => openModal("admin-change-password")}>
                    <Image
                        aria-hidden
                        src="/assets/images/edit-pen.png"
                        alt="Colearn Logo"
                        width={16}
                        height={16}
                        className="object-contain rounded-[50%]"
                    />
                    <p className="color-grey-text text-[.8rem] font-semibold">Change Password</p>
                </div>
            </div>

            <div className="mt-4">
                <div className="acct-details res">
                    <p className="left">Email Address</p>
                    <p className="right">faviayomide@gmail.com</p>
                </div>
                
            </div>

            <div>
                {
                    showModal && 
                    <AccountModal modalType={showModal} modalClose={closeModal}/>
                }
            </div>
        </div>
    )
}

export default AdminAccountBody