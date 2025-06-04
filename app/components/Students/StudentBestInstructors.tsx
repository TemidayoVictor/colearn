import React from "react";
import Image from "next/image";
import Link from "next/link";

const StudentBestInstructor = () => {
    return (
        <div className="mt-[2em]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="title-3">Best Instructor</h2>
                <Link href="/" className="text-[.9rem] underline color-normal">See More</Link>
            </div>
            <div className="best-instructor-cont">
                {
                    [1,2,3,4].map((item, index) => (
                        <div className="best-instructor-box" key={index}>
                            <div className="flex items-center gap-2 left">
                                <div>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/avatars-2.png"
                                        alt="Colearn Image"
                                        width={56}
                                        height={56}
                                        className="object-cover rounded-[50%]"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Benson Thomas</p>
                                    <p className="color-grey-text text-[.8rem]">10 IT & Engineering Courses</p>
                                </div>
                            </div>
                            <div className="right">
                                <Link href='/' className="bt-btn btn btn-primary-fill desktop">
                                    <span>View Courses</span>
                                    <span>
                                        <Image
                                            aria-hidden
                                            src="/assets/images/arrow-right.png"
                                            alt="Colearn Logo"
                                            width={12}
                                            height={12}
                                            className="object-contain"
                                        />
                                    </span>
                                </Link>

                                <Link href='/' className="mobile">
                                    <span className="underline text-[.8rem]">View Courses</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default StudentBestInstructor