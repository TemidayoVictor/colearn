import React from "react";
import { Metadata } from "next";
import ViewBlogBody from "@/app/components/ViewBlogBody";
import BlogLatestPost from "@/app/components/BlogLatestPost";

export const metadata: Metadata = {
    title: "Blog",
}

const ViewBlog = () => {
    return (
        <div>
            <ViewBlogBody/>
            <BlogLatestPost />
        </div>
    )
}

export default ViewBlog