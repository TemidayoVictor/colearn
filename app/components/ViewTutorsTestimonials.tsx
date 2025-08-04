import React from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation } from 'swiper/modules';
import { useParams } from "next/navigation";
import { genralStore } from "@/zustand/generalStore";

const ViewTutorsTestimonials = () => {
    const params = useParams();
    const tutorId = params?.tutor as any;

    const instructor = genralStore.getState().getTutorById(tutorId);
    console.log(instructor);

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
                }}
            >
                {
                    [1,2,3,4,5].map((item, index) => (
                        <SwiperSlide className="flex flex-col gap-2 mb-[1.5rem]" key={index}>
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
                            <div className="flex items-center justify-between mt-2">
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
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="mt-[2rem] flex justify-end">
                <button className="custom-prev swiper-btn two mr-2">
                    <Image src="/assets/images/arrow-left-4.png" alt="Prev" width={16} height={16} />
                </button>
                <button className="custom-next swiper-btn two">
                    <Image src="/assets/images/arrow-right-4.png" alt="Next" width={16} height={16} className="object-contain"/>
                </button>
            </div>
        </div>
    )
}

export default ViewTutorsTestimonials