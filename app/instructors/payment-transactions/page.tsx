'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import PaymentInfo from "@/app/components/Instructors/PaymentInfo";

const PaymentTransactions = () => {
    return (
        <div>
            <UserLayout>
                <div>
                    <PaymentInfo />
                </div>
            </UserLayout>
        </div>
    )
}

export default PaymentTransactions;