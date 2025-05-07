'use client';
import React, { useState } from "react";
import Image from "next/image";

interface Benefit {
    id: number;
    title: string;
    text: string;
}

const benefits = [
    {
      id: 1,
      title: "Flexible Learning Schedule",
      text: "Life is busy, and we understand that finding time for learning can be challenging. That's why we offer flexible learning schedule.",
    },
    {
      id: 2,
      title: "Expert Instructions",
      text: "We believe the quality of instruction is paramount to your learning experiences.",
    },
    {
      id: 3,
      title: "Life Time Access",
      text: "Unlock the potential to a lifelong learning with our exclusive lifetime access membership.",
    },
    {
      id: 4,
      title: "Updated Curriculum",
      text: "We are committed to providing you with the most relevant and up-to-date curriculum to ensure that.",
    },
    {
      id: 5,
      title: "AI",
      text: "We offer flexible learning schedule powered by AI to personalize your experience.",
    },
    {
      id: 6,
      title: "Verified Certificate",
      text: "Earn a verified certificate and showcase your achievement with pride.",
    },
];

const HomeBenefits: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    return (
        <div className="bg-light py-[2em]">
            <div className="container">
                <div className="text-center">
                    <h2 className="title">Choose Us For Superior Learning Experiences</h2>
                    <p className="mt-[1em]">Discover the unique benefits and exceptional features that makes our courses the best <br /> choice for your education.</p>
                </div>

                <div className="benefits-container">
                    {
                        benefits.map((item) => (
                            <div
                                key={item.id}
                                className={`benefit ${item.id === 2 ? "active" : ""}` }
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="flex gap-3 items-center">
                                    <div className="benefit-img-cont">
                                    <Image
                                        aria-hidden
                                        src={
                                            item.id === 2
                                            ? hoveredId === item.id
                                            ? "/assets/images/calendar.png"
                                            : "/assets/images/calendar-blue.png"
                                            : hoveredId === item.id
                                            ? "/assets/images/calendar-blue.png"
                                            : "/assets/images/calendar.png"
                                          }
                                        alt="Benefit Icon"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                    </div>
                                    <p className="font-semibold">{item.title}</p>
                                </div>
                                <div className="mt-[1em]">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeBenefits