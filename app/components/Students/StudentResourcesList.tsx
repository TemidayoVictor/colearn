import React from "react";
import Link from "next/link";

type StudentResourcesList = {
    title: string
    linkName: string
    link: string
}

const StudentResourcesList = ({title, linkName, link}:StudentResourcesList) => {
    return (
        <div>
            <div className="best-instructor-box">
                <div className="flex items-center gap-2 left">
                    <div>
                        <p className="font-semibold">{title}</p>
                    </div>
                </div>
                <div className="right">
                    <Link href={link} className="bt-btn btn btn-primary-fill desktop">
                        <span>{linkName}</span>
                    </Link>

                    <Link href='/' className="mobile">
                        <span className="underline text-[.8rem]">View Courses</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentResourcesList