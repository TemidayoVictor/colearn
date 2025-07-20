'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import PaymentHistory from "../Instructors/PaymentHistory";
import PaymentInfo from "../Instructors/PaymentInfo";
import Loader from "../Loader";

const AdminTransactionBody = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router); // ✅ valid usage
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