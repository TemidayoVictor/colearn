import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminCoursePageBody from "@/app/components/Admin/AdminCoursePageBody";

const AdminCoursePage = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div>
                    <AdminCoursePageBody />
                </div>
            </UserLayout>
        </div>
    )
}