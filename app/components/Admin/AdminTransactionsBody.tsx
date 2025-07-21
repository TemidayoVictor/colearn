'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import { all_transactions } from "@/services/admin";
import { showErrorToast } from "@/utils/toastTypes";
import { genralStore } from "@/zustand/generalStore";
import PaymentHistory from "../Instructors/PaymentHistory";
import PaymentInfo from "../Instructors/PaymentInfo";
import Loader from "../Loader";

const AdminTransactionBody = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await all_transactions();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setTransactions(response.data.transactions);
                    genralStore.getState().setWalletBalance(response.data.adminBalance);
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
            
            setLoading(false);
        };
        init();

    }, []);

    if (loading) return <Loader />
    
    return (
        <div>
            <PaymentInfo type="admin" />
            <PaymentHistory type="admin"/>
        </div>
    )
}

export default AdminTransactionBody