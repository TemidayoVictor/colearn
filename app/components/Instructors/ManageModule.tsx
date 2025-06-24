import React, {useEffect} from "react";
import { UseCourses } from "@/hooks/useCourses";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";
import { courseStore } from "@/zustand/courseStore";

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
        formData2b,
        errors2b,
        handleInputChange2b,
        editModule,
        setFormData2b,
    } = UseCourses()

    const module = courseStore((state) => state.module);

    useEffect(() => {
        const init = async () => {
            setFormData2b({
                title: module?.title || "",
                description: module?.description || "",
                order: module?.order || 0,
                moduleId: module?.id || 0,
            });
        };

        init();

    }, []);
    

    return (
        <div>
            {
                type == "add" &&
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
                </div>
            }

            {
                type == "edit" &&
                <div>
                    <div>
                        <h2 className="title-3">Edit Module</h2>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Module Title<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`upload-course-input ${errors2b.title ? 'error' : ''}`} 
                                name="title"
                                value={formData2b.title}
                                placeholder="Title of Module"
                                onChange={handleInputChange2b} 
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Brief Description <span className="text-red-500">*</span></label>
                            <textarea
                                name="description"
                                className={`upload-course-textarea ${errors2b.description ? 'error' : ''}`}
                                placeholder="Brief description of the Module"
                                value={formData2b.description}
                                onChange={handleInputChange2b}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Module Position<span className="text-red-500">*</span> </label>
                            <input 
                                type="number" 
                                className={`upload-course-input ${errors2b.order ? 'error' : ''}`} 
                                name="order"
                                value={formData2b.order}
                                placeholder="Module Position"
                                onChange={handleInputChange2b} 
                            />
                        </div>

                        <input 
                            type="number"  
                            name="moduleId"
                            defaultValue={formData2b.moduleId} 
                            hidden
                        />

                        <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={editModule}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Updating Module . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Update Module</span>
                                    </div>                                        
                                )
                            }                                        
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ManageModule