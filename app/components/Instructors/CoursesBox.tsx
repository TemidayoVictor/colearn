import React from "react";
import TableContent from "./TableContent";
import GridContent from "./GridContent";

type CoursesBoxProps = {
    view: string;
}

const CoursesBox = ({view}: CoursesBoxProps) => {
    return (
        <div>
            {
                view == 'grid' &&
                <div>
                    <GridContent />
                </div>
            }

            {
                view == 'table' &&
                <div className="spacing-inter bod-grey p-[1em] rounded-[.5em]">
                    <TableContent />
                </div>
            }
        </div>
    )
}

export default CoursesBox