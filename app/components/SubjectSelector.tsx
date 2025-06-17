import React, {useState} from "react";
import { subjects } from "@/data/subjects";

interface SubjectSelectorProps {
    initialSelected?: string[];
    onChange: (selected: string[]) => void;
}

const SubjectSelector = ({initialSelected = [], onChange}: SubjectSelectorProps) => {
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(initialSelected);
    
    const toggleSubject = (subject: string) => {
        const updated = selectedSubjects.includes(subject)
          ? selectedSubjects.filter((s) => s !== subject)
          : [...selectedSubjects, subject];
    
        setSelectedSubjects(updated);
        onChange(updated);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-4">
            {
                subjects.map((subject, index) => (
                    <label key={subject} className="flex items-center space-x-2 cursor-pointer bod-grey p-2 rounded-[.2em]">
                        <input
                            type="checkbox"
                            checked={selectedSubjects.includes(subject)}
                            onChange={() => toggleSubject(subject)}
                        />
                        <span>{subject}</span>
                    </label>
                ))
            }
            </div>
        </div>
    )
}

export default SubjectSelector