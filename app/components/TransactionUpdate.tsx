import React from "react";
import { useAdmin } from "@/hooks/useAdmin";
import ButtonLoader from "./buttonLoader";

type TransactionnUpdateProps = {
    type: string
}

const TransactionUpdate = ({type}: TransactionnUpdateProps) => {
    const {
        buttonLoader,
        creditWallet,
        debitWallet,
        adminCredit,
        adminDebit,
        setAmount,
    } = useAdmin();
    
    return (
        <div>
            {
                type == 'admin-credit' &&
                <div>
                <h2 className="title-3">Credit Admin Spendable</h2>
                <div className="input-box">
                    <label htmlFor="">Amount <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-1">
                        <span className="input-field font-bold">$</span>
                        <input name="amount" type="number" className="input-field flex-1" onChange = {(e) => setAmount(Number(e.target.value))}/>
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={adminCredit}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Submit</span>
                            </div>                                        
                        )
                    }
                </button>
            </div>
            }

            {
                type == 'admin-debit' &&
                <div>
                    <h2 className="title-3">Withdraw From Spendable</h2>
                    <div className="input-box">
                        <label htmlFor="">Amount<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-1">
                            <span className="input-field font-bold">$</span>
                            <input name="amount" type="number" className="input-field flex-1" onChange = {(e) => setAmount(Number(e.target.value))}/>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={adminDebit}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Submit</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'credit-wallet' &&
                <div>
                    <h2 className="title-3">Credit Wallet</h2>
                    <div className="input-box">
                        <label htmlFor="">Amount<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-1">
                            <span className="input-field font-bold">$</span>
                            <input name="amount" type="number" className="input-field flex-1" onChange = {(e) => setAmount(Number(e.target.value))}/>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={creditWallet}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Submit</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'debit-wallet' &&
                <div>
                    <h2 className="title-3">Debit Wallet</h2>
                    <div className="input-box">
                        <label htmlFor="">Amount<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-1">
                            <span className="input-field font-bold">$</span>
                            <input name="amount" type="number" className="input-field flex-1" onChange = {(e) => setAmount(Number(e.target.value))}/>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={debitWallet}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Submit</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

        </div>
    )
}

export default TransactionUpdate