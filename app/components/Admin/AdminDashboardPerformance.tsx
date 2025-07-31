import React from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import CircularProgressBar from "../CircularProgressBar";

const AdminDashboardPerformance = () => {
    const data = genralStore((state) => state.data);
    console.log(data);
    return (
        <div className="admin-dashboard">
            <div className="left">
                <h2 className="text-[.9rem] font-bold mb-2">Attendance</h2>
                <div className="flex items-center justify-around gap-[1em]">
                    <div>
                        <CircularProgressBar percentage={data?.percentage_student_active ? data?.percentage_student_active : 0}/>
                        <div className="flex items-center gap-1 mt-2">
                            <div className="w-4 h-4 bg-[#00B8FF] rounded-[.2em]" ></div>
                            <p className="color-grey-text text-[.7rem]">Active Students</p>
                        </div>
                    </div>
                    <div>
                        <CircularProgressBar percentage={data?.percentage_instructors_active ? data.percentage_instructors_active : 0} color={'#5E17EB'}/>
                        <div className="flex items-center gap-1 mt-2">
                            <div className="w-4 h-4 bg-[#5E17EB] rounded-[.2em]" ></div>
                            <p className="color-grey-text text-[.7rem]">Active Instructors</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Total Course Sales</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">${Number(data?.total_sales_amount).toLocaleString()} </p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Total income in course sales</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Month's Course Sales</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">${Number(data?.monthly_sales_amount).toLocaleString()}</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Course sales for this month</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Total Consultation Amount</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">${Number(data?.total_consultation_amount).toLocaleString()}</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Total revenue from consultation</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-[.9rem]">Month's Consultation Amount</p>
                    <div className="flex items-center gap-2">
                        <Image
                            aria-hidden
                            src="/assets/images/admin-revenue.png"
                            alt="Colearn Logo"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                        <p className="font-bold text-[1rem]">${Number(data?.total_consultation_amount).toLocaleString()}</p>
                    </div>
                    <p className="text-[.6rem] color-grey-text">Month's revenue from consultation</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardPerformance