import React from "react";
import Image from "next/image";
import Link from "next/link";

type StudentViewCourseTestViewProps = {
    back: (tab: string) => void
}

const StudentViewCourseTestView = ({back}: StudentViewCourseTestViewProps) => {
    return (
        <div className="resource">
            <div>
                <Link href='#' className="flex items-center gap-2 cursor-pointer" onClick={() => back('list')}>
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
                    <span className="font-semibold">Back</span>
                </Link>
                <h2 className="title-3 mt-2">Quiz / Practice Question Title</h2>
                <section>
                    <p className="text-[.9rem]">Download our practice questions to test your knowledge and identify areas for improvement. Our practice questions cover all the key topics you need to know to succeed.</p>
                </section>

                <section className="mt-[1.5em]">
                    <p className="title-3">Instructions:</p>
                    <ol>
                        <li>Download the practice questions and answer them to the best of your ability.</li>
                        <li>Review your answers using the answer key provided.</li>
                        <li>Identify areas where you need improvement and focus your studying on those topics.</li>
                    </ol>
                </section>

                <section>
                    <p className="title-3">Practice Questions &  Answers</p>
                    <div className="res-flex gap-2">
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
                </section>

                <section>
                    <p className="title-3">Good Luck!</p>
                </section>
            </div>
        </div>
    )
}

export default StudentViewCourseTestView