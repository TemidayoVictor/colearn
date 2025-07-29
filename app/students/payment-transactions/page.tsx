import React from "react";
import UserLayout from "@/app/components/UserLayout";
import TransactionBody from "@/app/components/TransactionsBody";

const StudentPaymentTransactions = () => {
    return (
        <div>
            <UserLayout userType="student">
                <div className="container-3">
                    <TransactionBody />
                </div>
            </UserLayout>
        </div>
    )
}

export default StudentPaymentTransactions;