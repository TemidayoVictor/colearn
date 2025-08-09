import React from "react";
import Image from "next/image";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "../EmptyPage";

const CourseStudents = () => {
    const enrollments = genralStore((state) => state.course?.enrollments)

    function maskEmail(email: string | undefined): string | undefined {
        if(email) {
            const [username, domain] = email.split("@");
            if (username.length <= 3) {
              return `${username[0]}***@${domain}`;
            }
          
            const visiblePart = (username ?? "").slice(0, 4);
            const maskedPart = "*".repeat(username.length - 4);
            return `${visiblePart}${maskedPart}@${domain ?? "domain"}`;
        }
    }
    return (
        <div>
            {
                (enrollments ?? []).length > 0 ? (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>User Email</th>
                                    {/* <th>Progress</th> */}
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    enrollments?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className="flex items-center gap-2">
                                                <Image
                                                    aria-hidden
                                                    src={item?.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item?.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                    alt="Colearn Logo"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain rounded-[50%]"
                                                />
                                                <span className="font-semibold">{maskEmail(item.user?.email)}</span>
                                            </td>
                                            {/* <td>
                                                <div className="flex items-center gap-2 min-w-[8rem]">
                                                    <div className="progress-container">
                                                        <div className="progress-bar" style={{ width: `${index * 10}%` }}></div>
                                                    </div>
                                                    <p className="progress-text">{index * 10}%</p>
                                                </div>
                                                
                                            </td> */}
                                            <td>
                                                {
                                                    item.completed_at != null ? (
                                                        <span className="badge ongoing">Ongoing</span>
                                                    ) : (
                                                        <span className="badge completed">Completed</span>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <EmptyPage image="/assets/images/empty-image.png"  header="No Enrollments" content="No student has enrolled for this course yet" imageWidth={400} imageHeight={240}/>
                    </div>
                )
            }         
        </div>
    )
}

export default CourseStudents;