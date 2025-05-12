import React from "react";
import { Metadata } from "next";
import EmptyPage from "../components/EmptyPage";
import CartList from "../components/CartList";

export const metadata: Metadata = {
    title: "Cart",
}

const Cart = () => {
    return (
        <div className="cover container">
            <div className="">
                <h2 className="title mob-top">Shopping Cart</h2>
                <p className="mt-2">0 Courses in cart</p>

                {/* <div>
                    <EmptyPage image="/assets/images/mine cart.png" linkTitle="Explore more courses" content="Your cart is empty. Keep shopping to find a course!" link="/"/>
                </div> */}

                <div>
                    <CartList />
                </div>
            </div>
        </div>
    )
}

export default Cart