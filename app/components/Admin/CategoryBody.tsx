import React, {useState} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import { Category } from "@/app/Types/types";
import AccountModal from "../Instructors/AccountModal";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import { useAdmin } from "@/hooks/useAdmin";
import EmptyPage from "../EmptyPage";

const CategoryBody = () => {
    
    const {
        buttonLoader,
        deleteCategory,
    } = useAdmin();

    const [showModal, setShowModal] = useState<string | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const categorys = genralStore((state) => state.categorys)

    const editCategoryTrigger = (item: Category) => {
        genralStore.getState().setCategory(item);
        openModal('edit-blog');
    }

    const deleteResourceTrigger = (item: Category): void => {
        genralStore.getState().setCategory(item);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }
    
    return (
        <div>
            <div>
                <div className="my-2 flex justify-end">
                    <button className="btn btn-primary-fill" onClick={() => openModal("create-category")}>Add Category</button>
                </div>
            </div>

            <div className="table-container mt-2">
                {
                    categorys.length > 0 ? (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Image</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        categorys.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td className="flex items-center gap-2">
                                                    <Image
                                                        aria-hidden
                                                        src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course-img-2.png"}
                                                        alt="Colearn Logo"
                                                        width={40}
                                                        height={40}
                                                        className="object-contain rounded-[.3em]"
                                                    />
                                                </td>
                                                <td>{item?.name}</td>
                                                <td>
                                                    <button className="btn btn-small btn-primary-fill" onClick={(e) => editCategoryTrigger(item)}>Edit</button>
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
                            <EmptyPage image="/assets/images/empty-image.png" header="No category" content="No category found" imageWidth={400} imageHeight={240}/>
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
                                    Are you sure you want to delete this category? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteCategory}
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

export default CategoryBody