import React from "react";
import Image from "next/image";

const ViewCoursesTestimonials = () => {
    return (
        <div className="testimonials-container">
            {
                [1,2,3].map((item, index) => (
                    <div className="flex flex-col gap-2 mb-[1.5rem] testimonial" key={index}>
                        <div className="flex items-center gap-4">
                            <Image
                                aria-hidden
                                src="/assets/images/avatars.png"
                                alt="Colearn Logo"
                                width={40}
                                height={40}
                                className="object-contain rounded-[50%]"
                            />
                            <p className="font-bold">Favi Design</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[1.1rem]">Comment Title</h3>
                            <p className="color-grey-text text-[.9rem] mt-2 text-justify">Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <Image
                                    aria-hidden
                                    src="/assets/images/empty-star.png"
                                    alt="Colearn Logo"
                                    width={16}
                                    height={16}
                                    className="object-contain rounded-[50%]"
                                />
                                <p><span className="ml-2 font-semibold">4.0 /</span> 5</p>
                            </div>
                            <div>
                                <p className="font-bold">2 days ago</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewCoursesTestimonials