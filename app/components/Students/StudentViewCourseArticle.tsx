import React from "react";
import StudentResourcesList from "./StudentResourcesList";

const StudentViewCourseArticle = () => {
    return (
        <div>
            <div>
                {
                    [1,2,3].map(() => (
                        <StudentResourcesList title="Article Name" link="/" linkName="View Article" />
                    ))
                }
            </div>
        </div>
    )
}

export default StudentViewCourseArticle;