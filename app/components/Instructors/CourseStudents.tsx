import React from "react";
import Image from "next/image";

const CourseStudents = () => {
    return (
        <div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>User Email</th>
                            <th>Progress</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1,2,3,4,5,6].map((items, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="flex items-center gap-2">
                                        <Image
                                            aria-hidden
                                            src="/assets/images/avatars.png"
                                            alt="Colearn Logo"
                                            width={24}
                                            height={24}
                                            className="object-contain rounded-[50%]"
                                        />
                                        <span className="font-semibold">favi***mide11@gmail.com</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2 min-w-[8rem]">
                                            <div className="progress-container">
                                                <div className="progress-bar" style={{ width: `${index * 10}%` }}></div>
                                            </div>
                                            <p className="progress-text">{index * 10}%</p>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        <span className="badge completed">Ongoing</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>         
        </div>
    )
}

export default CourseStudents;