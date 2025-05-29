import React from "react";
import Image from "next/image";
import Link from "next/link";

const StudentViewCourseArticleView = () => {
    return (
        <div>
            <div>
                <h2 className="title-3 mt-2">Article Name</h2>
                <div className="mt-3">
                    <p className="text-[.9rem]">Download our practice questions to test your knowledge and identify areas for improvement. Our practice questions cover all the key topics you need to know to succeed.</p>
                </div>

                <div className="mt-3">
                    <p className="font-semibold">Instructions:</p>
                    <ol>
                        <li className="text-[.9rem]">Download the practice questions and answer them to the best of your ability.</li>
                        <li className="text-[.9rem]">Review your answers using the answer key provided.</li>
                        <li className="text-[.9rem]">Identify areas where you need improvement and focus your studying on those topics.</li>
                    </ol>
                </div>

                <div className="mt-3">
                    <p className="font-semibold">Practice Questions &  Answers</p>
                    <div className="flex items-center gap-2">
                        <Link href='/students/view-course' className="mt-3 bt-btn btn btn-primary-fill ">
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
                            <span>Download Practice Question</span>
                        </Link>
                        
                        <Link href='/' className="mt-3 bt-btn btn normal">
                            <span>
                                <Image
                                    aria-hidden
                                    src="/assets/images/download-1.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </span>
                            <span>Download Practice Answers</span>
                        </Link>
                        
                    </div>
                </div>
                <div className="mt-3">
                    <p className="title-3">Good Luck!</p>
                </div>
            </div>
        </div>
    )
}

export default StudentViewCourseArticleView