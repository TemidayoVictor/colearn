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
        withdrawFunds,
        approveWithdrawal,
        rejectWithdrawal,
        approveConsultant,
        reason, 
        setReason,
        declineConsultant,
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

            {
                type == 'withdraw-funds' &&
                <div>
                    <h2 className="title-3">How much do you want to withdraw?</h2>
                    <div className="input-box">
                        <label htmlFor="">Amount<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-1">
                            <span className="input-field font-bold">$</span>
                            <input name="amount" type="number" className="input-field flex-1" onChange = {(e) => setAmount(Number(e.target.value))}/>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={withdrawFunds}>
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
                type == 'approve-withdrawal' &&
                <div>
                    <h2 className="title-3">Confirm Approval</h2>
                    <p className="text-gray-600 my-2 text-center">
                        Are you sure you want to approve this withdrawal request?
                        The amount will be marked as completed.
                    </p>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={approveWithdrawal}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Approve</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'reject-withdrawal' &&
                <div>
                    <h2 className="title-3">Confirm Rejection</h2>
                    <p className="text-gray-600 my-2 text-center">
                        Are you sure you want to reject this withdrawal request? <br />
                        This action cannot be undone.
                    </p>
                    <button className="flex items-center justify-center gap-2 btn error two w-full" onClick={rejectWithdrawal}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Decline</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'approve-consultant' &&
                <div>
                    <h2 className="title-3">Confirm Application Approval</h2>
                    <p className="text-gray-600 my-2 text-center">
                        Are you sure you want to approve the request of this Instructor to become a Consultant?
                    </p>
                    <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={approveConsultant}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Approve</span>
                                </div>                                        
                            )
                        }
                    </button>
                </div>
            }

            {
                type == 'decline-consultant' &&
                <div>
                    <h2 className="title-3">Confirm Application Decline</h2>
                    <p className="text-gray-600 my-2">
                        Kindly add a reason why you want to decline this application<br />
                    </p>
                    <textarea name="cancel_note" id="" className="textarea mt-2" value={reason} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReason(e.target.value)}></textarea>
                    <button className="flex items-center justify-center gap-2 btn error two w-full" onClick={declineConsultant}>
                        {
                            buttonLoader ? (
                                <ButtonLoader content="Please wait . . ." />
                            ) : 
                            
                            (
                                <div className="bt-btn two">
                                    <span>Decline</span>
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