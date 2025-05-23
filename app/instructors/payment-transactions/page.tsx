'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import PaymentInfo from "@/app/components/Instructors/PaymentInfo";
import PaymentHistory from "@/app/components/Instructors/PaymentHistory";

const PaymentTransactions = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <PaymentInfo />
                    <PaymentHistory />
                </div>
            </UserLayout>
        </div>
    )
}

export default PaymentTransactions;