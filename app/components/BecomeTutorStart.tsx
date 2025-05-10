import React from "react";
import Image from "next/image";

const starts = [
    {
        image: '/assets/images/start-3.png',
        title: 'Teach your way',
        desc: 'Publish the course you want, in the way you want, and always have control of your own content.'
    },

    {
        image: '/assets/images/start-2.png',
        title: 'Inspire learners',
        desc: 'Teach what you know and help learners explore their interests, gain new skills, and advance their careers. '
    },

    {
        image: '/assets/images/start-1.png',
        title: 'Get rewarded',
        desc: 'Expand your professional network, build your expertise, and earn money on each paid enrollment.'
    },
]

const BecomeTutorStart = () => {
    return (
<div className="container">
                <div>
                    <div className="text-center">
                        <h2 className="title text-black mb-3">So many reasons to start</h2>
                    </div>
                    <div className="become-tutor-begin-cont start">
                        {
                            starts.map((item, index) => (
                                <div className="become-tutor-begin flex flex-col items-center justify-center" key={index}>
                                    <div>
                                        <Image
                                            aria-hidden
                                            src={item.image}
                                            alt="Colearn Logo"
                                            width={140}
                                            height={240}
                                            className="relative"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h2 className="title-3 mt-4 mb-2">{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default BecomeTutorStart