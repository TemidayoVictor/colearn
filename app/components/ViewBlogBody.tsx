'use client';
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { genralStore } from "@/zustand/generalStore";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const ViewBlogBody = () => {
    const params = useParams();
    const blogId = params?.blog as any;

    const blog = genralStore.getState().getBlogById(blogId);

    return (
        <div className="">
            <div className="container">
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-3">
                        <Image
                            aria-hidden
                            src="/assets/images/arrow-left-blue.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain rounded-[.5em]"
                        />
                        <p className="color-normal">Back</p>
                    </div>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/arrow-right-3.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain rounded-[.5em]"
                        />
                    </div>
                    <p className="font-bold">Blog title goes here</p>
                </div>

                <div className="mt-[2em]">
                    <Image
                        aria-hidden
                        src={blog?.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${blog?.thumbnail}` : "/assets/images/course-img-2.png"}
                        alt="Colearn Logo"
                        width={1280}
                        height={270}
                        className="object-contain rounded-[.5em] blog-img"
                    />
                    <h2 className="mt-[1em] title"> {blog?.title} </h2>
                    <div className="mt-4 flex gap-3 items-center">
                        {/* <span className="blog-tab">Technology</span> */}
                        <div className="flex gap-3 text-[.8rem]">
                            {/* <p>July 16, 2024</p> <span className="font-bold">&middot;</span> <p>3 mins read</p> */}
                            <p>{ dayjs(blog?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")}</p>
                        </div>
                    </div>

                    <div className="blog-body mt-[1em]">
                        <p> {blog?.body} </p>
                    </div>
                </div>
            </div>

            <div className="mb-[1em] border-b border-gray-500"></div>

        </div>
    )
}

export default ViewBlogBody