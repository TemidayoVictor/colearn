import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { genralStore } from "@/zustand/generalStore";

const ViewTutorsOverview = () => {
    
    const params = useParams();
    const tutorId = params?.tutor as any;

    const instructor = genralStore.getState().getTutorById(tutorId);
    console.log(instructor);
    
    return (
        <div className="view-tutor-overview">
            <div className="view-course-content left">
                <div className="content-sect">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam.</p>
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
                                    src="/assets/images/rocket.png"
                                    alt="Colearn Logo"
                                    width={25}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[.9rem]">10 Videos</h3>
                                <p>Total Course Video</p>
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
                                <h3 className="font-semibold text-[.9rem]">120 Completed</h3>
                                <p>Total Course completion by students</p>
                            </div>
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
        </div>
    )
}

export default ViewTutorsOverview