import React, {useEffect} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import { useAdmin } from "@/hooks/useAdmin";
import ButtonLoader from "../buttonLoader";

type Props = {
    type?: string;
}

const ManageUtilities = ({type}: Props) => {
    const blog = genralStore((state) => state.blog)
    const category = genralStore((state) => state.category);
    const faq = genralStore((state) => state.faq)

    const {
        buttonLoader,
        blogData,
        blogErrors,
        handleBlogChange,
        createBlog,
        handleClick,
        fileInputRef,
        preview,
        handleFileChange,
        setBlogData,
        editBlog,
        categoryData,
        setCategoryData,
        categoryErrors,
        addCategory,
        editCategory,
        deleteCategory,
        handleCategoryChange,
        handleCategoryFileChange,
        faqData,
        setFaqData,
        faqErrors,
        addFaq,
        editFaq,
        deleteFaq,
        handleFaqChange,
    } = useAdmin();

    if(type == 'edit-blog') {
        useEffect(() => {
            const init = async () => {
                setBlogData({
                    id: blog?.id || 0,
                    user_id: blog?.user_id || 0,
                    title: blog?.title || "",
                    excerpt: blog?.excerpt || "",
                    body:blog?.body || "",
                    is_published: blog?.is_published || false,
                    thumbnail: blog?.thumbnail,  
                    image: null,
                });
            };
    
            init();
    
        }, []);        
    }

    if(type == 'edit-category') {
        useEffect(() => {
            const init = async () => {
                setCategoryData({
                    id: category?.id || 0,
                    name: category?.name || "",
                    thumbnail: category?.thumbnail || "",  
                    image: null,
                });
            };
    
            init();
    
        }, []);        
    }

    if(type == 'edit-faq') {
        useEffect(() => {
            const init = async () => {
                setFaqData({
                    id: faq?.id || 0,
                    question:faq?.question || "",
                    answer: faq?.answer || "", 
                });
            };
            init();
    
        }, []);        
    }
    
    return (
        <div>
            {
                type == 'create-blog' &&
                <div>
                    <p className="text-[.9rem] font-semibold mt-3">Blog Image <span className="text-red-500">*</span></p>
                    <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                        <div>
                            <Image
                                aria-hidden
                                src={preview || "/assets/images/upload-img.png"}
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

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    
                    <div className="mt-4">
                            <div className="mt-4 input-box">
                                <label htmlFor="" className="text-[.9rem] font-semibold">Title<span className="text-red-500">*</span> </label>
                                <input 
                                    type="text" 
                                    className={`input-field ${blogErrors.title ? 'error' : ''}`} 
                                    name="title"
                                    value={blogData.title}
                                    placeholder="Title of Blog"
                                    onChange={handleBlogChange} 
                                />
                            </div>

                            <div className="mt-4 input-box">
                                <label htmlFor="" className="text-[.9rem] font-semibold">Body<span className="text-red-500">*</span></label>
                                <textarea
                                    name="body"
                                    className={`textarea ${blogErrors.body ? 'error' : ''}`}
                                    placeholder="Brief description of the Module"
                                    value={blogData.body}
                                    onChange={handleBlogChange}
                                />
                            </div>

                            <div className="mt-4 input-box">
                                <label htmlFor="" className="text-[.9rem] font-semibold">Excerpt<span className="text-red-500">*</span></label>
                                <textarea
                                    name="excerpt"
                                    className={`textarea ${blogErrors.excerpt ? 'error' : ''}`}
                                    placeholder="Brief description of the Module"
                                    value={blogData.excerpt}
                                    onChange={handleBlogChange}
                                />
                            </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={createBlog}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Please wait . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Create</span>
                                    </div>                                        
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                type == 'edit-blog' &&
                <div>
                    <p className="text-[.9rem] font-semibold mt-3">Blog Image <span className="text-red-500">*</span></p>
                    <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                        <div>
                            <Image
                                aria-hidden
                                src={preview || "/assets/images/upload-img.png"}
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

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    
                    <div className="mt-4">
                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Title<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`input-field ${blogErrors.title ? 'error' : ''}`} 
                                name="title"
                                value={blogData.title}
                                placeholder="Title of Blog"
                                onChange={handleBlogChange} 
                            />
                        </div>

                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Body<span className="text-red-500">*</span></label>
                            <textarea
                                name="body"
                                className={`textarea ${blogErrors.body ? 'error' : ''}`}
                                placeholder="Brief description of the Module"
                                value={blogData.body}
                                onChange={handleBlogChange}
                            />
                        </div>

                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Excerpt<span className="text-red-500">*</span></label>
                            <textarea
                                name="excerpt"
                                className={`textarea ${blogErrors.excerpt ? 'error' : ''}`}
                                placeholder="Brief description of the Module"
                                value={blogData.excerpt}
                                onChange={handleBlogChange}
                            />
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editBlog}>
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
                </div>
            }

            {
                type == 'add-category' &&
                <div>
                    <p className="text-[.9rem] font-semibold mt-3">Category Image <span className="text-red-500">*</span></p>
                    <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                        <div>
                            <Image
                                aria-hidden
                                src={preview || "/assets/images/upload-img.png"}
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

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleCategoryFileChange}
                    />
                    
                    <div className="mt-4">
                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Name<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`input-field ${categoryErrors.name ? 'error' : ''}`} 
                                name="name"
                                value={categoryData.name}
                                placeholder="Category Name"
                                onChange={handleCategoryChange} 
                            />
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={addCategory}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Please wait . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Create</span>
                                    </div>                                        
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                type == 'edit-category' &&
                <div>
                    <p className="text-[.9rem] font-semibold mt-3">Category Image <span className="text-red-500">*</span></p>
                    <div className="mt-3 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                        <div>
                            <Image
                                aria-hidden
                                src={preview || "/assets/images/upload-img.png"}
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

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleCategoryFileChange}
                    />
                    
                    <div className="mt-4">
                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Name<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`input-field ${categoryErrors.name ? 'error' : ''}`} 
                                name="name"
                                value={categoryData.name}
                                placeholder="Category Name"
                                onChange={handleCategoryChange} 
                            />
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editCategory}>
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
                </div>
            }

            {
                type == 'add-faq' &&
                <div>
                    <div className="mt-4">
                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Question<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`input-field ${faqErrors.question ? 'error' : ''}`} 
                                name="question"
                                value={faqData.question}
                                placeholder="Question"
                                onChange={handleFaqChange} 
                            />
                        </div>

                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Answer<span className="text-red-500">*</span></label>
                            <textarea
                                name="answer"
                                className={`textarea ${faqErrors.answer ? 'error' : ''}`}
                                placeholder="Answer"
                                value={faqData.answer}
                                onChange={handleFaqChange}
                            />
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={addFaq}>
                            {
                                buttonLoader ? (
                                    <ButtonLoader content="Please wait . . ." />
                                ) : 
                                
                                (
                                    <div className="bt-btn two">
                                        <span>Create</span>
                                    </div>                                        
                                )
                            }
                        </button>
                    </div>
                </div>
            }

            {
                type == 'edit-faq' &&
                <div>
                    <div className="mt-4">
                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Question<span className="text-red-500">*</span> </label>
                            <input 
                                type="text" 
                                className={`input-field ${faqErrors.question ? 'error' : ''}`} 
                                name="question"
                                value={faqData.question}
                                placeholder="Question"
                                onChange={handleFaqChange} 
                            />
                        </div>

                        <div className="mt-4 input-box">
                            <label htmlFor="" className="text-[.9rem] font-semibold">Answer<span className="text-red-500">*</span></label>
                            <textarea
                                name="answer"
                                className={`textarea ${faqErrors.answer ? 'error' : ''}`}
                                placeholder="Answer"
                                value={faqData.answer}
                                onChange={handleFaqChange}
                            />
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editFaq}>
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
                </div>
            }
        </div>
    )
}

export default ManageUtilities