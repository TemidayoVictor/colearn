import React from "react";
import Image from "next/image";
import Link from "next/link";

const StudentViewCourseMaterial = () => {
    return (
        <div>
            {
                [1,2,3].map((items, index ) => (
                    <div className="student-course-material" key={index}>
                        <div className="left-3">
                            <p className="font-bold">Introduction to IT</p>
                        </div>
                        <div className="right-3">
                            <Image
                                aria-hidden
                                src="/assets/images/arrow-down-2.png"
                                alt="Colearn Logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default StudentViewCourseMaterial