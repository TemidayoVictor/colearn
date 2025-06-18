import React, {useState} from "react";
import { utilitiesStore } from "@/zustand/utilitiesStore";

interface SubjectSelectorProps {
    onChange: (selected: string[]) => void;
    selectedSubjects: string[];
    setSelectedSubjects: (updated: string[]) => void;
}

const SubjectSelector = ({onChange, selectedSubjects, setSelectedSubjects}: SubjectSelectorProps) => {

    const subjects = utilitiesStore((state) => state.preferences);

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
                    <label key={index} className="flex items-center space-x-2 cursor-pointer bod-grey p-2 rounded-[.2em]">
                        <input
                            type="checkbox"
                            checked={selectedSubjects.includes(subject.name)}
                            onChange={() => toggleSubject(subject.name)}
                        />
                        <span>{subject.name}</span>
                    </label>
                ))
            }
            </div>
        </div>
    )
}

export default SubjectSelector