'use client';
import React, {useState, useEffect} from "react";
import EmptyPage from "../EmptyPage";
import CartList from "../CartList";
import { genralStore } from "@/zustand/generalStore";
import Loader from "../Loader";
import { showErrorToast } from "@/utils/toastTypes";
import { get_cart } from "@/services/courses";
import { authStore } from "@/zustand/authStore";
import { courseStore } from "@/zustand/courseStore";
import { checkAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Cart } from "@/app/Types/types";

const StudentCartBody = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<Boolean>(true);
    const [cart, setCart] = useState<Cart[]>();
    const user = authStore((state) => state.user);
    const userId = user?.id;

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await checkAuth(router); // ✅ valid usage
            if(!userId) return
            try {
                const response = await get_cart(userId);
                if (response.success) {
                    // save cart on page
                    setCart(response.data.cart)
                    // save state globally
                    genralStore.getState().setCart(response.data.cart);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            courseStore.getState().setNewUpdate('reset');
            setLoading(false);
        };
        init();

    }, [newUpdate, userId]);

    if(loading) return <Loader />

    return (
        <div className="container">
            <h2 className="title">Shopping Cart</h2>
            <p className="mt-2">{cart?.length} Courses in cart</p>
            
            {
                (cart ?? []).length > 0 ? (
                    <div>
                        <CartList />
                    </div>
                ) : (
                    <div>
                        <EmptyPage image="/assets/images/mine cart.png" linkTitle="Explore more courses" content="Your cart is empty. Keep shopping to find a course!" link="/"/>
                    </div>
                )
            }
        </div>
    )
}

export default StudentCartBody