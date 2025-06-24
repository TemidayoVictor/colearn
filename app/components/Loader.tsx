import React from "react";
import Image from "next/image";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-[80vh] bg-white text-[#0093cc]">
            <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 border-4 border-[#0093cc] border-dashed rounded-full animate-spin"></div>
                <p className="text-lg font-semibold tracking-wide animate-pulse">
                    Loading, Please Wait...
                </p>
            </div>
        </div>
    )
}

export default Loader