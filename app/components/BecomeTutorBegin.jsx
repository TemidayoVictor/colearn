import React from "react";
import Image from "next/image";
import Link from "next/link";

const begins = [
    {
        image: '/assets/images/become-tutor-1.png',
        title: 'Plan Your Curriculum',
        desc: 'Start by sharing your passion and knowledge with others. Use our Marketplace Insights tool to identify a topic that resonates with learners. Then, bring your unique perspective and teaching style to create a one-of-a-kind learning experience.'
    },

    {
        image: '/assets/images/become-tutor-2.png',
        title: 'Record Your Video',
        desc: 'You dont need a lot of fancy equipment to get started. Use your smartphone or a basic DSLR camera to record your videos. Add a good microphone to ensure clear audio. If youre not comfortable on camera, simply record your screen. '
    },

    {
        image: '/assets/images/become-tutor-3.png',
        title: 'Launch Your Course',
        desc: 'Gather your first ratings and reviews by promoting your course through social media and your professional networks.Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.'
    },
]

const BecomeTutorBegin = () => {
    return (
        <div className="bg-light become-tutor-begin py-[2em]">   
            <div className="container">
                <div>
                    <div className="text-center">
                        <h2 className="title text-black mb-3">How to Begin</h2>
                        <p className="sub-text">Through mentoring, transform your passion into meaningful conversations, lasting friendships, and a global network of like-minded individuals.</p>
                    </div>
                    <div className="become-tutor-begin-cont">
                        {
                            begins.map((item, index) => (
                                <div className="become-tutor-begin" key={index}>
                                    <div>
                                        <Image
                                            aria-hidden
                                            src={item.image}
                                            alt="Colearn Logo"
                                            width={394}
                                            height={330}
                                            className="become-tutor-img"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="title-3 mt-4 mb-2">{item.title}</h2>
                                        <p className="text-justify">{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeTutorBegin