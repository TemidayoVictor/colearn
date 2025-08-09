'use client';
import React, {useState} from "react";
import EmptyPage from "../EmptyPage";
import { genralStore } from "@/zustand/generalStore";

const CourseResources = () => {
    const [content, setContent] = useState<string>('list');
    const changeContent = (content: string) => {
        setContent(content);
    }

    const resources = genralStore((state) => state.course?.resources)

    const getFileName = (path: string | null) => {
        if (!path) return '';
        return path.split('/').pop(); // Returns just "46K7Mj...M4V.pdf"
    };

    return (
        <div>
            {
                content == 'list' &&
                <div>
                    <h2 className="title-3 mt-2">Resources</h2>
                    <div className="mt-3">
                        
                        {
                            resources?.length != 0 ? (
                                resources?.map((item, index) => (
                                    <div className="mt-2" key={index}>
                                        {/* <StudentResourcesList title="Resource Name" link="/" linkName="View Resource" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nulla!" changeContentFn={changeContent}/> */}
                                        
                                        <div>
                                            <div className="best-instructor-box two">
                                                <div className="flex items-center gap-2 left-2">
                                                    <div>
                                                        <p className="font-semibold">{item.title}</p>
                                                        <p className="color-grey-text text-[.8rem] capitalize flex items-center gap-1"><span>{item.category}</span> <span>&middot;</span> <span>{item.type}</span></p>
                                                    </div>
                                                </div>
                                                <div className="right-2">
                                                    {
                                                        item.type === 'link' ?
                                                        <a className="bt-btn btn btn-primary-fill btn-small" href={item?.external_url && !item?.external_url.startsWith("http") ? `https://${item?.external_url}`: item?.external_url || "#"}><span>View Resource</span></a>
                                                        :
                                                        <a className="bt-btn btn btn-primary-fill btn-small" href={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/download-resource/${getFileName(item?.file_path)}/${item?.title}`}><span>View Resource</span></a>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <EmptyPage image="/assets/images/empty-image.png"  header="No Articles" content="There are no articles available for this course." imageWidth={400} imageHeight={240}/>
                            ) 
                        }

                    </div>
                </div>
            }
        </div>
    )
}

export default CourseResources