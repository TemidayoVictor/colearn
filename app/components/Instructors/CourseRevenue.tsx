'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardPerformance from "./DashboardPerformance";
import AccountModal from "./AccountModal";

type CourseRevenueProps = {
    link: string
    type?: string
}

const CourseRevenue = ({link, type}: CourseRevenueProps) => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => {
        setShowModal(key);
    }
    const closeModal = () => setShowModal(null);
    return (
        <div className="container-3">
            <div className="flex items-center justify-between">
                <Link href={link} className="flex items-center gap-2 cursor-pointer">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/left-arrow.png"
                            alt="Colearn Logo"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-[.9rem] font-semibold">Back</p>
                </Link>
                {
                    type == "admin" &&
                    <button className="btn remove" onClick={() => openModal("block-course")}>Block</button>
                }
            </div>
            <div className="spacing-inter">
                <DashboardPerformance type="Course-2"/>
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default CourseRevenue