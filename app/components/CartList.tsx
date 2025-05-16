import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartList = () => {
    return (
        <div className="cart-list">
            <div className="class-list-main">
                {
                    [1,2,3].map((items, index) => (
                        <div className="cart-list-detail" key={index}>

                            <div className="cart-list-detail-left">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/course.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover rounded-[.5em]"
                                    />
                                    <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem] rounded-br-[.3rem]">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/star.png"
                                            alt="Colearn Logo"
                                            width={30}
                                            height={30}
                                            className="object-contain"
                                        />
                                        <p className="text-[1.1rem] font-bold">4.3</p>
                                        <p className="text-[.9rem]">(382)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-list-detail-right">
                                <div className="cart-list-detail-right-l">
                                    <div className="cart-list-detail-right-l-l">
                                        <h3 className="title-3">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                                        <p className="mt-4">By Favi Design</p>
                                    </div>
                                    <p className="title-3 cart-list-detail-right-l-r">$30.00</p>
                                </div>
                                
                                <div className="cart-list-detail-right-r mb-2">
                                    <div className="flex gap-2 items-center">
                                        <p >20 hours</p>
                                        <div className="divider"></div>
                                        <p >4 videos</p>
                                        <div className="divider"></div>
                                        <p className="color-normal">Beginner</p>
                                    </div>
                                    <div className="btn-con">
                                        <Link href="/" className="btn remove">Remove</Link>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    ))
                }

                <div className="cart-list-detail">

                    <div className="cart-list-detail-left">
                        <div className="relative">
                            <Image
                                aria-hidden
                                src="/assets/images/course.png"
                                alt="Colearn Logo"
                                width={400}
                                height={264}
                                className="object-cover rounded-[.5em]"
                            />
                            <div className="absolute right-0 bottom-0 flex gap-2 items-center bg-white p-2 rounded-tl-[.3rem] rounded-br-[.3rem]">
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                                <p className="text-[1.1rem] font-bold">4.3</p>
                                <p className="text-[.9rem]">(382)</p>
                            </div>
                        </div>
                    </div>

                    <div className="cart-list-detail-right">
                        <div className="cart-list-detail-right-l">
                            <div className="cart-list-detail-right-l-l">
                                <h3 className="title-3">The Complete  Guide to cybersecurity:  From Beginner to expert</h3>
                                <p className="mt-4">By Favi Design</p>
                            </div>
                            <p className="title-3 cart-list-detail-right-l-r">$30.00</p>
                        </div>
                        
                        <div className="cart-list-detail-right-r two mb-2 mt-[1rem]">
                            <div className="flex gap-2 items-center justify-between">
                                <div className="flex gap-2 items-start">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/calendar-2.png"
                                        alt="Colearn Logo"
                                        width={22}
                                        height={22}
                                        className="object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <p className="color-grey-text text-[.9rem]">Booking Date</p>
                                        <p className="font-bold text-[.8rem]">14th July, 2024</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/clock.png"
                                        alt="Colearn Logo"
                                        width={22}
                                        height={22}
                                        className="object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <p className="color-grey-text text-[.9rem]">Booking Time</p>
                                        <p className="font-bold text-[.8rem]">09:00 - 09:30 AM</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="btn-con">
                                <Link href="/" className="btn remove">Remove</Link>
                            </div>
                        </div>
                    </div>   
                </div>
                                
            </div>

            <div className="class-list-sub">
                <div className="class-list-sub-top">
                    <p>Subtotals</p>
                    
                    <div>
                        <h2 className="cart-total">$65.00</h2>
                        <h2 className="cart-total old">$90.00</h2>
                    </div>
                    
                    <Link href='/' className="bt-btn two btn btn-primary-fill">
                        <span>Checkout Now</span>
                        <span>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                        </span>
                    </Link>
                </div>

                <div className="coupon">
                    <p className="text-[.8rem]">Promo / Coupon Code</p>
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
                            <Link href='/' className="flex gap-2 footer-btn coupon-btn">
                                Apply
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartList