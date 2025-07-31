import React from "react";
import DashboardRevenue from "../Instructors/DashboardRevenue";
import { genralStore } from "@/zustand/generalStore";

const AdminDashboardDetails = () => {
    const data = genralStore((state) => state.data);
    return (
        <div className="admin-dashboard-details spacing-inter">
            <div className="left flex flex-col gap-4 justify-around">
                <div className="flex flex-col gap-2 bod-bot">
                    <p>Number of Students</p>
                    <p className="font-bold text-[1.2rem]">{Number(data?.total_students).toLocaleString()}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: {Number(data?.active_students).toLocaleString()}</p>
                        <p className="text-[.8rem] font-semibold">Inactive: {Number(data?.total_students) - Number(data?.active_students)} </p>
                        <p className="text-[.8rem] font-semibold color-error">New: {Number(data?.new_students).toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bod-bot">
                    <p>Number of Instructors</p>
                    <p className="font-bold text-[1.2rem]">{Number(data?.total_instructors).toLocaleString()}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: {Number(data?.active_instructors).toLocaleString()}</p>
                        <p className="text-[.8rem] font-semibold">Inactive: {Number(data?.total_instructors) - Number(data?.active_instructors)}</p>
                        <p className="text-[.8rem] font-semibold color-error">New: {Number(data?.new_instructors).toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p>Number of Consultants</p>
                    <p className="font-bold text-[1.2rem]">{Number(data?.total_consultants).toLocaleString()}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: {Number(data?.active_consultants).toLocaleString()}</p>
                        <p className="text-[.8rem] font-semibold">Inactive: {Number(data?.total_consultants) - Number(data?.active_consultants)}</p>
                        <p className="text-[.8rem] font-semibold color-error">New: {Number(data?.monthly_sales_amount).toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <DashboardRevenue style="two"/>
            </div>
        </div>
    )
}

export default AdminDashboardDetails