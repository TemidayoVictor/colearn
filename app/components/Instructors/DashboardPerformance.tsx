import React from "react";
import Image from "next/image";

type DashboardPerformanceProps = {
    type?: string | null
    user?: string 
}

const renderHeading = (type: string | null | undefined) => {
    switch (type) {
      case 'verification':
        return <h2 className="font-semibold"> User Verification</h2>;
      case 'management':
        return <h2 className="font-semibold"> User Management</h2>;
      default:
        return <h2 className="font-semibold"> {`${type == "Course" || type == "Course-2" ? "Course" : ""}`} Performance Summary</h2>;
    }
  };

const DashboardPerformance = ({type, user}: DashboardPerformanceProps) => {
    return (
        <div className="dashboard-performance">
            { renderHeading(type) }
            {
                !user &&
                <div className={`dashboard-grid ${type == 'Course' || type == "Course-2"  ? 'one' : ''}`}>
                    {
                       type !== "Course-2" &&
                        <div className="flex flex-col gap-1 perf-detail none">
                            <p className="color-grey-text text-[.9rem]">Total Sales Amount</p>
                            <h3 className="font-semibold">$3429.45</h3>
                            <p className="color-grey-text text-[.7rem]">Total Sales Amount</p>
                        </div> 
                    }
                    {
                       type == "Course-2" &&
                        <div className="flex flex-col gap-1 perf-detail none">
                            <p className="color-grey-text text-[.9rem]">Total Course Sales</p>
                            <h3 className="font-semibold">$3429.45</h3>
                            <p className="color-grey-text text-[.7rem]">Total Course Sales</p>
                        </div> 
                    }
                    {
                        type == "Dashboard" &&
                        <div className="flex flex-col gap-1 perf-detail">
                            <p className="color-grey-text text-[.9rem]">Wallet Balance</p>
                            <h3 className="font-semibold">$1427.82</h3>
                            <p className="color-grey-text text-[.7rem]">Wallet Balance</p>
                        </div>
                    }
                    {
                        type !== "Course-2" &&
                        <div className="flex flex-col gap-1 perf-detail">
                            <p className="color-grey-text text-[.9rem]">Total Course Upload</p>
                            <h3 className="font-semibold">24</h3>
                            <p className="color-grey-text text-[.7rem]">Total Course Upload</p>
                        </div>
                    }
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Enrollment</p>
                        <h3 className="font-semibold">155</h3>
                        <p className="color-grey-text text-[.7rem]">Total Enrollment</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Course Completed</p>
                        <h3 className="font-semibold">124</h3>
                        <p className="color-grey-text text-[.7rem]">Total Course Completed</p>
                    </div>
                    {
                        (type == "Course" || type == "Course-2") &&
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
            }

            {
                user == "student" &&
                <div className="dashboard-grid">
                    <div className="flex flex-col gap-1 perf-detail none">
                        <p className="color-grey-text text-[.9rem]">Certifications</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Certifications</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Completed Courses</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Completed Courses</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Active Enrolled Courses</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Your Active enrolled courses</p>
                    </div>
                </div>
            }

            {
                user == "admin" && type == "verification" &&
                <div className="dashboard-grid">
                    <div className="flex flex-col gap-1 perf-detail none">
                        <p className="color-grey-text text-[.9rem]">Total Users</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Users</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Pending Verification</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Pending Verification</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Declined</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Total Declined</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Verified User</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Total Verified User</p>
                    </div>
                </div>
            }

            {
                user == "admin" && type == "management" &&
                <div className="dashboard-grid one">
                    <div className="flex flex-col gap-1 perf-detail none">
                        <p className="color-grey-text text-[.9rem]">Total Users</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Users</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Active Users</p>
                        <h3 className="font-semibold">4</h3>
                        <p className="color-grey-text text-[.7rem]">Total Active Users</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Students</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Total Students</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Instructors</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Total Instructors</p>
                    </div>
                    <div className="flex flex-col gap-1 perf-detail">
                        <p className="color-grey-text text-[.9rem]">Total Consultants</p>
                        <h3 className="font-semibold">2</h3>
                        <p className="color-grey-text text-[.7rem]">Total Consultants</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardPerformance