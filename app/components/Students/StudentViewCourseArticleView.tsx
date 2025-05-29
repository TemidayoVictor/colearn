import React from "react";
import Image from "next/image";
import Link from "next/link";

type StudentViewCourseArticleViewProps = {
    back: (tab: string) => void
}

const StudentViewCourseArticleView = ({back}:StudentViewCourseArticleViewProps ) => {
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
                <h2 className="title-3 mt-2">Article Name</h2>
                
                <section className="">
                    <p className="title-3">What to Expect:</p>
                    <p >This article delves into [briefly mention the topic] and provides valuable information on [key takeaway]. Whether you're a [target audience] or simply looking to expand your knowledge, this article is a must-read.</p>
                </section>

                <section>
                    <p>Download our practice questions to test your knowledge and identify areas for improvement. Our practice questions cover all the key topics you need to know to succeed.</p>
                </section>

                <section>
                    <p className="title-3">Access the Full Article</p>
                    <p>
                        We're excited to share this insightful article with you. To read the complete piece and dive deeper into the topic, please click on the link below:
                    </p>
                    <p>
                        Alternatively, you can download a PDF copy of the article here:
                    </p>
                    <button className="underline color-normal font-bold mt-4 text-[.9rem]"> Click Here</button>
                </section>

                <section>
                    <p className="title-3">Happy Reading!</p>
                </section>
            </div>
        </div>
    )
}

export default StudentViewCourseArticleView