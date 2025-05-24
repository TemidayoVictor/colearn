import React from "react";
import Image from "next/image";
import Link from "next/link";

const AccountAbout = () => {
    return (
        <div className="res-flex justify-between items-start">
            <div className="view-course-content left-1">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Personal Information</p>
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/edit-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="res-flex justify-between">
                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Full Name</p>
                                <p className="text-[.9rem]">Favi Ayomide</p>
                            </div>

                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Email Address</p>
                                <p className="text-[.9rem]">faviayomide@gmail.com</p>
                            </div>
                        </div>

                        <div className="res-flex justify-between mt-3">
                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Address</p>
                                <p className="text-[.9rem]">Washington D.C, USA</p>
                            </div>

                            <div className="account-about-body">
                                <p className="color-grey-text font-bold text-[.9rem]">Language</p>
                                <p className="text-[.9rem]">English, French</p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Social Media</p>
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/edit-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <Link href='/'>
                            <Image
                                aria-hidden
                                src="/assets/images/facebook-2.png"
                                alt="Colearn Logo"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </Link>

                        <Link href='/'>
                            <Image
                                aria-hidden
                                src="/assets/images/X-2.png"
                                alt="Colearn Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </Link>
                        
                        <Link href='/'>
                            <Image
                                aria-hidden
                                src="/assets/images/instagram-2.png"
                                alt="Colearn Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

            </div>
            <div className="view-course-content right-1">
                <div className="flex items-center justify-between">
                    <p className="font-bold">Bio</p>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/edit-2.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="account-bio">
                    <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam.</p>
                </div>
            </div>
        </div>
    )
}

export default AccountAbout;