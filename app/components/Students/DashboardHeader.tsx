import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardHeader = () => {
    return (
            <div className="dashboard-header">
                <div className="bg-image-div">
                    <p>
                        Explore our extensive course catalog to find the perfect fit for your interests and goals. Discover new skills, enhance your expertise, and unlock your full potential. From beginner-friendly introductions to advanced specializations, our courses are designed to help you succeed in your chosen field.
                    </p>

                    <Link href='/' className="bt-btn btn btn-primary-fill">
                        <span>Explore Courses</span>
                        <span>
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-right.png"
                                alt="Colearn Logo"
                                width={12}
                                height={12}
                                className="object-contain"
                            />
                        </span>
                    </Link>
                </div>
            </div>
    )
}

export default DashboardHeader;