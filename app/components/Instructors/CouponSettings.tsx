'use client'
import React, {useState} from "react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { Bank } from "@/app/Types/types";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "../EmptyPage";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import { UseCourses } from "@/hooks/useCourses";

dayjs.extend(advancedFormat);

const CouponSettings = () => {
    const {buttonLoader, deleteCoupon} = UseCourses();
    const coupons = genralStore((state) => (state.coupons))

    const [showModal, setShowModal] = useState<string | null>(null);
    const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
    const openModal = (key: string, item?: Bank | null) => {
        setShowModal(key);
        setSelectedBank(item || null);
    }

    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [couponId, setCouponId] = useState<string | undefined>('');
    
    const closeDeleteModal = () => {
        setDeleteModal(false);
    }

    const deleteResourceTrigger = (id: string | undefined): void => {
        setCouponId(id);
        setDeleteModal(true);
    }

    const deleteBtn = () => {
        deleteCoupon(couponId);
    }

    const closeModal = () => setShowModal(null);
    return (
        <div>
            <div className="security-settings-cont bank">
                <h2 className="title-2">Coupons</h2>
                <p className="color-grey-text text-[.8rem]">Manage your coupons here</p>

                <div className="bank-settings-body">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Active Coupons</h2>
                        <div className="flex items-center gap-2 btn normal no" onClick={() => openModal("addCoupon")}>
                            <Image
                                aria-hidden
                                src="/assets/images/add-icon.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p className="font-semibold text-[.9rem]">Add Coupon</p>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        {
                            (coupons ?? []).length > 0 ? (
                                <div className="bank-details-cont">
                                    {
                                        coupons.map((item, index) => (
                                            <div className="bod-grey p-2 rounded-[.3em] mb-4" key={index}>
                                                <div className="flex items-center justify-between">
                                                    <h2 className="title-3">{item.code}</h2>
                                                    <div onClick={(e) => deleteResourceTrigger(item.id)}>
                                                        <p className="font-semibold color-error">Delete</p>
                                                        {/* <div onClick={() => openModal("editbank", item)}>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/dots-big.png"
                                                            alt="Colearn Image"
                                                            width={40}
                                                            height={40}
                                                            className="object-cover"
                                                        />
                                                    </div> */}
                                                    </div>
                                                </div>
                                                <div className="bank-details">
                                                    <div>
                                                        <div className="bank-details-content">
                                                            <p>Type:</p>
                                                            <p className="font-semibold capitalize">{item.type}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="bank-details-content">
                                                            <p>Value:</p>
                                                            <p className="font-semibold">{item.value} {item.type == 'percent' ? '%' : '$'} </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="bank-details-content">
                                                            <p>Expiry Date:</p>
                                                            <p className="font-semibold">{dayjs(item.expires_at).format('MMMM Do, YYYY')}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="bank-details-content">
                                                            <p>Status:</p>
                                                            <p className="font-semibold">{item.status}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div>
                                    <EmptyPage image="/assets/images/empty-image.png"  header="No Coupons Yet" content="Offer your students exclusive discounts on your courses." imageWidth={400} imageHeight={240}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal} bank={selectedBank}/>
            }

{
                    deleteModal &&
                    <div>
                        <AnimatePresence>
                            <motion.div
                                className="modal-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                className="bg-white rounded-2xl p-6 w-[80%] max-w-md shadow-xl"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                >
                                <h2 className="title-3">Confirm Delete</h2>
                                <p className="text-[.9rem] color-grey-text">
                                    Are you sure you want to delete this coupon? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteBtn}
                                    className="px-4 py-2 bg-red-600 text-white text-[.8rem] rounded-md hover:bg-red-700 transition"
                                    >
                                    {
                                        buttonLoader ? (
                                            <ButtonLoader content="Deleting . . . "/>
                                        ) : (
                                            'Delete'
                                        )
                                    }

                                    </button>
                                </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                }
        </div>
    )
}

export default CouponSettings;