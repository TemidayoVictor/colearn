'use client';
import React, {useState} from "react";
import Image from "next/image";

const DeactivateAccount = () => {
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    return (
        <div>
            {
                !showSuccess &&
                <div>
                    <h2 className="title-3">Deactivate Account</h2>
                    <p className="my-3 text-[.9rem] color-grey-text">Please note that after this request is processed, you will no longer be able to access your account but the course content you sold would be accessible to the active and past students or user. For further  information please see our Privacy Policy. For other information or requests about your personal information, please see our privacy policy.</p>

                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Select a reason</p>
                        <div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="reason" />
                                <label htmlFor="" className="text-[.9rem] color-grey-text">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="reason" />
                                <label htmlFor="" className="text-[.9rem] color-grey-text">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="reason" />
                                <label htmlFor="" className="text-[.9rem] color-grey-text">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="" className="font-semibold text-[.9rem]">Other Information (Optional)</label>
                            <textarea name="" id="" className="upload-course-textarea two"></textarea>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bt-btn btn btn-normal-fill" onClick={() => setShowSuccess(true)}>
                                <span>Deactivate Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                showSuccess &&
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/delete-account.png"
                            alt="Colearn Logo"
                            width={240}
                            height={240}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="title-3">Password updated</h2>
                        <p className="color-grey-text text-[.8rem]">Your have successfully updated your password</p>
                    </div>
                    <button className="btn btn-normal-fill w-full">
                        <span>Dismiss</span>
                    </button>
                </div>
            }
        </div>
    )
}

export default DeactivateAccount