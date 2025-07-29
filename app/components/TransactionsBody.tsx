'use client';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { authStore } from "@/zustand/authStore";
import { get_user_transactions } from "@/services/user";
import PaymentInfo from "./Instructors/PaymentInfo";
import PaymentHistory from "./Instructors/PaymentHistory";
import Loader from "./Loader";

const TransactionBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)
    const newUpdate = courseStore((state) => state.newUpdate);
    const user = authStore((state) => state.user);
    const userId = user?.id;

    useEffect(() => {
        const init = async () => {
            setLoading(true)
            
            if(!userId) return
            await checkAuth(router); // ✅ valid usage
            
            try {
                const response = await get_user_transactions(userId);
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setTransactions(response.data.transactions);
                    genralStore.getState().setWallet(response.data.wallet);
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

    if (loading) return <Loader />

    return (
        <div>
            <PaymentInfo />
            <PaymentHistory />
        </div>
    )
}

export default TransactionBody