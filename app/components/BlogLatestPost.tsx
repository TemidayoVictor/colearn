'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "./EmptyPage";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const BlogLatestPost = () => {
    const blogs = genralStore((state) => state.web?.blogs)
    return (
        <div className="">
            <div className="container">
                <div>
                    {
                        (blogs ?? []).length > 0 ? (
                            <div className="blog-cont mt-[2em]">
                                {
                                    blogs?.map((item, index) => (
                                        <div className="blog flex flex-col justify-between gap-4" key={index}>
                                            <Image
                                                aria-hidden
                                                src={item.thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.thumbnail}` : "/assets/images/course-img-2.png"}
                                                alt="Colearn Logo"
                                                width={400}
                                                height={264}
                                                className="object-cover rounded-[.5em] h-[12em]"
                                            />

                                            <div className="flex gap-3 text-[.7rem]">
                                                {/* <p>July 16, 2024</p> <span className="font-bold">&middot;</span> <p>3 mins read</p> */}
                                                <p>{ dayjs(item?.created_at, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY")}</p>
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <h2 className="title-2"> {item.title} </h2>
                                                <p className="text-justify text-[.9rem]">{item.excerpt}</p>
                                                <div className="flex items-center justify-between">
                                                    {/* <div className="flex gap-2">
                                                        <span className="blog-tab">IT</span>
                                                        <span className="blog-tab">Technology</span>
                                                    </div> */}
                                                    <Link href={`/view-blog/${item.id}`} className="flex gap-2 btn normal two w-full justify-center">
                                                        <p>Read More</p>
                                                        <Image
                                                            aria-hidden
                                                            src="/assets/images/arrow-right-2.png"
                                                            alt="Colearn Logo"
                                                            width={14}
                                                            height={13}
                                                            className="object-contain"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div>
                                <EmptyPage image="/assets/images/empty-image.png"  header="Blogs Coming Soon" content="We're still curating our blogs. Kindly check back soon." imageWidth={400} imageHeight={240}/>
                            </div>
                        )
                    }
                </div>

                {/* <div className="section flex items-end justify-end">
                    <div className="pagination text-[.8rem]">
                        <div className="prev btn normal two flex gap-2">
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-short-left.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain rounded-[.5em]"
                            />

                            <p className="text-[.8rem]">Previous</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="pag-el active">1</span>
                            <span className="pag-el">2</span>
                            <span className="pag-el">3</span>
                        </div>
                        <div className="prev btn normal two flex gap-2">
                            <p className="text-[.8rem]">Next</p>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-short-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain rounded-[.5em]"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BlogLatestPost