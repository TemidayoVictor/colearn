import React from "react";

const DashboardPerformance = () => {
    return (
        <div className="dashboard-performance">
            <h2 className="font-semibold">Performance Summary</h2>
            <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col gap-1">
                    <p className="color-grey-text text-[.9rem]">Total Sales Amount</p>
                    <h3 className="font-semibold">$3429.45</h3>
                    <p className="color-grey-text text-[.7rem]">Total Sales Amount</p>
                </div>
                <div className="flex flex-col gap-1 perf-detail">
                    <p className="color-grey-text text-[.9rem]">Wallet Balance</p>
                    <h3 className="font-semibold">$1427.82</h3>
                    <p className="color-grey-text text-[.7rem]">Wallet Balance</p>
                </div>
                <div className="flex flex-col gap-1 perf-detail">
                    <p className="color-grey-text text-[.9rem]">Total Course Upload</p>
                    <h3 className="font-semibold">24</h3>
                    <p className="color-grey-text text-[.7rem]">Total Course Upload</p>
                </div>
                <div className="flex flex-col gap-1 perf-detail">
                    <p className="color-grey-text text-[.9rem]">Total Enrollment</p>
                    <h3 className="font-semibold">155</h3>
                    <p className="color-grey-text text-[.7rem]">Total Enrollment</p>
                </div>
                <div className="flex flex-col gap-1 perf-detail">
                    <p className="color-grey-text text-[.9rem]">Total Course Uploaded</p>
                    <h3 className="font-semibold">124</h3>
                    <p className="color-grey-text text-[.7rem]">Total Course Uploaded</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardPerformance