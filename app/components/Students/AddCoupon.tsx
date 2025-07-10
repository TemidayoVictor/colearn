import React from "react";
import Image from "next/image";
import { UseCourses } from "@/hooks/useCourses";
import { genralStore } from "@/zustand/generalStore";

const AddCoupon = () => {
    const cartId = genralStore((state) => (state.cartId))
    return (
        <div>            
            <h2 className="title-3">Add Coupon</h2>
            <div className="coupon pt-2 mt-2">
                    <p className="text-[.8rem]">Promo / Coupon Code </p>
                    <div className="flex items-center gap-1 mt-2">
                        <Image
                            aria-hidden
                            src="/assets/images/tick-circle.png"
                            alt="Colearn Logo"
                            width={12}
                            height={12}
                            className="object-contain"
                        />
                        <p className="success text-[.8rem] font-bold">Coupon  code applied “A8sh83yf8y8h”</p>
                    </div>
                    <div className="flex items-center justify-between my-[1em] py-[.5em] px-[1.5em] footer-input-cover coupon-cover">
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="Coupon code" className="footer-input coupon-input w-[100%] text-[.8rem]" />
                        </div>
                        <div>
                            <button className="flex gap-2 footer-btn coupon-btn"> Apply </button>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default AddCoupon