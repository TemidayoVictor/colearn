import React from "react";
import { UseCourses } from "@/hooks/useCourses";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";

type ManageModuleProps = {
    type: string;
}

const ManageModule = ({type}: ManageModuleProps) => {
        const {
            buttonLoader,
            uploadModule,
            formData2,
            errors2,
            handleInputChange2,
        } = UseCourses()
    return (
        <div>
            <div>
                <h2 className="title-3">Add Module</h2>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Module Title<span className="text-red-500">*</span> </label>
                    <input 
                        type="text" 
                        className={`upload-course-input ${errors2.title ? 'error' : ''}`} 
                        name="title"
                        value={formData2.title}
                        placeholder="Title of Module"
                        onChange={handleInputChange2} 
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="" className="text-[.9rem] font-semibold">Brief Description <span className="text-red-500">*</span></label>
                    <textarea
                        name="description"
                        className={`upload-course-textarea ${errors2.description ? 'error' : ''}`}
                        placeholder="Brief description of the Module"
                        value={formData2.description}
                        onChange={handleInputChange2}
                    />
                </div>

                <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={uploadModule}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Adding Module . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Add Module</span>
                            </div>                                        
                        )
                    }                                        
                </button>
            </div>

            {/* {
                    modalType != 'booking' &&
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
                } */}
        </div>
    )
}

export default ManageModule