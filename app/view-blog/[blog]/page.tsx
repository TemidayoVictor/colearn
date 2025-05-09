import React from "react";
import ViewBlogBody from "@/app/components/ViewBlogBody";
import BlogLatestPost from "@/app/components/BlogLatestPost";

const ViewBlog = () => {
    return (
        <div>
            <ViewBlogBody/>
            <BlogLatestPost />
        </div>
    )
}

export default ViewBlog