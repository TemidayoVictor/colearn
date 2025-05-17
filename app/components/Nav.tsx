'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState<boolean | null>(false);
    const pathname = usePathname();
    const useVariation1 = ["/", "/about", "/blog", "/become-tutor", "/contact-us", "/explore", "/search", "/view-courses", "/find-consultant"].includes(pathname);
    const hidesNavOn = ["/authentication/", "/onboarding"].some(prefix => pathname.startsWith(prefix));
    const hidesNavOnTwo = ["/students"].some(prefix => pathname.startsWith(prefix));
    return (
        <>
            <Link href='/' className={`header hiddenNav ${!hidesNavOn ? 'd-none' : ''} ${hidesNavOnTwo ? 'd-none' : ''}`}>
                <Image
                    aria-hidden
                    src="/assets/images/logo-1.png"
                    alt="Colearn Logo"
                    width={150}
                    height={54}
                    className="header-logo desktop"
                />

                <Image
                    aria-hidden
                    src="/assets/images/logo-2.png"
                    alt="Colearn Logo"
                    width={150}
                    height={54}
                    className="header-logo mobile"
                />
            </Link>

            <div className={`${hidesNavOn ? 'd-none' : ''} ${hidesNavOnTwo ? 'd-none' : ''} header ${useVariation1 ? 'bg-dark' : 'bg-white'}`}>
                <div className="header-contents">
                    <Link href='/'>
                        {
                            useVariation1 ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/logo-1.png"
                                    alt="Colearn Logo"
                                    width={150}
                                    height={54}
                                    className="header-logo"
                                />
                            ) : (

                                <Image
                                    aria-hidden
                                    src="/assets/images/logo-2.png"
                                    alt="Colearn Logo"
                                    width={150}
                                    height={54}
                                    className="header-logo"
                                />
                            )
                        }

                    </Link>

                    <div className={`nav-links-cont ${menuOpen ? "active" : ""}`}>
                        
                        <div className="w-full">
                            <div className="mobile-flex items-center justify-between">
                                <Link href='/' onClick={() => setMenuOpen(!menuOpen)}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/logo-2.png"
                                        alt="Colearn Logo"
                                        width={150}
                                        height={54}
                                        className="header-logo"
                                    />
                                </Link>

                                <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" onClick={() => setMenuOpen(!menuOpen)}/>
                            </div>

                            <div className={`nav-links-cont-inner ${useVariation1 ? 'nav-color-white' : 'nav-color-black'}`}>
                                <Link href='/' className={`nav-link mobile ${pathname == '/' ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                                <Link href='/explore' className={`nav-link ${pathname.startsWith('/explore') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Explore</Link>
                                <Link href='/about' className={`nav-link ${pathname.startsWith('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>About Us</Link>
                                <Link href='/blog' className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Blog</Link>
                                <Link href='/become-tutor' className={`nav-link ${pathname.startsWith('/become-tutor') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Become a Tutor</Link>
                                <Link href='/contact-us' className={`nav-link ${pathname.startsWith('/contact') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Contact Us</Link>
                                <Link href='/cart' className={`nav-link mobile ${pathname.startsWith('/cart') ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>Cart</Link>
                            </div>
                        </div>

                        <div className="mobile-flex items-center justify-between w-full">
                            <Link href='/authentication/login' className="btn normal spec">Login</Link>
                            <Link href='/authentication/sign-up' className="btn btn-primary-fill spec">Create Account</Link>
                        </div>

                    </div>
                </div>

                <div className="nav-links-other">
                    <div>
                        <Link href='/cart'>
                            {
                                useVariation1 ? (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/shopping-cart.png"
                                        alt="Colearn Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain desktop"
                                    />

                                ) : (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/shopping-cart-3.png"
                                        alt="Colearn Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain desktop"
                                    />
                                )
                            }
                        </Link>

                        <Link href='/cart' className={`mobile cart-cont ${useVariation1 ? 'white' : 'grey'}`}>
                            <Image
                                aria-hidden
                                src="/assets/images/shopping-cart-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/authentication/login' className={`flex items-center gap-2 ${useVariation1 ? 'login-btn-1' : 'login-btn-2'}`}>
                            {
                                useVariation1 ? (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/profile.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="desktop"
                                    />
                                ) : (
                                    <Image
                                        aria-hidden
                                        src="/assets/images/profile-2.png"
                                        alt="Colearn Logo"
                                        width={20}
                                        height={20}
                                        className="desktop"
                                    />
                                )
                            }
                            <p className="text-[1rem]">Login</p>
                        </Link>
                    </div>
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            useVariation1 ? (
                                <Image
                                    aria-hidden
                                    src="/assets/images/menu.png"
                                    alt="Colearn Logo"
                                    width={32}
                                    height={32}
                                    className="mobile"
                                />
                            ) : (
                                <Image
                                    aria-hidden
                                    src="/assets/images/menu-2.png"
                                    alt="Colearn Logo"
                                    width={32}
                                    height={32}
                                    className="mobile"
                                />
                            )
                        }
                    </div>
                </div>

            </div>
        </>
        
    )
}

export default Nav;