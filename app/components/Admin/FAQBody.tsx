import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";
import { FAQ } from "@/app/Types/types";
import AccountModal from "../Instructors/AccountModal";
import { faEdit, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import { useAdmin } from "@/hooks/useAdmin";
import EmptyPage from "../EmptyPage";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const FAQBody = () => {
    
    const [showModal, setShowModal] = useState<string | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const faqs = genralStore((state) => state.faqs)

    const {
        buttonLoader,
        deleteFaq,
    } = useAdmin();

    const editFaqTrigger = (item: FAQ) => {
        genralStore.getState().setFAQ(item);
        openModal('edit-faq');
    }

    const deleteResourceTrigger = (item: FAQ): void => {
        genralStore.getState().setFAQ(item);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }
    
    return (
        <div>
            <div>
                <div className="my-2 flex justify-end">
                    <button className="btn btn-primary-fill" onClick={() => openModal("add-faq")}>Add FAQ</button>
                </div>
            </div>

            <div className="table-container mt-2">
                {
                    faqs.length > 0 ? (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        faqs.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td> {item.question} </td>
                                                <td>{item.answer.length > 30 ? item.answer.slice(0, 30) + '...' : item.answer}</td>
                                                <td>
                                                    <button className="btn btn-small btn-primary-fill" onClick={(e) => editFaqTrigger(item)}>Edit</button>
                                                    <button className="btn btn-small error two ml-2" onClick={(e) => deleteResourceTrigger(item)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png" header="No FAQs" content="No frequently asked questions found" imageWidth={400} imageHeight={240}/>
                        </div>
                    )
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
                                    Are you sure you want to delete this item? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteFaq}
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
            
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default FAQBody