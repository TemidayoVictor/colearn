import React from "react";
import Image from "next/image";
import CircularProgressBar from "../CircularProgressBar";

const AdminDashboardPerformance = () => {
    return (
        <div className="admin-dashboard">
            <div className="left">
                <h2 className="text-[.9rem] font-bold mb-2">Attendance</h2>
                <div className="flex items-center justify-around gap-[1em]">
                    <div>
                        <CircularProgressBar percentage={90}/>
                        <div className="flex items-center gap-1 mt-2">
                            <div className="w-4 h-4 bg-[#00B8FF] rounded-[.2em]" ></div>
                            <p className="color-grey-text text-[.7rem]">Active Students</p>
                        </div>
                    </div>
                    <div>
                        <CircularProgressBar percentage={80} color={'#5E17EB'}/>
                        <div className="flex items-center gap-1 mt-2">
                            <div className="w-4 h-4 bg-[#5E17EB] rounded-[.2em]" ></div>
                            <p className="color-grey-text text-[.7rem]">Active Instructors</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Annual Earning</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">$3429.45</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">All income in subscription and commission</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Monthly Earning</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">$3429.45</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">All income in subscription and commission</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Subscription  Earning</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">$3429.45</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Total subscription income</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Commission Earning</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">$3429.45</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Total commission income</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardPerformance