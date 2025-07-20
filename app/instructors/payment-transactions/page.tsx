'use client';
import React from "react";
import UserLayout from "@/app/components/UserLayout";
import TransactionBody from "@/app/components/TransactionsBody";

const PaymentTransactions = () => {
    return (
        <div>
            <UserLayout>
                <div className="container-3">
                    <TransactionBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default PaymentTransactions;