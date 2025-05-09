import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogLatestPost from "../components/BlogLatestPost";
import BlogHero from "../components/BlogHero";
import { div } from "framer-motion/client";

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