import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { genralStore } from "@/zustand/generalStore";

const ViewTutorsOverview = () => {
    
    const data = genralStore((state) => state.data)
    const instructor = data?.instructor;
    
    return (
        <div className="view-tutor-overview">
            <div className="view-course-content left">
                <div className="content-sect">
                    <div>
                        <p>{instructor?.bio}</p>
                        
                    </div>
                </div>
            </div>

            <div className="view-course-content right">
                <div className="content-sect">
                    <h2 className="title-2">Statistics</h2>
                    <div className="view-tutors-statistics">
                        <div className="flex items-start gap-2 stat-left">
                            <div className="rocket flex items-center justify-center rounded-[.3em] p-2">
                                <Image
                                    aria-hidden
                                    // src="/assets/images/rocket.png"
                                    src="/assets/images/big-star.png"
                                    alt="Colearn Logo"
                                    width={25}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[.9rem]">{instructor?.courses ? instructor?.courses?.length : 0} Courses</h3>
                                <p>Total Courses</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 stat-right">
                            <div className="big-star flex items-center justify-center rounded-[.3em] p-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/big-star.png"
                                    alt="Colearn Logo"
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                            <h3 className="font-semibold text-[.9rem]">{data?.total_enrollments} Enrollments</h3>
                                <p>Total Enrollments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                    {
                            instructor?.linkedin_url && (
                                <Link href={instructor?.linkedin_url && !instructor?.linkedin_url.startsWith("http") ? `https://${instructor?.linkedin_url}`: instructor?.linkedin_url || "#"}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/facebook-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            )
                        }

                        {
                            instructor?.twitter_url && (
                                <Link href={instructor?.twitter_url && !instructor?.twitter_url.startsWith("http") ? `https://${instructor?.twitter_url}`: instructor?.twitter_url || "#"}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/X-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            ) 
                        }

                        {
                            instructor?.youtube_url && (
                                <Link href={instructor?.youtube_url && !instructor?.youtube_url.startsWith("http") ? `https://${instructor?.youtube_url}`: instructor?.youtube_url || "#"}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/instagram-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            )  
                        }

                        {
                            instructor?.website && (
                                <Link href={instructor?.website && !instructor?.website.startsWith("http") ? `https://${instructor?.website}`: instructor?.website || "#"}>
                                    <Image
                                        aria-hidden
                                        src="/assets/images/instagram-2.png"
                                        alt="Colearn Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </Link>
                            )  
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTutorsOverview