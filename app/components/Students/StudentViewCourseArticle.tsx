import React from "react";
import StudentResourcesList from "./StudentResourcesList";

const StudentViewCourseArticle = () => {
    return (
        <div>
            <h2 className="title-3">Articles</h2>
            <div>
                {
                    [1,2,3].map((item, index) => (
                        <div className="mt-2" key={index}>
                            <StudentResourcesList title="Article Name" link="/" linkName="View Article" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nulla!"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentViewCourseArticle;