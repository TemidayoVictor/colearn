import React from "react";
import ButtonLoader from "../buttonLoader";
import { useAdmin } from "@/hooks/useAdmin";

const AddAdmin = () => {
    const {
        buttonLoader,
        formData,
        handleInputChange,
        addAdminUser,
    } = useAdmin();
    return (
        <div>
            <div>
                <div>
                    <h2 className="title-3">Add Team Member</h2>
                </div>

                <div className="mt-[1rem]">
                    <div className="mt-4">
                        
                        <div className="input-box">
                            <label htmlFor="">First Name<span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="input-field"
                                name='first_name' 
                                value={formData.first_name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Last Name<span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="input-field"
                                name='last_name' 
                                value={formData.last_name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Email<span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                className="input-field"
                                name='email' 
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Password<span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="input-field"
                                name='password' 
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Role<span className="text-red-500">*</span></label>
                            <select name="role" id="" className="input-field" onChange={handleInputChange} value={formData.role}>
                                <option value="">Select Role</option>
                                <option value="admin">Administrator</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>

                        <button className="flex items-center justify-center gap-2 btn btn-primary-fill tw w-full" onClick={addAdminUser}>
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
        </div>
    )
}

export default AddAdmin