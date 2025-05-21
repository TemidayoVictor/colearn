import React from "react";
import Image from "next/image";

const UploadCourseBody = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 cursor-pointer">
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/images/left-arrow.png"
                            alt="Colearn Logo"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-[.9rem] font-semibold">Back</p>
                </div>
                <h2 className="title-3">Create Course</h2>
            </div>
            <div>
                <p className="text-[.9rem] color-grey-text">Step 1 of 3</p>
            </div>
        </div>
    )
}

export default UploadCourseBody