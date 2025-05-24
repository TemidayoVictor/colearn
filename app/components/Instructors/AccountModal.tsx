import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type AccountModalProps = {
    modalType: string;
    modalClose: () => void;
}

const AccountModal = ({modalType, modalClose}: AccountModalProps) => {
    return (
        <div className="modal-container">
            <div className="modal">
                
                {
                    modalType == 'personal' &&
                    <div>
                        <div>
                            <h2 className="title">Edit Personal Information</h2>
                            <p className="color-grey-text text-[.8rem]">Provide course information.</p>
                        </div>

                        <div>
                            <p className="font-nomral">Update Profile Picture </p>
                            <div>
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/avatars.png"
                                        alt="Colearn Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain rounded-[50%]"
                                    />
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
                <div className="modal-close">
                    <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={modalClose}/>
                </div>
            
            </div>
            
        </div>
    )
}

export default AccountModal;