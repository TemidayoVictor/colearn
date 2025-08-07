'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import { UseCourses } from "@/hooks/useCourses";
import AccountModal from "./Instructors/AccountModal";
import { Cart } from "../Types/types";
import { checkout_calcuate } from "@/services/courses";
import { authStore } from "@/zustand/authStore";
import ButtonLoader from "./buttonLoader";

const CartList = () => {
    const {
        removeFromCart,
        buttonLoader,
        checkoutCalculate,
        checkoutVerified,
        checkoutTotal,
        enrollStudent,
        stripeCheckout,
    } = UseCourses();

    const user = authStore((state) => state.user);
    const userId = user?.id;
    
    const [showModal, setShowModal] = useState<string | null>(null);

    const cart = genralStore((state) => state.cart);
    // const total = cart.reduce((sum, item) => sum + Number(item.course.price || 0), 0);

    const openModal = (key: string) => {
        setShowModal(key);
    }

    const removeFromCartTrigger = (id: string | undefined) => {
        removeFromCart(id);
    }

    const addCouponTrigger = (id: string | undefined) => {
        genralStore.getState().setCartId(id);
        openModal('add-coupon');
    }

    const closeModal = () => setShowModal(null);

    function calculateCartTotal(cartItems: Cart[]) {
        let total = 0;
      
        const updatedCart = cartItems.map((item) => {
          const price = item.course?.price || 0;
          const coupon = item.coupon;
      
          let discountedPrice = price
          
            // Check if there's a valid coupon
            if (coupon && coupon.status === "Valid") {
                const value = Number(coupon.value || 0);

                if (coupon.type === "percent") {
                  discountedPrice = price - (price * value) / 100;
                } else if (coupon.type === "fixed") {
                  discountedPrice = price - value;
                }
        
                // Avoid negative prices
                if (discountedPrice < 0) discountedPrice = 0;
            }

          discountedPrice = Number(discountedPrice);
          total += discountedPrice;
      
          // Optionally, return item with calculated price
          return {
            ...item,
            calculatedPrice: discountedPrice,
          };
        });
      
        return { total, updatedCart };
    }
      
    const { total, updatedCart } = calculateCartTotal(cart);
    const totalFormatted = total.toFixed(2);

    const checkoutTrigger = () => {
        checkout_calcuate(userId, cart);
    }

    return (
        <div className="cart-list">
            <div className="class-list-main">
                {
                    cart.map((item, index) => (
                        <div className="cart-list-detail" key={index}>

                            <div className="cart-list-detail-left">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src={item?.course?.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.course?.thumbnail}` : "/assets/images/course-img-2.png"}
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
                                            width={20}
                                            height={20}
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
                                        <h3 className="title-3">{item?.course?.title}</h3>
                                        <p className="mt-4">By {`${item?.course?.instructor?.user?.first_name} ${item?.course?.instructor?.user?.last_name}`}</p>
                                    </div>
                                    <div>
                                        {
                                            item.coupon && item.coupon.status == 'Valid' ? (    
                                                <div>
                                                    <p className="title-3 cart-list-detail-right-l-r">
                                                        ${(
                                                            item.coupon?.type === 'fixed'
                                                            ? item.course.price - Number(item.coupon.value)
                                                            : item.coupon?.type === 'percent'
                                                            ? item.course.price - (item.course.price * Number(item.coupon.value)) / 100
                                                            : item.course.price
                                                        ).toFixed(2)}
                                                    </p>
                                                    <p className="title-3 cart-list-detail-right-l-r color-grey-text line-through">${item?.course?.price}</p>
                                                </div>
                                            ) : (
                                                <p className="title-3 cart-list-detail-right-l-r">${item?.course?.price}</p>
                                            )
                                        }
                                    </div>
                                </div>
                                
                                <div className="cart-list-detail-right-r mb-2">
                                    <div className="flex gap-2 items-center">
                                        <p >{item?.course?.total_duration} hours</p>
                                        <div className="divider"></div>
                                        <p >{item?.course?.videos_count} videos</p>
                                        <div className="divider"></div>
                                        <p className="color-normal capitalize">{item?.course?.level}</p>
                                    </div>
                                </div>
                                
                                {
                                    item.coupon && item.coupon.status == 'Valid' &&
                                    <div>
                                        <div className="flex items-center gap-1 mt-2">
                                            <Image
                                                aria-hidden
                                                src="/assets/images/tick-circle.png"
                                                alt="Colearn Logo"
                                                width={12}
                                                height={12}
                                                className="object-contain"
                                            />
                                            <p className="success text-[.8rem] font-bold">Coupon  code applied “{item.coupon.code}”</p>
                                        </div>
                                    </div>
                                }

                                <div className="btn-con gap-2">
                                    <button className="btn btn-small remove" onClick={(e) => removeFromCartTrigger(item?.id)}>Remove</button>
                                    <button className="btn btn-small btn-primary-fill" onClick={(e) => addCouponTrigger(item?.id)}>Use Coupon</button>
                                </div>
                            </div>   
                        </div>
                    ))
                }

                {/* <div className="cart-list-detail">

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
                </div> */}
                                
            </div>

            <div className="class-list-sub">
                <div className="class-list-sub-top">
                    <p>Subtotals</p>
                    {
                        checkoutVerified == true ? (
                            <div>
                                <h2 className="cart-total">${Number(checkoutTotal).toFixed(2)}</h2>
                            </div>
                        ) : (
                            <div>
                                <h2 className="cart-total">${totalFormatted}</h2>
                                {/* <h2 className="cart-total old">$90.00</h2> */}
                            </div>
                        )
                    }

                    {
                        checkoutVerified == true ? (
                            <button className="bt-btn two btn btn-primary-fill" onClick={stripeCheckout}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="" />
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
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
                                        </div>                                        
                                    )
                                }
                            </button>
                        ) : (
                            <button className="bt-btn two btn btn-primary-fill" onClick={checkoutCalculate}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="" />
                                    ) : 
                                    
                                    (
                                        <div className="bt-btn two">
                                            <span>Proceed</span>
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
                                        </div>                                        
                                    )
                                }
                            </button>
                        )
                    }
                    
                </div>
            </div>
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default CartList