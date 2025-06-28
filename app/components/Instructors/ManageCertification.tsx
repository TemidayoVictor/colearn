'use client';
import React, {useEffect} from "react";
import { instructorStore } from "@/zustand/instructorStore";
import { useConsultant } from "@/hooks/useConsultant";
import Image from "next/image";
import ButtonLoader from "../buttonLoader";

type ManageCertProps = {
    type: string
}

const ManageCertification = ({type}:ManageCertProps) => {
    const certification = instructorStore((state) => state.certification);
    const {
        buttonLoader,
        editCertData,
        setEditCertData,
        editSchErrors,
        handleCertEdit,
        handleFileEdit,
    } = useConsultant();

    if(type == 'edit') {
        useEffect(() => {
            const init = async () => {
                setEditCertData({
                    name: certification?.name || "",
                    organization: certification?.organization || "",
                    iss_date: certification?.iss_date || "",
                    exp_date: certification?.exp_date || "",
                    credential_url:certification?.credential_url || "",
                    image: null,
                    certificate_file_path: certification?.certificate_file_path || "",
                    id: certification?.id || "",  
                });
            };
    
            init();
    
        }, []);        
    }

    return (
        <div>
            {
                type == "add" &&
                
            }

            {
                type == 'edit' &&
            }
        </div>
    )
}

export default ManageCertification