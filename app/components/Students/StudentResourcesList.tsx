import React from "react";
import Link from "next/link";

type StudentResourcesList = {
    title: string
    linkName: string
    link: string
    description: string
}

const StudentResourcesList = ({title, linkName, link, description}:StudentResourcesList) => {
    return (
        <div>
            <div className="best-instructor-box two">
                <div className="flex items-center gap-2 left-2">
                    <div>
                        <p className="font-semibold">{title}</p>
                        <p className="color-grey-text text-[.8rem]">{description}</p>
                    </div>
                </div>
                <div className="right-2">
                    <Link href={link} className="bt-btn btn btn-primary-fill desktop">
                        <span>{linkName}</span>
                    </Link>

                    <Link href={link} className="mobile">
                        <span className="underline text-[.8rem]">{linkName}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentResourcesList