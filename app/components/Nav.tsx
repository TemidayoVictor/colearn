import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="header">
            <div className="flex items-center gap-4">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/logo-1.png"
                        alt="Colearn Logo"
                        width={150}
                        height={54}
                    />
                </div>

                <div className="flex items-center justify-between gap-4 text-white mt-2">
                    <Link href='/' className="nav-link">Explore</Link>
                    <Link href='/' className="nav-link">About Us</Link>
                    <Link href='/' className="nav-link">Blog</Link>
                    <Link href='/' className="nav-link">Become a Tutor</Link>
                    <Link href='/' className="nav-link">Contact Us</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/shopping-cart.png"
                        alt="Colearn Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>
                <div>
                    <Link href='/' className="flex items-center gap-2 btn text-white">
                        <Image
                            aria-hidden
                            src="/assets/images/profile.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                        />
                        <p className="text-[1rem]">Login</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Nav;