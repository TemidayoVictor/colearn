import React from "react";
import Image from "next/image";
import Link from "next/link";

const StudentCertificatePageBody = () => {
    return (
        <div>
            <div>
                <Link href='/students/courses' className="flex items-center gap-2 cursor-pointer">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/left-arrow.png"
                            alt="Colearn Logo"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-[.9rem] font-semibold">Back</p>
                </Link>
                <div>
                    <h2 className="title-3">Course Certification</h2>
                </div>
            </div>

            <div className="student-certificate-body spacing-inter">
                <div className="left">
                    <div>
                        <p className="font-semibold mb-4">Cybersecurity Beginner Vol.1</p>
                        <div className="cerificate-content">
                            <div className="left-2">
                                <div className="relative">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/avatars-2.png"
                                        alt="Colearn Logo"
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-[50%]"
                                    />
                                    <Image
                                        aria-hidden
                                        src="/assets/images/success-check.png"
                                        alt="Colearn Logo"
                                        width={16}
                                        height={16}
                                        className="object-contain ab-img left-[65%] top-[70%]"
                                    />
                                </div>
                            </div>
                            <div className="right-2">
                                <p className="font-semibold">Completed by Favi Ayomide</p>
                                <p className="color-grey-text text-[.7rem]">September 14, 2022</p>
                                <p className="font-semibold">36 hours (approximately)</p>
                                <p className="text-[.8rem]"><span className="font-semibold mr-1">Instructor:</span>Benson Thomas</p>
                                <p className="text-[.9rem]">FAVI AYOMIDE's account is verified. CoLearn certifies their successful completion of Cybersecurity Beginner Vol.1</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="right">
                    <div className="certificate-box">

                    </div>
                    <div className="res-flex gap-2 mt-3">
                        <button className="bt-btn btn btn-primary-fill ">
                            <span>
                                <Image
                                    aria-hidden
                                    src="/assets/images/download-2.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </span>
                            <span>Download Certficate</span>
                        </button>
                        
                        <button className="bt-btn btn normal">
                            <span>Share Certificate</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCertificatePageBody