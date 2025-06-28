import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MultiDropdownSelector from "../MultiDropdownSelector";
import { Experience, Bank } from "@/app/Types/types";
import BookingDetails from "../BookingDetails";
import ChangePassword from "./ChangePassword";
import ManageModule from "./ManageModule";
import ManageVideo from "./ManageVideo";
import ManageResoure from "./ManageResource";
import ManageSchool from "./ManageSchool";
import ManageCertification from "./ManageCertification";
import { motion, AnimatePresence } from 'framer-motion';
import { UseCourses } from "@/hooks/useCourses";
import ButtonLoader from "../buttonLoader";

type AccountModalProps = {
    modalType: string;
    modalClose: () => void;
    experience?: Experience | null;
    bank?: Bank | null;
    subType?: string | null;
}

const AccountModal = ({modalType, modalClose, experience, bank, subType}: AccountModalProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    const {
        buttonLoader,
        deleteCourse,
        deleteModule,
        deleteVideo,
        deleteResource,
    } = UseCourses();

    const [formData, setFormData] = useState({
        company: experience?.company || "",
        title: experience?.title || "",
        duration: experience?.duration || "",
        description: experience?.description || "",
        bank: bank?.bank || "",
    });

    return (
        <div className="modal-container">
            <div className="modal">
                
                {
                    (modalType == 'personal' || modalType == 'personal2') &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Personal Information</h2>
                            {
                                modalType == 'personal' &&
                                <p className="color-grey-text text-[.8rem]">Provide course information.</p>
                            }
                        </div>

                        <div className="mt-[1rem]">
                            <p className="font-nomral text-[.9rem]">Update Profile Picture </p>
                            <div className="mt-3 flex items-center gap-3">
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/upload-img.png"
                                        alt="Colearn Logo"
                                        width={64}
                                        height={64}
                                        className="object-contain rounded-[50%]"
                                    />
                                </div>
                                <div>
                                    <p className="text-[.9rem] color-normal">Select an image</p>
                                    <p className="text-[.7rem] mt-1 color-grey-text">Make sure the file is below 2mb</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                {/* <div className="input-box">
                                    <label htmlFor="">What Languages do you speak? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
                                </div> */}

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">What gender do you identify as? <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'social' && 
                    <div>
                        <div>
                            <h2 className="title-3">Edit Social Media Information</h2>
                            <p className="color-grey-text text-[.8rem]">Update Social Media information.</p>
                        </div>

                        <div className="mt-[1rem]">

                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">Facebook URL label <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" placeholder="Enter Facebook URL" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Instagram URL label  <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" placeholder="Enter Instagram URL" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">X URL label  <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" placeholder="Enter X URL" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'bio' && 
                    <div>
                        <div>
                            <h2 className="title-3">Edit Bio</h2>
                            <p className="color-grey-text text-[.8rem]">Update Bio information.</p>
                        </div>

                        <div className="mt-[1rem]">

                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">Bio <span className="text-red-500">*</span></label>
                                    <textarea name="" id="" className="upload-course-textarea two"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'addexperience' &&
                    <div>
                        <div>
                            <h2 className="title-3">Add Work Experience</h2>
                            <p className="color-grey-text text-[.8rem]">Add Work Experience.</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                
                                <div className="input-box">
                                    <label htmlFor="">Company <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Position <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field"/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Time Period <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field"/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Experience<span className="text-red-500">*</span></label>
                                    <textarea name="" id="" className="upload-course-textarea two"></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'experience' &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Work Experience</h2>
                            <p className="color-grey-text text-[.8rem]">Update Work Experience.</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                
                                <div className="input-box">
                                    <label htmlFor="">Company <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Position <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Time Period <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Experience<span className="text-red-500">*</span></label>
                                    <textarea name="" id="" className="upload-course-textarea two" onChange={(e) => setFormData({ ...formData, description: e.target.value })} defaultValue={experience?.description}></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'career' &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Career Information</h2>
                            <p className="color-grey-text text-[.8rem]">Update Career information.</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">Primary Discipline / Expertise <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field"/>
                                </div>

                                {/* <div className="input-box">
                                    <label htmlFor="">Which disciplines are relevant in your expertise(s)? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'skills' &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Skills</h2>
                            <p className="color-grey-text text-[.8rem]">Update Skills.</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                {/* <div className="input-box">
                                    <label htmlFor="">Which skill(s) do you have experience in? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'addBank' &&
                    <div>
                        <div>
                            <h2 className="title-3">Add Bank Information</h2>
                            <p className="color-grey-text text-[.8rem]">Select your country before you provide Bank Information</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">Select Country <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Select Bank<span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Account Name <span className="text-red-500">*</span></label>
                                    <input name="" id="" className="input-field" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Account Number <span className="text-red-500">*</span></label>
                                    <input name="" id="" className="input-field" />
                                </div>

                                <div className="alert notification">
                                    <p className="head">Note</p>
                                    <p className="bod">Ensure your name on your CoLearn account is the same as your bank account details.</p>          
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'editbank' &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Bank Information</h2>
                            <p className="color-grey-text text-[.8rem]">Select your country before you provide Bank Information</p>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                <div className="input-box">
                                    <label htmlFor="">Select Country <span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select one</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Bank<span className="text-red-500">*</span></label>
                                    <input name="" id="" className="input-field" value={bank?.bank} onChange={(e) => setFormData({ ...formData, bank: e.target.value })}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Account Name <span className="text-red-500">*</span></label>
                                    <input name="" id="" className="input-field" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Account Number <span className="text-red-500">*</span></label>
                                    <input name="" id="" className="input-field" />
                                </div>

                                <div className="alert notification">
                                    <p className="head">Note</p>
                                    <p className="bod">Ensure your name on your CoLearn account is the same as your bank account details.</p>          
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'booking' &&
                    <BookingDetails displayType={subType} />
                }

                {
                    modalType == 'block-course' &&
                    <div>
                        <div>
                            <h2 className="title-3">Please provide a reason for blocking this Course </h2>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Provide Reason</label>
                            <textarea name="" id="" className="textarea"></textarea>
                        </div>
                    </div>
                }

                {
                    modalType == 'view-experience' &&
                    <div>
                        <div>
                            <h2 className="title-3">Work Experience - Favi Ayomide</h2>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                
                                <div className="input-box">
                                    <label htmlFor="">Company <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} readOnly/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Position <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} readOnly/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Time Period <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" value={experience?.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} readOnly/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Experience<span className="text-red-500">*</span></label>
                                    <textarea name="" id="" className="upload-course-textarea two" onChange={(e) => setFormData({ ...formData, description: e.target.value })} defaultValue={experience?.description} readOnly></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'add-admin' &&
                    <div>
                        <div>
                            <h2 className="title-3">Add Team Member</h2>
                        </div>

                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                
                                <div className="input-box">
                                    <label htmlFor="">Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="input-field" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Email<span className="text-red-500">*</span></label>
                                    <input type="email" className="input-field" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="">Role<span className="text-red-500">*</span></label>
                                    <select name="" id="" className="input-field">
                                        <option value="">Select Role</option>
                                        <option value="">Administrator</option>
                                        <option value="">Staff</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    modalType == 'admin-change-password' &&
                    <div>
                        <div className="mt-[1rem]">
                            <div className="mt-4">
                                <ChangePassword type="admin"/>
                            </div>
                        </div>
                    </div>
                }

{
                    modalType == 'delete-course' &&
                    <div>
                        <AnimatePresence>
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
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
                                    Are you sure you want to delete this course? This action cannot be undone.
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                    onClick={modalClose}
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

                {
                    modalType == 'add-module' &&
                    <ManageModule type="add" />
                }

                {
                    modalType == 'edit-module' &&
                    <ManageModule type="edit" />
                }

                {
                    modalType == 'add-video' &&
                    <ManageVideo type="add" />
                }

                {
                    modalType == 'edit-video' &&
                    <ManageVideo type="edit" />
                }

                {
                    modalType == 'add-resource' &&
                    <ManageResoure type="add" />
                }

                {
                    modalType == 'edit-resource' &&
                    <ManageResoure type="edit" />
                }

                {   
                    modalType == 'add-school' &&
                    <ManageSchool type="add" />
                }

                {
                    modalType == 'edit-school' &&
                    <ManageSchool type="edit" />
                }
                
                <div className="modal-close">
                    <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={modalClose}/>
                </div>
            
            </div>
            
        </div>
    )
}

export default AccountModal;