import React from "react";
import EmptyPage from "../EmptyPage";
import CartList from "../CartList";

const StudentCartBody = () => {
    return (
        <div className="container">
            <h2 className="title">Shopping Cart</h2>
            <p className="mt-2">0 Courses in cart</p>
            
            {/* <div>
                <EmptyPage image="/assets/images/mine cart.png" linkTitle="Explore more courses" content="Your cart is empty. Keep shopping to find a course!" link="/"/>
            </div> */}

            <div>
                <CartList />
            </div>
        </div>
    )
}

export default StudentCartBody