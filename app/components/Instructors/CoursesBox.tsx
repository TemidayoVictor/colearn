import React from "react";
import TableContentCourses from "./TableContentCourses";
import GridContent from "./GridContent";

type CoursesBoxProps = {
    view: string;
    tab?: string
}

const CoursesBox = ({view, tab}: CoursesBoxProps) => {
    return (
        <div>
            {
                view == 'grid' &&
                <div>
                    <GridContent tab={tab} />
                </div>
            }

            {
                view == 'table' &&
                <div className="spacing-inter bod-grey p-[1em] rounded-[.5em]">
                    <TableContentCourses tab={tab} />
                </div>
            }
        </div>
    )
}

export default CoursesBox