import React from "react";
import Image from "next/image";

const AccountCareer = () => {
    return (
        <div className="res-flex justify-between items-start">
            <div className="view-course-content left-1">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Experiences</p>
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

                    <p className="font-semibold my-[.8em] text-[.9rem]">UI/UX Designer</p>

                    <p className="color-grey-text font-semibold text-[.8rem]">UBSS Ltd</p>

                    <div className="flex items-center gap-2 my-[.5em]">
                        <Image
                            aria-hidden
                            src="/assets/images/calendar-3.png"
                            alt="Colearn Logo"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                        <p className="text-[.8rem] color-grey-text">2015 - Present</p>
                    </div>

                    <p className="color-grey-text text-[.9rem]">Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut. Feugiat arcu rhoncus urna ultricies magna fermentum curabitur. Ac consequat vitae orci malesuada viverra. Et leo proin scelerisque imperdiet ullamcorper quam. Ac habitasse tortor sed quis gravida. Nunc massa sapien eget bibendum sagittis integer et ante diam.</p>
                </div>
            </div>

            <div className="view-course-content right-1">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Career Information</p>
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

                    <div className="my-[1em]">
                        <p className="text-[.9rem] color-grey-text font-semibold">Primary Discipline/Expertise</p>
                        <p className="text-[.9rem]">Structural Engineer</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Skills</p>
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

                        <div className="mt-[1em]">
                            <div className="skill-tag-cont">
                                {
                                    [1,2,3,4,5].map((item, index) => (
                                        <span className="skill-tag text-[.8rem]" key={index}>UI/UX Design</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountCareer;