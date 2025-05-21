import React from "react";
import Image from "next/image";

type DashboardPerformanceProps = {
    type?: string
}

const DashboardPerformance = ({type}: DashboardPerformanceProps) => {
    return (
        <div className="dashboard-performance">
            <h2 className="font-semibold">Performance Summary</h2>
            <div className="dashboard-grid">
                <div className="flex flex-col gap-1">
                    <p className="color-grey-text text-[.9rem]">Total Sales Amount</p>
                    <h3 className="font-semibold">$3429.45</h3>
                    <p className="color-grey-text text-[.7rem]">Total Sales Amount</p>
                </div>
                {
                    type == "Dashboard" &&
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Wallet Balance</p>
                        <h3 className="font-semibold">$1427.82</h3>
                        <p className="color-grey-text text-[.7rem]">Wallet Balance</p>
                    </div>
                }
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
                {
                    type == "Course" &&
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Comments</p>
                        <div className="flex items-center gap-3">
                            <h3 className="font-semibold">439</h3>
                            <div className="flex items-center gap-2">
                                <Image
                                    aria-hidden
                                    src="/assets/images/star.png"
                                    alt="Colearn Image"
                                    width={15}
                                    height={15}
                                    className="object-cover"
                                />
                                <p className="text-[.8rem]"><span className="font-semibold">4.96 /</span> 5 Rating</p>
                            </div>
                        </div>
                        <p className="color-grey-text text-[.7rem]">Total Comments</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default DashboardPerformance