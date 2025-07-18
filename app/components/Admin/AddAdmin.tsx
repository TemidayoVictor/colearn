import React from "react";

const AddAdmin = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className="title-3">Add Team Member</h2>
                </div>

                <div className="mt-[1rem]">
                    <div className="mt-4">
                        
                        <div className="input-box">
                            <label htmlFor="">Name <span className="text-red-500">*</span></label>
                            <input type="text" className="input-field" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Email<span className="text-red-500">*</span></label>
                            <input type="email" className="input-field" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Role<span className="text-red-500">*</span></label>
                            <select name="" id="" className="input-field">
                                <option value="">Select Role</option>
                                <option value="">Administrator</option>
                                <option value="">Staff</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin