import React from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
    {
        id: 1,
        name: "All",
        link: "/",
    },

    {
        id: 2,
        name: "Computer Sciences",
        link: "/",
    },

    {
        id: 3,
        name: "Data Sciences",
        link: "/",
    },

    {
        id: 4,
        name: "Python",
        link: "/",
    },

    {
        id: 5,
        name: "Business",
        link: "/",
    },

    {
        id: 6,
        name: "Information Technology",
        link: "/",
    },

    {
        id: 7,
        name: "Leadership",
        link: "/",
    },

    {
        id: 8,
        name: "Communication",
        link: "/",
    }
]


const BlogLatestPost = () => {
    return (
        <div className="">
            <div className="container">
                <div>
                    <h2 className="title">Latest blog posts</h2>
                    <div className="tabs mt-3">
                        {
                            posts.map((item, index) => (
                                <Link href={item.link} className="tab" key={index}>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <div className="blog-cont mt-[2em]">
                        {
                            [1,2,3,4,5,6].map((item, index) => (
                                <div className="blog flex flex-col justify-between gap-4" key={index}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/blog-2.png"
                                        alt="Colearn Logo"
                                        width={400}
                                        height={264}
                                        className="object-cover rounded-[.5em]"
                                    />

                                    <div className="flex gap-3 text-[.7rem]">
                                        <p>July 16, 2024</p> <span className="font-bold">&middot;</span> <p>3 mins read</p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <h2 className="title-2">Blog title goes here</h2>
                                        <p className="text-justify text-[.9rem]">Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci.</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <span className="blog-tab">IT</span>
                                                <span className="blog-tab">Technology</span>
                                            </div>
                                            <Link href='/view-blog/1' className="flex gap-2 btn normal two w-fit">
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
                </div>

                <div className="section flex items-end justify-end">
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
                </div>
            </div>
        </div>
    )
}

export default BlogLatestPost