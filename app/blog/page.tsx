import React from "react";
import { Metadata } from "next";
import BlogLatestPost from "../components/BlogLatestPost";
import BlogHero from "../components/BlogHero";

export const metadata: Metadata = {
    title: "Blog",
}

const Blog = () => {
    return (
        <div className="">
            <BlogHero />
            <BlogLatestPost />
        </div>
    )
}

export default Blog