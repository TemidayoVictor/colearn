import React from "react";
import DashboardRevenue from "../Instructors/DashboardRevenue";

const AdminDashboardDetails = () => {
    return (
        <div className="admin-dashboard-details spacing-inter">
            <div className="left flex flex-col gap-4 justify-around">
                <div className="flex flex-col gap-2 bod-bot">
                    <p>Number of Students</p>
                    <p className="font-bold text-[1.2rem]">5,824</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: 4,632</p>
                        <p className="text-[.8rem] font-semibold">Inactive: 936</p>
                        <p className="text-[.8rem] font-semibold color-error">New: 24</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bod-bot">
                    <p>Number of Instructors</p>
                    <p className="font-bold text-[1.2rem]">5,824</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: 4,632</p>
                        <p className="text-[.8rem] font-semibold">Inactive: 936</p>
                        <p className="text-[.8rem] font-semibold color-error">New: 24</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p>Number of Consultants</p>
                    <p className="font-bold text-[1.2rem]">5,824</p>
                    <div className="flex items-center justify-between">
                        <p className="text-[.8rem] font-semibold success">Active: 4,632</p>
                        <p className="text-[.8rem] font-semibold">Inactive: 936</p>
                        <p className="text-[.8rem] font-semibold color-error">New: 24</p>
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