'use client';
import React,  { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    options: string[];
    selected: string[];
    setSelected: (values: string[]) => void;
  };

const MultiDropdownSelector: React.FC<Props> = ({options, selected, setSelected}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleSelect = (item: string) => {
        if (selected.includes(item)) {
          setSelected(selected.filter((s) => s !== item));
        } else {
          setSelected([...selected, item]);
        }
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef}>
        <div
            className="input-field" onClick={() => setOpen(!open)}>
            <div className="skill-tag-cont two">
                {
                    selected.map((item, index) => (
                    <span className="skill-tag text-[.8rem] flex gap-2 items-center" key={index}>
                        {item}
                        <button type="button" onClick={(e) => {
                                e.stopPropagation();
                                setSelected(selected.filter((s) => s !== item));
                            }}>
                            <FontAwesomeIcon icon={faXmark} className="text-[.8rem]"/>
                        </button>
                    </span>
                ))}
            </div>
            <span className="">{selected.length === 0 ? "Select at least one option" : ""}</span>
        </div>

        {
            open && (
                <ul className="z-10 mt-1 max-h-48 overflow-y-auto w-full bg-white rounded-md shadow-lg">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input-field w-full"
                        />
                    </div>
                {
                    filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => toggleSelect(option)}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                    selected.includes(option) ? "bg-gray-100 font-semibold" : ""
                                }`}
                            >
                            {option}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-400">No results found</li>
                    )
                }
                </ul>
            )
        }
        </div>
    )
}

export default MultiDropdownSelector;