'use client';
import React, {useState} from "react";
import Image from "next/image";
import ChangeEmailVerify from "./ChangeEmailVerify";
import { useSettings } from "@/hooks/useSettings";
import ButtonLoader from "../buttonLoader";

const ChangeEmail = () => {
    const {
        setEmail,
        changeEmail,
        buttonLoader,
        showVerify, 
        setEmailGeneral,
    } = useSettings();

    return (
        <div>
            {
                !showVerify &&
                <div>
                    <h2 className="title-3"> Change Email </h2>
                    <p className="color-grey-text text-[.8rem]">Enter the new email you want to change your email</p>

                    <div>
                        {/* <div className="input-box">
                            <label htmlFor="" className="font-semibold text-[.9rem]">Current Email</label>
                            <div className="input-field">
                                <Image
                                    aria-hidden
                                    src="/assets/images/mail-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover ab-img"
                                />
                                <input type="email" className="input-field-2" placeholder="Enter your current email"/>
                            </div>
                        </div> */}

                        <div className="input-box">
                            <label htmlFor="" className="font-semibold text-[.9rem]">New Email</label>
                            <div className="input-field">
                                <Image
                                    aria-hidden
                                    src="/assets/images/mail-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover ab-img"
                                />
                                <input 
                                    type="email" 
                                    className="input-field-2" 
                                    placeholder="Enter your new email"
                                    onChange={setEmailGeneral}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="bt-btn btn btn-primary-fill" onClick={changeEmail}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="Please wait. . ." />
                                    ) : (
                                        <span>Change Email</span>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                showVerify &&
                <ChangeEmailVerify />
            }
        </div>
    )
}

export default ChangeEmail