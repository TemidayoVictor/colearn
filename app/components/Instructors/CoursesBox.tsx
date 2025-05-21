import React from "react";
import TableContent from "./TableContent";
import GridContent from "./GridContent";

const CoursesBox = () => {
    return (
        <div>
            <div>
                <GridContent />
            </div>

            <div className="spacing-inter bod-grey p-[1em] rounded-[.5em]">
                <TableContent />
            </div>
        </div>
    )
}

export default CoursesBox