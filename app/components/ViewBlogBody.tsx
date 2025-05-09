import React from "react";
import Image from "next/image";

const ViewBlogBody = () => {
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
                        src="/assets/images/blog-3.png"
                        alt="Colearn Logo"
                        width={1280}
                        height={270}
                        className="object-contain rounded-[.5em]"
                    />
                    <h2 className="mt-[1em] title">Blog title goes here</h2>
                    <div className="mt-4 flex gap-3 items-center">
                        <span className="blog-tab">Technology</span>
                        <div className="flex gap-3 text-[.8rem]">
                            <p>July 16, 2024</p> <span className="font-bold">&middot;</span> <p>3 mins read</p>
                        </div>
                    </div>

                    <div className="blog-body mt-[1em]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam reprehenderit perferendis nulla eum. Eum ipsa ipsam minus, vero optio reiciendis pariatur excepturi libero, totam maxime expedita. Odio culpa iure ea, nobis consectetur voluptas. Similique consequuntur minima porro nisi, harum molestias, libero quas necessitatibus fugiat natus voluptas assumenda dolores obcaecati.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam reprehenderit perferendis nulla eum. Eum ipsa ipsam minus, vero optio reiciendis pariatur excepturi libero, totam maxime expedita. Odio culpa iure ea, nobis consectetur voluptas. Similique consequuntur minima porro nisi, harum molestias, libero quas necessitatibus fugiat natus voluptas assumenda dolores obcaecati.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam reprehenderit perferendis nulla eum. Eum ipsa ipsam minus, vero optio reiciendis pariatur excepturi libero, totam maxime expedita. Odio culpa iure ea, nobis consectetur voluptas. Similique consequuntur minima porro nisi, harum molestias, libero quas necessitatibus fugiat natus voluptas assumenda dolores obcaecati.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam reprehenderit perferendis nulla eum. Eum ipsa ipsam minus, vero optio reiciendis pariatur excepturi libero, totam maxime expedita. Odio culpa iure ea, nobis consectetur voluptas. Similique consequuntur minima porro nisi, harum molestias, libero quas necessitatibus fugiat natus voluptas assumenda dolores obcaecati.</p>
                    </div>
                </div>
            </div>

            <div className="mb-[1em] border-b border-gray-500"></div>

        </div>
    )
}

export default ViewBlogBody