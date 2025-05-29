import React from "react";
import StudentResourcesList from "./StudentResourcesList";


const StudentViewCourseTest = () => {
    return (
        <div>
            <h2 className="title-3 mt-2">Quiz / Practice Questions</h2>
            <div className="mt-3">
                {
                    [1,2,3].map((item, index) => (
                        <div className="mt-2" key={index}>
                            <StudentResourcesList title="Quiz / Practice Question" link="/" linkName="View Test" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nulla!"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentViewCourseTest;