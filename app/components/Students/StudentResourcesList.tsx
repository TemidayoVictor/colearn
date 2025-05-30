import React from "react";
import Link from "next/link";

type StudentResourcesList = {
    title: string
    linkName: string
    link: string
    description: string
    changeContentFn: (content: string) => void
}

const StudentResourcesList = ({title, linkName, link, description, changeContentFn}:StudentResourcesList) => {
    return (
        <div>
            <div className="best-instructor-box two">
                <div className="flex items-center gap-2 left-2">
                    <div>
                        <p className="font-semibold">{title}</p>
                        <p className="color-grey-text text-[.8rem]">{description}</p>
                    </div>
                </div>
                <div className="right-2" onClick={() => changeContentFn('resource')}>
                    <p className="bt-btn btn btn-primary-fill btn-small">
                        <span>{linkName}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StudentResourcesList