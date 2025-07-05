import React from "react";
import Image from "next/image";

type UnavailableProps = {
    content? : string;
}

const Unavailable = ({content}: UnavailableProps) => {
    return (

        <div className="flex flex-col items-center justify-center gap-2">
            <Image
                aria-hidden
                src="/assets/images/sad.png"
                alt="Colearn Logo"
                width={140}
                height={140}
                className="object-contain"
            />
            <h2 className="error-msg font-semibold">Consultant Unavailable</h2>
            {
                content ? (
                    <p className="text-center color-grey-text text-[.9rem]">{content}</p>
                ) : (
                    <p className="text-center color-grey-text text-[.9rem]">Sorry, this Consultant isn’t available on this day, kindly try another day.</p>
                )
            }
        </div>
    )
}

export default Unavailable