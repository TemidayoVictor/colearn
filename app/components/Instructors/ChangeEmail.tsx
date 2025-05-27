import React from "react";
import Image from "next/image";

const ChangeEmail = () => {
    return (
        <div>
            <div>
                <h2 className="title-3"> Change Email </h2>
                <p className="color-grey-text text-[.8rem]">Enter your current email and the new email you want to change your email</p>

                <div>
                    <div className="input-box">
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
                            <input type="email" className="input-field-2"/>
                        </div>
                    </div>

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
                            <input type="email" className="input-field-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeEmail