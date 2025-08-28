'use client';
import React, {useState, useEffect} from "react";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import AdminVerificationTable from "./AdminVerificationTable";
import { all_users_admin } from "@/services/admin";
import { admin_dashboard } from "@/services/admin";
import { useAuthAdmin } from "@/hooks/useAuth";
import { genralStore } from "@/zustand/generalStore";
import { useRouter } from "next/navigation";
import { showErrorToast } from "@/utils/toastTypes";
import Loader from "../Loader";

const AdminManagementBody = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const init = async () => {
            setLoading(true)
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await all_users_admin();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setUsers(response.data.users);
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

    // fetch data for users management dashboard

    useEffect(() => {
        const init = async () => {
            await useAuthAdmin(router);
            try {
                const response = await admin_dashboard();
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setData(response.data);
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
            <div className="container-3">
                <DashboardPerformance user="admin" type="management"/>
                <div>
                    <AdminVerificationTable type="management"/>
                </div>
            </div>
        </div>
    )
}

export default AdminManagementBody