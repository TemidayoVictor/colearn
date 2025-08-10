'use client';
import React, {useEffect} from "react";
import ButtonLoader from "./buttonLoader";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import { useOnboarding } from "@/hooks/useOnboarding";
import SubjectSelector from "./SubjectSelector";
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), {
  ssr: false,
});

type EditDetailsProps = {
    type: string;
}


const EditDetails = ({type}:EditDetailsProps) => {
    const {
        buttonLoader,
        formData2, 
        setFormData2,
        errors2,
        categories,
        handleInputChange2,
        editProfessionalDetails,
        experiences,
        handleExperienceChange,
        removeExperience,
        addExperience,
        addExperiences,
        handleSubjectChange,
        selectedSubjects,
        setSelectedSubjects,
        editPreferences,
        experience,
        editExperience,
        handleExpChange,
        setExperience,
        deleteExperience,
    } = useOnboarding();

    const instructor = authStore((state) => state.instructor);
    const experienceFetch = instructorStore((state) => state.experience);

    useEffect(() => {
        setFormData2({
            title: instructor?.title || "",
            headline: instructor?.professional_headline || "",
            category: instructor?.category || "",
            bio: instructor?.bio || "",
            linkedin: instructor?.linkedin_url || "",
            youtube: instructor?.youtube_url || "",
            twitter: instructor?.twitter_url || "",
            website: instructor?.website || "",
        });

    }, [instructor]);

    useEffect(() => {
        if (instructor?.disciplines) {
            try {
              const parsed = JSON.parse(instructor.disciplines);
              setSelectedSubjects(Array.isArray(parsed) ? parsed : []);
            } catch (err) {
              console.error("Failed to parse preferences:", err);
            }
        }

    }, [instructor]);

    if(type == 'editexperience') {
        useEffect(() => {
            setExperience({
                id: experienceFetch?.id || 0,
                title: experienceFetch?.title || "",
                organization: experienceFetch?.organization || "",
                description: experienceFetch?.description || "",
                start_date: experienceFetch?.start_date || "",
                end_date: experienceFetch?.end_date || "",
                currently_working: experienceFetch?.is_current || false,
            });
    
        }, [experienceFetch]);
    }

    return (
        <div>
            {
                type == 'edit-instructor-data' &&
                <div>
                    <div>
                        <h2 className="title-3">Edit Profile</h2>
                        <p className="color-grey-text text-[.8rem]">Update Profile Data.</p>
                    </div>

                    <div className="mt-[1rem]">
                        <div className="mt-3">
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Title<span className="text-red-500">*</span></label>
                                <select name="title" className={`input-field ${errors2.title ? 'error' : ''}`} value={formData2.title} onChange={handleInputChange2}>
                                    <option value="">Select one</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Ms">Ms.</option>
                                    <option value="Dr">Dr.</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Professional Headline<span className="text-red-500">*</span></label>
                                <input name="headline" className={`input-field ${errors2.headline ? 'error' : ''}`} placeholder="Software Engineer, Copywriter, . . ." value={formData2.headline} onChange={handleInputChange2}/>
                            </div>

                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Select Category<span className="text-red-500">*</span></label>
                                <select name="category" className={`input-field ${errors2.category ? 'error' : ''}`} value={formData2.category} onChange={handleInputChange2}>
                                    <option value="">Select one</option>
                                    {
                                        Array.isArray(categories) && categories.map((category) => (
                                            <option key={category.id} value={category.slug}>
                                                {category.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="description" className="font-semibold">Bio <span className="text-red-500">*</span></label>
                                {/* <textarea
                                    name="bio"
                                    className={`textarea ${errors2.bio ? 'error' : ''}`}
                                    placeholder="Let us get to meet you."
                                    value={formData2.bio}
                                    onChange={handleInputChange2}
                                /> */}
                                <Editor
                                    apiKey="t87rwwndacrt9grg1jwlnfaxaabxw3cxj77od5l8m4dhkcox"
                                    value={formData2.bio}
                                    init={{
                                        height: 400,
                                        menubar: false,
                                        // plugins: [
                                        // 'advlist autolink lists link image charmap preview anchor',
                                        // 'searchreplace visualblocks code fullscreen',
                                        // 'insertdatetime media table code help wordcount',
                                        // ],
                                        toolbar:
                                        'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help',
                                    }}
                                    onEditorChange={(content) =>
                                        setFormData2((prev) => ({
                                        ...prev,
                                        bio: content,
                                        }))
                                    }
                                />
                            </div>
                            <p className="font-semibold my-4">Add Social Media Accounts (Optional)</p>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">LinkedIn URL</label>
                                <input name="linkedin" className={`input-field`} value={formData2.linkedin} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">YouTube URL</label>
                                <input name="youtube" className={`input-field`} value={formData2.youtube} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">X URL</label>
                                <input name="twitter" className={`input-field`} value={formData2.twitter} onChange={handleInputChange2}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="" className="font-semibold">Personal Website</label>
                                <input name="website" className={`input-field`} value={formData2.website} onChange={handleInputChange2}/>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editProfessionalDetails}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Update</span>
                                </div>                                        
                            )
                        }
                    </button>

                </div>
            }

            {
                type == 'addexperience' &&
                <div>
                    <div>
                        <h2 className="title-3">Add Work Experience</h2>
                        <p className="color-grey-text text-[.8rem]">Add Work Experience.</p>
                    </div>

                    <div className="mt-[1rem]">
                        {
                            experiences.map((exp, index) => (
                                <div key={index} className="exp">
                                    <div className="input-box">
                                        <label htmlFor="title" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                        <input
                                            name="title"
                                            className={`input-field`}
                                            placeholder="e.g. Senior Developer"
                                            value={exp.title}
                                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                        />
                                    </div>
            
                                    <div className="input-box">
                                        <label htmlFor="organization" className="font-semibold">Organization <span className="text-red-500">*</span></label>
                                        <input
                                            name="organization"
                                            className={`input-field`}
                                            placeholder="e.g. Google, Udemy"
                                            value={exp.organization}
                                            onChange={(e) => handleExperienceChange(index, 'organization', e.target.value)}
                                        />
                                    </div>
            
                                    <div className="input-box">
                                        <label htmlFor="description" className="font-semibold">Description <span className="text-red-500">*</span></label>
                                        <textarea
                                            name="description"
                                            className={`textarea`}
                                            placeholder="Briefly describe your role..."
                                            value={exp.description}
                                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                        />
                                    </div>
            
                                    <div className="auth-flex">
                                        <div className="input-flex-item">
                                        <label htmlFor="start_date" className="font-semibold">Start Date</label>
                                        <input
                                            type="date"
                                            name="start_date"
                                            className={`input-field`}
                                            value={exp.start_date}
                                            onChange={(e) => handleExperienceChange(index, 'start_date', e.target.value)}
                                        />
                                        </div>
            
                                        <div className="input-flex-item">
                                            <label htmlFor="end_date" className="font-semibold">End Date</label>
                                            <input
                                                type="date"
                                                name="end_date"
                                                className={`input-field`}
                                                value={exp.end_date}
                                                onChange={(e) => handleExperienceChange(index, 'end_date', e.target.value)}
                                                disabled={exp.currently_working}
                                            />
                                        </div>
                                    </div>
            
                                    <div className="mt-3">
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="currently_working"
                                            checked={exp.currently_working}
                                            onChange={(e) => handleExperienceChange(index, 'currently_working', e.target.checked) }
                                        />
                                        I’m currently working in this role
                                        </label>
                                    </div>

                                    <div className="mt-3">
                                    {
                                        experiences.length > 1 && (
                                            <div className="flex items-end justify-end">
                                                <button
                                                    type="button"
                                                    className="text-[.9rem] text-red-500 underline"
                                                    onClick={() => removeExperience(index)}
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

                        <button className="btn normal my-4" onClick={addExperience}>+ Add Experience</button>
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={addExperiences}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Update</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'editexperience' &&
                <div>
                    <div>
                        <h2 className="title-3">Edit Work Experience</h2>
                        <p className="color-grey-text text-[.8rem]">Edit Work Experience.</p>
                    </div>

                    <div className="mt-[1rem]">
                        <div className="exp">
                            <div className="input-box">
                                <label htmlFor="title" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                <input
                                    name="title"
                                    className={`input-field`}
                                    placeholder="e.g. Senior Developer"
                                    value={experience.title}
                                    onChange={handleExpChange}
                                />
                            </div>
    
                            <div className="input-box">
                                <label htmlFor="organization" className="font-semibold">Organization <span className="text-red-500">*</span></label>
                                <input
                                    name="organization"
                                    className={`input-field`}
                                    placeholder="e.g. Google, Udemy"
                                    value={experience.organization}
                                    onChange={handleExpChange}
                                />
                            </div>
    
                            <div className="input-box">
                                <label htmlFor="description" className="font-semibold">Description <span className="text-red-500">*</span></label>
                                <textarea
                                    name="description"
                                    className={`textarea`}
                                    placeholder="Briefly describe your role..."
                                    value={experience.description}
                                    onChange={handleExpChange}
                                />
                            </div>
    
                            <div className="auth-flex">
                                <div className="input-flex-item">
                                <label htmlFor="start_date" className="font-semibold">Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    className={`input-field`}
                                    value={experience.start_date}
                                    onChange={handleExpChange}
                                />
                                </div>
    
                                <div className="input-flex-item">
                                    <label htmlFor="end_date" className="font-semibold">End Date</label>
                                    <input
                                        type="date"
                                        name="end_date"
                                        className={`input-field`}
                                        value={experience.end_date}
                                        onChange={handleExpChange}
                                        disabled={experience.currently_working}
                                    />
                                </div>
                            </div>
    
                            <div className="mt-3">
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="currently_working"
                                    checked={experience.currently_working}
                                    onChange={(e) =>
                                        setExperience((prev) => ({
                                          ...prev,
                                          currently_working: e.target.checked,
                                        }))
                                    }
                                />
                                I’m currently working in this role
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editExperience}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Update</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'skills' &&
                <div>
                    <div>
                        <h2 className="title-3">Disciplines</h2>
                        <p className="color-grey-text text-[.8rem]">Update Disciplines.</p>
                    </div>

                    <div className="mt-[1rem]">
                        <div className="mt-3">
                            <SubjectSelector onChange={handleSubjectChange} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full mt-4" onClick={editPreferences}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Update</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

        </div>
    )
}

export default EditDetails