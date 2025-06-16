import React from "react";

type ButtonLoaderProps = {
    content: string
}

const ButtonLoader = ({content}: ButtonLoaderProps) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>{content}</span>
        </div>
    )
}

export default ButtonLoader