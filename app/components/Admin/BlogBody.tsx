import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { genralStore } from "@/zustand/generalStore";
import { Blog } from "@/app/Types/types";
import AccountModal from "../Instructors/AccountModal";
import { faEdit, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader";
import { useAdmin } from "@/hooks/useAdmin";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const BlogBody = () => {
    const {
        buttonLoader,
        deleteBlog,
    } = useAdmin();

    const [showModal, setShowModal] = useState<string | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const blogs = genralStore((state) => state.blogs);

    const editBlogTrigger = (item: Blog) => {
        genralStore.getState().setBlog(item);
        openModal('edit-blog');
    }

    const deleteResourceTrigger = (item: Blog): void => {
        genralStore.getState().setBlog(item);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }
    
    return (
        <div>
            <div>
                <div className="mt-2 flex justify-end">
                    <button className="btn btn-primary-fill" onClick={() => openModal("create-blog")}>Create Blog</button>
                </div>
            </div>

            <div className="container">
                <div>
                    <h2 className="title">Blog Posts</h2>
                </div>

                <div>
                    {
                        (blogs ?? []).length > 0 ? (
                            <div className="blog-cont three mt-[2em]">
                                {
                                    blogs?.map((item, index) => (
                                        <div className="blog flex flex-col justify-between gap-4" key={index}>
                                            <Image
                                                aria-hidden
                                                src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Logo"
                                                width={400}
                                                height={264}
                                                className="object-cover rounded-[.5em] h-[10em]"
                                            />
        
                                            <div className="flex gap-3 text-[.7rem]">
                                                {/* <p>{ dayjs(item?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")}</p> <span className="font-bold">&middot;</span> <p>3 mins read</p> */}
                                                <p>{ dayjs(item?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")}</p>
                                            </div>
        
                                            <div className="flex flex-col gap-3">
                                                <h2 className="title-2">{item.title}</h2>
                                                <p className="text-justify text-[.9rem]">{item.excerpt}</p>
                                                <div className="flex items-center justify-between">
                                                    {/* <div className="flex gap-2">
                                                        <span className="blog-tab">IT</span>
                                                        <span className="blog-tab">Technology</span>
                                                    </div> */}
                                                    <div className="flex gap-2">
                                                        <button className="flex gap-2 btn btn-small btn-primary-fill" onClick={(e) => editBlogTrigger(item)}>
                                                            <p>Edit</p>                                                
                                                        </button>
                                                        <button className="flex gap-2 btn btn-small error two" onClick={(e) => deleteResourceTrigger(item)}>
                                                            <p>Delete</p>                                                
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (

                            <div className="text-center title-3">
                                <p>No Blog Posts Yet</p>
                            </div>
                        )
                    }
                </div>

                {/* <div className="section flex items-end justify-end">
                    <div className="pagination text-[.8rem]">
                        <div className="prev btn normal two flex gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-short-left.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain rounded-[.5em]"
                            />

                            <p className="text-[.8rem]">Previous</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="pag-el active">1</span>
                            <span className="pag-el">2</span>
                            <span className="pag-el">3</span>
                        </div>
                        <div className="prev btn normal two flex gap-2">
                            <p className="text-[.8rem]">Next</p>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-short-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain rounded-[.5em]"
                            />
                        </div>
                    </div>
                </div> */}

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
                                    Are you sure you want to delete this blog? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    onClick={deleteBlog}
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

export default BlogBody