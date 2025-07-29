import React, {useState, useMemo} from "react";
import Image from "next/image";
import Link from "next/link";
import { UseCourses } from "@/hooks/useCourses";
import { courseStore } from "@/zustand/courseStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt, faTimes, faFolderOpen  } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLoader from "../buttonLoader"; 
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import EmptyPage from "../EmptyPage";

dayjs.extend(relativeTime);

type GridContentProps = {
    tab?: string
}

const GridContent = ({tab}: GridContentProps) => {
    const courses = courseStore((state) => state.courses);
    const courseUse = useMemo(() => {
        if (tab === 'live') {
            return Array.isArray(courses)
                ? courses.filter((course) => course.is_published)
                : [];
        }

        else if( tab === 'draft') {
            return Array.isArray(courses)
                ? courses.filter((course) => !course.is_published)
                : [];
        }

         else {
            return courses;
        }
    }, [tab, courses]);

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const {
        buttonLoader,
        deleteCourse,
    } = UseCourses();

    const toggleMenu = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const deleteCourseTrigger = (id: string | undefined): void => {
        courseStore.getState().setCourseId(id);
        setOpenIndex(null);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
    }
    
    return (
        <div>
            {
                courseUse.length > 0 ? (
                    <div className="courses-container">
                        {
                            courseUse.map((item, index) => (
                                <div className="course-box" key={index}>
                                    <div className="course-top">
                                        <Image
                                            aria-hidden
                                            src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course-img-2.png"}
                                            alt="Colearn Image"
                                            width={254}
                                            height={233}
                                            className="object-cover rounded-[.5em] w-[100%]"
                                        />
                                    </div>
                                    <div className="course-bottom relative">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="w-[75%]">
                                                <p className="font-bold text-res-1"> {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title} </p>
                                                <p className="text-res-2">Uploaded {dayjs(item.created_at).fromNow()}</p>
                                            </div>
                                            <div>
                                            <div className="">
                                                <button className="menu-trigger" onClick={() => toggleMenu(index)}>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                </button>
                                                    
                                                {
                                                    openIndex === index &&
                                                    <div>
                                                        <div className="menu-overlay active" onClick={() => setOpenIndex(null)}></div>
                                                        <div className="bottom-menu two slide-up">
                                                        <div className="menu-actions">
                                                            {/* <button className="menu-btn">
                                                                <FontAwesomeIcon icon={faEye} className="icon" /> View Course
                                                            </button> */}
                                                            <Link href={`course-page/${item.id}`} className="menu-btn">
                                                                <FontAwesomeIcon icon={faEye} className="icon"/> View Course
                                                            </Link>
                                                            <Link href={`/instructors/edit-course/${item.id}`} className="menu-btn">
                                                                <FontAwesomeIcon icon={faEdit} className="icon"/> Edit Course
                                                            </Link>
                                                            <Link href={`/instructors/manage-course-data/${item.id}`} className="menu-btn">
                                                                <FontAwesomeIcon icon={faFolderOpen} className="icon"/>Manage Course
                                                            </Link>
                                                            <button className="menu-btn delete" onClick={(e) => deleteCourseTrigger(item.id)}>
                                                                <FontAwesomeIcon icon={faTrashAlt} className="icon"/> Delete Course
                                                            </button>
                                                            <button className="menu-btn cancel" onClick={() => toggleMenu(index)}>
                                                                <FontAwesomeIcon icon={faTimes} className="icon"/> Cancel
                                                            </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center justify-between">
                                                
                                                <div className="flex items-center gap-1">
                                                    <div>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/moneys-3.png"
                                                            alt="Colearn Image"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-res-2">${item.price}</p>
                                                </div>

                                                <div className="flex items-center gap-1">
                                                    <div>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/people-3.png"
                                                            alt="Colearn Image"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-res-2">{item.enrollments.length} Enrolled</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-[.1em]">
                                                    <div>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/profile-tick-3.png"
                                                            alt="Colearn Image"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-res-2">{item.enrollments.filter(enrollment => enrollment?.completed_at).length} completed</p>
                                                </div>

                                                <div className="flex items-center gap-[.2em]">
                                                    <div>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/star.png"
                                                            alt="Colearn Image"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-res-2">{item.reviews.length} review {item.reviews.length > 1 ? 's' : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
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
                                            Are you sure you want to delete this course? All assets and data related to this course will be deleted. This action cannot be undone.
                                        </p>

                                        <div className="mt-6 flex justify-end gap-3">
                                            <button
                                            onClick={closeDeleteModal}
                                            className="px-4 py-2 bg-gray-200 text-gray-800 text-[.8rem] rounded-md hover:bg-gray-300 transition"
                                            >
                                            Cancel
                                            </button>
                                            <button
                                            onClick={deleteCourse}
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
                ) : (
                    <div>
                        {
                            tab === 'draft' ?
                            <EmptyPage image="/assets/images/empty-image.png" header="No Draft Courses" content="You have not created any draft course yet" imageWidth={400} imageHeight={240}/>    
                            :
                            <EmptyPage image="/assets/images/empty-image.png" header="No Published Courses" content="You have not published any course yet" imageWidth={400} imageHeight={240}/>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default GridContent;