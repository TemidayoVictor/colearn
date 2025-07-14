'use client';
import React, {useEffect} from "react";
import { genralStore } from "@/zustand/generalStore";
import { authStore } from "@/zustand/authStore";
import { UseCourses } from "@/hooks/useCourses";
import ButtonLoader from "./buttonLoader";

const AddReview = () => {
    const {
        addReview,
        buttonLoader,
        reviewData,
        setReviewData,
        reviewError,
        handleReviewChange,
    } = UseCourses();
    const review = genralStore((state) => state.review)
    const course = genralStore((state) => state.course)

    const userId = authStore((state) => (state.user?.id))

    useEffect(() => {
        const init = async () => {
            setReviewData({
                id: review?.id || "",
                user_id: userId  || "",
                course_id: course?.id || "",
                title: review?.title || "",
                review: review?.review || "",
                rating: review?.rating || 0
            });
        };

        init();

    }, []);
    
    return (
        <div>
            <div>
                <div>
                    <h2 className="title-3">Leave Review</h2>
                    <p className="color-grey-text text-[.8rem]">Share your thoughts and rate your learning experience for this course.</p>
                </div>

                <div className="mt-[1rem]">

                    <div className="mt-4">
                        <div className="input-box">
                            <label htmlFor="">Title <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="input-field" 
                                placeholder="Title e.g Very Good Service" 
                                name="title"
                                onChange={handleReviewChange}
                                value={reviewData.title}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Review  <span className="text-red-500">*</span></label>
                            <textarea name="review" id="" className="textarea" onChange={handleReviewChange} value={reviewData.review}></textarea>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Rating<span className="text-red-500">*</span></label>
                            <select name="rating" id="" className="input-field" onChange={handleReviewChange} value={reviewData.rating}>
                                <option value="">Select Rating</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={addReview}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Submit</span>
                                </div>                                        
                            )
                        }
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReview