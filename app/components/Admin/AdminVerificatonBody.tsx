'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuthAdmin } from "@/hooks/useAuth";
import { genralStore } from "@/zustand/generalStore";
import { showErrorToast } from "@/utils/toastTypes";
import { all_unapproved_consultants } from "@/services/admin";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import AdminVerificationTable from "./AdminVerificationTable";
import Loader from "../Loader";


const AdminVerificationBody = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        const init = async () => {
            setLoading(true)
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await all_unapproved_consultants();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setInstructors(response.data.instructors);
                    genralStore.getState().setData(response.data.data);
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
        <div className="container-3">
            <DashboardPerformance user="admin" type="verification"/>
            <div>
                <AdminVerificationTable type="verification"/>
            </div>
        </div>
    )
}

export default AdminVerificationBody