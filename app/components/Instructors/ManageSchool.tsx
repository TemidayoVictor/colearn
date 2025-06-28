'use client';
import React, {useEffect} from "react";
import { instructorStore } from "@/zustand/instructorStore";
import { useConsultant } from "@/hooks/useConsultant";
import { degreeOptions } from "@/data/subjects";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";

type ManageSchoolProps = {
    type: string
}

const ManageSchool = ({type}:ManageSchoolProps) => {
    const school = instructorStore((state) => state.school);

    const {
        editSchoolData,
        setEditSchoolData,
        buttonLoader,
        schoolData,
        addSchool,
        removeSchool,
        handleSchoolChange,
        submitSchools,
        handleSchoolEdit,
        editSchool,
        editSchErrors,
    } = useConsultant();

    if(type == 'edit') {
        useEffect(() => {
            const init = async () => {
                setEditSchoolData({
                    name: school?.name || "",
                    degree: school?.degree || "",
                    field_of_study: school?.field_of_study || "",
                    start_year: school?.start_year || "",
                    end_year:school?.end_year || "",
                    id: school?.id || "",  
                });
            };
    
            init();
    
        }, []);        
    }

    return(
        <div>
            {
                type == 'add' &&
                <div>
                    <div>
                        <h2 className="title-3">Add School</h2>
                    </div>
                    {
                        schoolData.map((item, index) => (
                            <div className="upload-course-body" key={index}>
                                <div className="input-box">
                                    <label htmlFor="title" className="font-semibold">Name of School <span className="text-red-500">*</span></label>
                                    <input
                                        name="name"
                                        className={`input-field`}
                                        placeholder="e.g. Oxford"
                                        value={item.name}
                                        onChange={(e) => handleSchoolChange(index, 'name', e.target.value)}
                                    />
                                </div>
            
                                <div className="input-box">
                                    <label htmlFor="title" className="font-semibold">Degree<span className="text-red-500">*</span></label>
                                    <select name="degree" id="" className={`input-field`} value={item.degree} onChange={(e) => handleSchoolChange(index, 'degree', e.target.value)}>
                                        <option value="">Select one</option>
                                        {
                                            degreeOptions.map((degree, index) => (
                                                <option key={index} value={degree}>
                                                    {degree}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                
                                <div className="input-box">
                                    <label htmlFor="title" className="font-semibold">Field of Study <span className="text-red-500">*</span></label>
                                    <input
                                        name="field_of_study"
                                        className={`input-field`}
                                        placeholder="e.g. Software Engineering"
                                        value={item.field_of_study}
                                        onChange={(e) => handleSchoolChange(index, 'field_of_study', e.target.value)}
                                    />
                                </div>
            
                                <div className="auth-flex">
                                    <div className="input-flex-item">
                                        <label htmlFor="start_year" className="font-semibold">Start Year <span className="text-red-500">*</span></label>
                                        <input
                                            type="number"
                                            name="start_year"
                                            className="input-field"
                                            min="1900"
                                            max={new Date().getFullYear()}
                                            placeholder="e.g. 2010"
                                            value={item.start_year}
                                            onChange={(e) => handleSchoolChange(index, 'start_year', e.target.value)}
                                            onInput={(e) => {
                                                if (e.currentTarget.value.length > 4) {
                                                    e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                            }}}
                                        />
                                    </div>
            
                                    <div className="input-flex-item">
                                        <label htmlFor="end_year" className="font-semibold">End Year <span className="text-red-500">*</span></label>
                                        <input
                                            type="number"
                                            name="end_year"
                                            className="input-field"
                                            min="1900"
                                            max="2099"
                                            placeholder="e.g. 2022"
                                            value={item.end_year}
                                            onChange={(e) => handleSchoolChange(index, 'end_year', e.target.value)}
                                            onInput={(e) => {
                                                if (e.currentTarget.value.length > 4) {
                                                    e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                            }}}
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                {
                                    schoolData.length > 1 && (
                                        <div className="flex items-end justify-end">
                                            <button
                                                type="button"
                                                className="text-[.9rem] text-red-500 underline"
                                                onClick={() => removeSchool(index)}
                                            >

                                            Remove
                                            </button>
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        ))
                    }

                    <div className="mb-4">
                        <div>
                            <p className="text-[.9rem] font-bold">Add Other School</p>
                            <p className="text-[.8rem] color-grey-text">We recommend adding other educational information. They’ll also appear in your profile section.</p>
                        </div>
                        <button className="btn normal mt-2" onClick={addSchool}>+ Add Education</button>

                    </div>

                    <button className="btn btn-primary-fill full" onClick={submitSchools}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please Wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Continue</span>
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
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'edit' &&
                <div>
                    <div>
                        <h2 className="title-3">Edit School</h2>
                    </div>
                    <div className="upload-course-body">
                        <div className="input-box">
                            <label htmlFor="title" className="font-semibold">Name of School <span className="text-red-500">*</span></label>
                            <input
                                name="name"
                                className={`input-field ${editSchErrors.name ? 'error' : ''}`}
                                placeholder="e.g. Oxford"
                                value={editSchoolData.name}
                                onChange={handleSchoolEdit}
                            />
                        </div>
    
                        <div className="input-box">
                            <label htmlFor="title" className="font-semibold">Degree<span className="text-red-500">*</span></label>
                            <select name="degree" id="" className={`input-field ${editSchErrors.degree ? 'error' : ''}`} value={editSchoolData.degree} onChange={handleSchoolEdit}>
                                <option value="">Select one</option>
                                {
                                    degreeOptions.map((degree, index) => (
                                        <option key={index} value={degree}>
                                            {degree}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="input-box">
                            <label htmlFor="title" className="font-semibold">Field of Study <span className="text-red-500">*</span></label>
                            <input
                                name="field_of_study"
                                className={`input-field ${editSchErrors.field_of_study ? 'error' : ''}`}
                                placeholder="e.g. Software Engineering"
                                value={editSchoolData.field_of_study}
                                onChange={handleSchoolEdit}
                            />
                        </div>
    
                        <div className="auth-flex">
                            <div className="input-flex-item">
                                <label htmlFor="start_year" className="font-semibold">Start Year <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    name="start_year"
                                    className={`input-field ${editSchErrors.start_year ? 'error' : ''}`}
                                    min="1900"
                                    max={new Date().getFullYear()}
                                    placeholder="e.g. 2010"
                                    value={editSchoolData.start_year}
                                    onChange={handleSchoolEdit}
                                    onInput={(e) => {
                                        if (e.currentTarget.value.length > 4) {
                                            e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                    }}}
                                />
                            </div>
    
                            <div className="input-flex-item">
                                <label htmlFor="end_year" className="font-semibold">End Year <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    name="end_year"
                                    className={`input-field ${editSchErrors.end_year ? 'error' : ''}`}
                                    min="1900"
                                    max="2099"
                                    placeholder="e.g. 2022"
                                    value={editSchoolData.end_year}
                                    onChange={handleSchoolEdit}
                                    onInput={(e) => {
                                        if (e.currentTarget.value.length > 4) {
                                            e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                    }}}
                                />
                            </div>
                        </div>

                        <button className="mt-4 btn btn-primary-fill full" onClick={editSchool}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please Wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Continue</span>
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

export default ManageSchool