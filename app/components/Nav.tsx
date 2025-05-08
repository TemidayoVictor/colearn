import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/logo-1.png"
                        alt="Colearn Logo"
                        width={150}
                        height={54}
                        className="header-logo"
                    />
                </div>

                <div className="nav-links-cont">
                    <Link href='/' className="nav-link">Explore</Link>
                    <Link href='/' className="nav-link">About Us</Link>
                    <Link href='/' className="nav-link">Blog</Link>
                    <Link href='/' className="nav-link">Become a Tutor</Link>
                    <Link href='/' className="nav-link">Contact Us</Link>
                </div>
            </div>

            <div className="nav-links-other">
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/shopping-cart.png"
                        alt="Colearn Logo"
                        width={40}
                        height={40}
                        className="object-contain desktop"
                    />
                    <div className="mobile cart-cont">
                        <Image
                            aria-hidden
                            src="/assets/images/shopping-cart-2.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div>
                    <Link href='/' className="flex items-center gap-2 btn text-white">
                        <Image
                            aria-hidden
                            src="/assets/images/profile.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="desktop"
                        />
                        <p className="text-[1rem]">Login</p>
                    </Link>
                </div>
                <div>
                    <Image
                        aria-hidden
                        src="/assets/images/menu.png"
                        alt="Colearn Logo"
                        width={32}
                        height={32}
                        className="mobile"
                    />
                </div>
            </div>

        </div>
    )
}

export default Nav;