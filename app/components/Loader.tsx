import React from "react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1f2937] to-[#111827] text-white">
            <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
                <p className="text-lg font-semibold tracking-wide animate-pulse">
                    Loading, Please Wait...
                </p>
            </div>
        </div>
    )
}

export default Loader