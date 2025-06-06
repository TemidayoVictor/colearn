import React from "react";
import UserLayout from "@/app/components/UserLayout";
import AdminCoursesBody from "@/app/components/Admin/AdminCoursesBody";

const AdminCourses = () => {
    return (
        <div>
            <UserLayout userType="admin">
                <div>
                    <AdminCoursesBody />
                </div>
            </UserLayout>
        </div>
    )
} 

export default AdminCourses