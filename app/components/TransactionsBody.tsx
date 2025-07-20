import React from "react";
import PaymentInfo from "./Instructors/PaymentInfo";
import PaymentHistory from "./Instructors/PaymentHistory";

const TransactionBody = () => {
    return (
        <div>
            <PaymentInfo />
            <PaymentHistory />
        </div>
    )
}

export default TransactionBody