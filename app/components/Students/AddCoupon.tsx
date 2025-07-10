import React from "react";
import Image from "next/image";
import { UseCourses } from "@/hooks/useCourses";
import { genralStore } from "@/zustand/generalStore";
import ButtonLoader from "../buttonLoader";

const AddCoupon = () => {
    const {
        addCoupon, 
        couponCode, 
        setCouponCode,
        buttonLoader
    } = UseCourses();
    const cartId = genralStore((state) => (state.cartId))
    return (
        <div>            
            <h2 className="title-3">Add Coupon</h2>
            <div className="coupon pt-2 mt-2">
                    <div className="flex items-center justify-between my-[1em] py-[.5em] px-[1.5em] footer-input-cover coupon-cover">
                        <div className="flex items-center gap-2 w-100">
                            <input type="text" placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} className="footer-input coupon-input w-[100%] text-[.8rem]" />
                        </div>
                        <div>
                            <button className="flex gap-2 footer-btn coupon-btn" onClick={() => addCoupon(cartId)}>
                                 {
                                    buttonLoader ? (
                                        '...'
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
                                            <span>Apply</span>
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

export default AddCoupon