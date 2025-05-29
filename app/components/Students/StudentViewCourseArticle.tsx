'use client';
import React, {useState} from "react";
import StudentResourcesList from "./StudentResourcesList";
import StudentViewCourseArticleView from "./StudentViewCourseArticleView";

const StudentViewCourseArticle = () => {
    const [content, setContent] = useState<string>('list');
    const changeContent = (content: string) => {
        setContent(content);
    }
    return (
        <div>
            {
                content == 'list' &&
                <div>
                    <h2 className="title-3 mt-2">Articles</h2>
                    <div className="mt-3">
                        {
                            [1,2,3].map((item, index) => (
                                <div className="mt-2" key={index}>
                                    <StudentResourcesList title="Article Name" link="/" linkName="View Article" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nulla!" changeContentFn={changeContent}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }

            {
                content == 'resource' &&
                <StudentViewCourseArticleView back={changeContent}/>
            }
        </div>
    )
}

export default StudentViewCourseArticle;