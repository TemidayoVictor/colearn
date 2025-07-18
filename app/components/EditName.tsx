'use client';
import React, {useEffect} from "react";
import { authStore } from "@/zustand/authStore";
import { useOnboarding } from "@/hooks/useOnboarding";
import ButtonLoader from "./buttonLoader";

const EditName = () => {
    const {
        buttonLoader,
        editName,
        editNameData, 
        setEditNameData,
        editNameError,
        handleEditName,
    } = useOnboarding();

    const user = authStore((state) => state.user)

    useEffect(() => {
        setEditNameData({
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
        });

    }, [user]);

    return (
        
        <div>
            <div>
                <h2 className="title-3">Edit Name</h2>
            </div>
            
            <div className="input-box">
                <label htmlFor="">First Name<span className="text-red-500">*</span></label>
                <div className="flex items-center gap-2">
                    <input 
                        name="first_name" 
                        className={`input-field ${editNameError.first_name ? 'error' : ''} w-full`} 
                        placeholder="First Name" 
                        value={editNameData.first_name} 
                        onChange={handleEditName}
                    />
                </div>
            </div>

            <div className="input-box mt-4">
                <label htmlFor="">Last Name<span className="text-red-500">*</span></label>
                <div className="flex items-center gap-2">
                    <input 
                        name="last_name" 
                        className={`input-field ${editNameError.last_name ? 'error' : ''} w-full`} 
                        placeholder="Last Name" 
                        value={editNameData.last_name} 
                        onChange={handleEditName}
                    />
                </div>
            </div>

            <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={editName}>
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
    )
}

export default EditName