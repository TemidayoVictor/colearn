'use client';
import React, {useEffect} from "react";
import { useOnboarding } from "@/hooks/useOnboarding";
import { authStore } from "@/zustand/authStore";
import ButtonLoader from "./buttonLoader";

const UpdateBank = () => {
    
    const {
        bankId, 
        setBankId,
        updateBank,
        buttonLoader
    } = useOnboarding();

    const user = authStore((state) => state.user)
    const bank_id = user?.bank_id

    useEffect(() => {
        setBankId(bank_id ? bank_id : "")
    }, [user]);
    
    return (
        <div>
            <div>
                <h2 className="title-3">Update Payoneer ID</h2>
                <p className="color-grey-text text-[.8rem]">Find your Payoneer Account ID in your Payoneer dashboard under <br /> Settings → Profile. It’s usually a 6–9 digit number (e.g., 123456789).</p>
            </div>

            <div className="mt-[1rem]">
                <div className="mt-4">
                    {/* <div className="input-box">
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
                    </div> */}

                    {/* <div className="input-box">
                        <label htmlFor="">Account Number <span className="text-red-500">*</span></label>
                        <input name="" id="" className="input-field" />
                    </div>

                    <div className="alert notification">
                        <p className="head">Note</p>
                        <p className="bod">Ensure your name on your CoLearn account is the same as your bank account details.</p>          
                    </div> */}

                    <div className="input-box">
                        <label htmlFor="">Payoneer ID <span className="text-red-500">*</span></label>
                        <input 
                            name="id" 
                            id="" 
                            className="input-field"
                            value={bankId}
                            onChange={(e) => setBankId(e.target.value)}    
                        />
                    </div>

                    <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={updateBank}>
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
        </div>
    )
}

export default UpdateBank