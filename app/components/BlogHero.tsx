import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreHero = () => {
    return (
        <div className="bg-dark">
            <div className="cover container">
                <div className="bg-white rounded-[.5rem] blog-hero p-[1em]">
                    <Image
                        aria-hidden
                        src="/assets/images/blog.png"
                        alt="Colearn Logo"
                        width={778}
                        height={456}
                        className="object-contain blog-hero-left"
                    />

                    <div className="blog-hero-right two">
                        <h2 className="title-2">Explore Our Latest Articles</h2>
                        
                        <p className="text-[1rem] text-justify">
                        "Stay ahead of the curve with our latest insights, trends, and best practices in e-learning and education. Our blog is dedicated to providing you with valuable resources, expert tips, and thought-provoking articles to enhance your learning experience."
                        </p>
                        
                        <Link href='/' className="blog-btn flex gap-2 justify-center btn normal two w-fit">
                            <Image
                                aria-hidden
                                src="/assets/images/book-saved-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p>Explore</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreHero