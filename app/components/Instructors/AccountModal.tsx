'use client';
import React,  { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type AccountModalProps = {
    modalType: string;
    modalClose: () => void;
}

const AccountModal = ({modalType, modalClose}: AccountModalProps) => {
    return (
        <div className="modal-container">
            <div className="modal">
                
                {
                    modalType == 'personal' &&
                    <div>
                        <div>
                            <h2 className="title">Edit Personal Information</h2>
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
                
                <div className="modal-close">
                    <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={modalClose}/>
                </div>

                <div className="upload-course-btns mt-4">
                    <button className="btn normal">Cancel</button>

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