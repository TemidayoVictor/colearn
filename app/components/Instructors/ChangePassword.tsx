import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSettings } from "@/hooks/useSettings";
import ButtonLoader from "../buttonLoader";

type ChangePasswordProps = {
    type?: string
}

const ChangePassword = ({type}: ChangePasswordProps) => {
    const {
        buttonLoader,
        changePassword,
        password,
        setPassword,
        setConfirmPassword,
        setCurrentPassword,
    } = useSettings();

    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState <boolean | null> (false);

    const togglePassword = () => setShowPassword(prev => !prev);

    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 8;

    return (
        <div>
            {
                !showSuccess &&
                <div>
                    <h2 className="title-3"> Change Password</h2>
                    <p className="color-grey-text text-[.8rem]">Enter your current password and the new password you want too.</p>

                    <div>

                        <div className="input-box">
                            <label htmlFor="" className="font-semibold text-[.9rem]">Current Password</label>
                            <div className="input-field">
                                <Image
                                    aria-hidden
                                    src="/assets/images/lock-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover ab-img"
                                />
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    className="input-field-2"
                                    placeholder="Enter new password"
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        

                        <div className="input-box relative">
                            <label className="font-bold text-[.9em]">New Password</label>
                            <div className="input-field">
                                <Image
                                    aria-hidden
                                    src="/assets/images/lock-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover ab-img"
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input-field-2"
                                    placeholder="Enter new password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-base w-4 h-4 text-[#96999c] absolute right-[5%] top-[60%]" onClick={togglePassword} />
                        </div>
                        <div className="pas-requirements">
                            <span className={hasSpecialChar ? 'success' : ''}>One Special Character</span>
                            <span className={hasNumber ? 'success' : ''}>One Number</span>
                            <span className={hasUppercase ? 'success' : ''}>One Uppercase</span>
                            <span className={hasMinLength ? 'success' : ''}>8 Character Min</span>
                            <span className={hasLowercase ? 'success' : ''}>One Lowercase Character</span>
                        </div>

                        <div className="input-box">
                            <label htmlFor="" className="font-semibold text-[.9rem]">Confirm Password</label>
                            <div className="input-field">
                                <Image
                                    aria-hidden
                                    src="/assets/images/lock-2.png"
                                    alt="Colearn Image"
                                    width={20}
                                    height={20}
                                    className="object-cover ab-img"
                                />
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    className="input-field-2"
                                    placeholder="Enter new password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="bt-btn btn btn-primary-fill" onClick={changePassword}>
                                {
                                    buttonLoader ? (
                                        <ButtonLoader content="Please wait. . ." />
                                    ) : (
                                        <span>Change Password</span>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                showSuccess &&
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/padlock.png"
                            alt="Colearn Logo"
                            width={158}
                            height={158}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="title-3">Password updated</h2>
                        <p className="color-grey-text text-[.8rem]">Your have successfully updated your password</p>
                    </div>
                    <button className="btn btn-normal-fill w-full">
                        <span>Dismiss</span>
                    </button>
                </div>
            }
        </div>
    )
}

export default ChangePassword