import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MultiDropdownSelector from "../MultiDropdownSelector";
import { Experience, Bank } from "@/app/Types/types";

type AccountModalProps = {
    modalType: string;
    modalClose: () => void;
    experience?: Experience | null;
    bank?: Bank | null;
}

const AccountModal = ({modalType, modalClose, experience, bank}: AccountModalProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
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
                    modalType == 'personal' &&
                    <div>
                        <div>
                            <h2 className="title-3">Edit Personal Information</h2>
                            <p className="color-grey-text text-[.8rem]">Provide course information.</p>
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

                                <div className="input-box">
                                    <label htmlFor="">What Languages do you speak? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
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

                                <div className="input-box">
                                    <label htmlFor="">Which disciplines are relevant in your expertise(s)? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
                                </div>
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
                                <div className="input-box">
                                    <label htmlFor="">Which skill(s) do you have experience in? <span className="text-red-500">*</span></label>
                                    <MultiDropdownSelector
                                        options={["English", "French", "Yoruba", "Igbo", "Hausa", "German", "Spanish", "Chinese", "Japanese", "Korean"]}
                                        selected={selectedItems}
                                        setSelected={setSelectedItems}
                                    />
                                </div>
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
                
                <div className="modal-close">
                    <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={modalClose}/>
                </div>

                <div className="upload-course-btns two">
                    <button className="btn normal" onClick={modalClose}>Cancel</button>

                    <button className="flex items-center gap-2 btn btn-primary-fill">
                        <span>Update</span>
                        <span>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                        </span>
                    </button>
                </div>
            
            </div>
            
        </div>
    )
}

export default AccountModal;