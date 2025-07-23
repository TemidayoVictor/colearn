'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import { all_transactions } from "@/services/admin";
import { showErrorToast } from "@/utils/toastTypes";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import PaymentHistory from "../Instructors/PaymentHistory";
import PaymentInfo from "../Instructors/PaymentInfo";
import Loader from "../Loader";

const AdminTransactionBody = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)
    const newUpdate = courseStore((state) => state.newUpdate);


    useEffect(() => {
        const init = async () => {
            setLoading(true)
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await all_transactions();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setTransactions(response.data.transactions);
                    genralStore.getState().setWallet(response.data.adminWallet);
                    genralStore.getState().setGeneralSettings(response.data.settings);
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

    }, [newUpdate]);

    if (loading) return <Loader />
    
    return (
        <div>
            <PaymentInfo type="admin" />
            <PaymentHistory type="admin"/>
        </div>
    )
}

export default AdminTransactionBody