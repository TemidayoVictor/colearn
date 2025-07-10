import React from "react";
import { UseCourses } from "@/hooks/useCourses";
import ButtonLoader from "../buttonLoader";

const ManageCoupon = () => {
    const {
        buttonLoader,
        couponData,
        couponError,
        handleCouponChange,
        createCoupon,
    } = UseCourses();
    return (
        <div>
            <div>
                <h2 className="title-3">Add a Coupon</h2>
                <p className="color-grey-text text-[.8rem]">Offer your students exclusive discounts on your courses.</p>
            </div>

            <div className="mt-[1rem]">
                <div className="mt-4">

                    <div className="input-box">
                        <label htmlFor="">Coupon Code</label>
                        <small>You can customize your coupon code. If left blank, a 6-digit code will be generated automatically.</small>
                        <input name="code" value={couponData.code} type="text" id="" className="input-field" onChange={handleCouponChange}/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Coupon Type<span className="text-red-500">*</span></label>
                        <select name="type" id="" value={couponData.type} className={`input-field ${couponError.type ? 'error' : ''}`} onChange={handleCouponChange}>
                            <option value="">Select one</option>
                            <option value="percent">Percentage</option>
                            <option value="fixed">Fixed</option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Value <span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-1">
                            <input name="value" type="number" value={couponData.value} id="" className={`input-field flex-1 ${couponError.value ? 'error' : ''}`} onChange={handleCouponChange}/>
                            <span className="input-field font-bold">{couponData.type == 'percent' ? '%' : '$'}</span>
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Maximum number of times this coupon can be used</label>
                        <input name="max" id="" type="number" value={couponData.max} className="input-field" onChange={handleCouponChange}/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Expiry Date<span className="text-red-500">*</span></label>
                        <input name="expiry" id="" type="date" value={couponData.expiry} className={`input-field ${couponError.expiry ? 'error' : ''}`} onChange={handleCouponChange}/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="">How many coupon codes would you like to create?</label>
                        <input name="amount" id="" type="number" value={couponData.amount} className="input-field" onChange={handleCouponChange}/>
                    </div>

                    <button className="mt-4 flex items-center justify-center gap-2 btn btn-primary-fill w-full" onClick={createCoupon}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Creating . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Create Coupon</span>
                                </div>                                        
                            )
                        }                                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManageCoupon