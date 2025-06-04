import React from "react";
import Link from "next/link";
import Image from "next/image";

type FindConsultantHeroProps = {
    loggedIn?: boolean
}

const FindConsultantHero = ({loggedIn}: FindConsultantHeroProps) => {
    return (
        <div className={`${loggedIn ? 'bod-dark' : 'bg-dark'}`}>
            <div className={`${loggedIn ? '' : 'cover container'}`}>
                <div className="find-consultant bg-white rounded-[.5rem] p-[1em]">
                    <div className="left">
                        <h2 className="title-2">Find a Consultant</h2>
                        <div className="bg-white p-3 mt-4 rounded-[.5em] flex-1">
                            <div className="l-l">
                                <div className="find-consultant-profile">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/user-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>
                                
                                <div className="flex items-center justify-between gap-2 bg-white py-[.3em] px-[1.5em] rounded-[.3rem] find-consultant-search">
                                    <Image
                                        aria-hidden
                                        src="/assets/images/search-normal-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    <div className="w-[96%]">
                                        <input type="text" placeholder="Search" className="w-[100%] placeholder-gray-400" />
                                    </div>
                                </div>

                                <Link href='/' className="gap-2 justify-center btn btn-primary-fill find-consultant-link desktop-flex">
                                    <p>Search</p>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/arrow-right.png"
                                        alt="Colearn Logo"
                                        width={12}
                                        height={12}
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                            <div className="find-consultant-select-cont">
                                <select name="" id="" className="find-consultant-select">
                                    <option value="">Course</option>
                                </select>
                                <select name="" id="" className="find-consultant-select">
                                    <option value="">Country</option>
                                </select>
                                <select name="" id="" className="find-consultant-select">
                                    <option value="">Price</option>
                                </select>
                            </div>

                            <Link href='/' className="mt-4 gap-2 justify-center btn btn-primary-fill find-consultant-link mobile-flex">
                                <p>Search</p>
                                {/* <Image
                                    aria-hidden
                                    src="/assets/images/arrow-right.png"
                                    alt="Colearn Logo"
                                    width={12}
                                    height={12}
                                    className="object-contain"
                                /> */}
                            </Link>
                        </div>
                    </div>
                    <div className="right desktop">
                        <Image
                            aria-hidden
                            src="/assets/images/search-big.png"
                            alt="Colearn Logo"
                            width={392}
                            height={320}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindConsultantHero