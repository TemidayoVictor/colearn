import React from "react";
import Image from "next/image";
import Link from "next/link";

type ExploreHeroProps = {
    loggedIn?: boolean
}


const ExploreHero = ({loggedIn}:ExploreHeroProps) => {
    return (
        <div className={`${loggedIn ? 'bod-dark' : 'bg-dark'}`}>
            <div className={`${loggedIn ? '' : 'cover container'}`}>
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
                        <h2 className="title-2">Explore Most popular courses and skills</h2>
                        
                        <p className="text-[1rem] text-justify">
                        "Stay ahead of the curve with our latest insights, trends, and best practices in e-learning and education. Our blog is dedicated to providing you with valuable resources, expert tips, and thought-provoking articles to enhance your learning experience."
                        </p>
                        
                        <div className="flex items-center justify-between bg-white gradient-border py-[.5em] px-[1.5em] rounded-[.5rem]">
                            <div className="flex items-center gap-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/search-normal.png"
                                    alt="Colearn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <input type="text" placeholder="Search" className="search-input w-[100%] placeholder-gray-400" />
                            </div>
                            <div>
                                <Link href='/' className="flex gap-2 btn btn-primary-fill">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/search-light.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain desktop"
                                    />
                                    <p>Search</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreHero