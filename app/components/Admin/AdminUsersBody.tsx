'use client';
import React, {useState,useEffect} from "react";
import AdminVerificationTable from "./AdminVerificationTable";
import { genralStore } from "@/zustand/generalStore";
import { useRouter } from "next/navigation"
import { useAuthAdmin } from "@/hooks/useAuth";
import { showErrorToast } from "@/utils/toastTypes";
import { admin_users } from "@/services/admin";
import { courseStore } from "@/zustand/courseStore";
import Loader from "../Loader";

const AdminUsersBody = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<Boolean>(true);

    const newUpdate = courseStore((state) => state.newUpdate);

    useEffect(() => {
        setLoading(true);
        const init = async () => {
            await useAuthAdmin(router); // ✅ valid usage
            try {
                const response = await admin_users();
                if (response.success) {
                    genralStore.getState().setUsers(response.data.users)
                    // save state globally
                } 
    
                else {
                    showErrorToast(response.message)
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

    if(loading) return <Loader />

    return (
        <div className="container-3">
            <div>
                <h2 className="title-2">Administrative Users</h2>
                <div>
                    < AdminVerificationTable type="admin-users"/>
                </div>
            </div>
        </div>
    )
}

export default AdminUsersBody