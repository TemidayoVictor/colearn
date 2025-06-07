import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdminVerificationTable = () => {
    return (
        <div className="spacing-inter">
            <div className="res-flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-2 bg-white py-[.3em] px-1 rounded-[.3rem] bod-grey courses-search-lenght two">
                    <Image
                        aria-hidden
                        src="/assets/images/search-normal-2.png"
                        alt="Colearn Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <div className="w-[100%]">
                        <input type="text" placeholder="Search" className="w-[100%] color-grey-text text-[.9rem] p-[.3em]" />
                    </div>
                    <button className="btn btn-small btn-primary-fill">Search</button>
                </div>
                <div className="flex items-center gap-2 bod-grey px-2 py-[.3em] rounded-[.3em]">
                    <p className="text-[.9rem]">Filter</p>
                    <Image
                        aria-hidden
                        src="/assets/images/arrow-down.png"
                        alt="Colearn Logo"
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="bod-grey p-[1em] rounded-[.5em] spacing-inter">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Country</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3,4,5,6].map((items, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="flex items-center gap-2">
                                            <Link href="user-verification/user" className="flex gap-2 items-center">
                                                <Image
                                                    aria-hidden
                                                    src="/assets/images/avatars.png"
                                                    alt="Colearn Logo"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain rounded-[50%]"
                                                />
            
                                                <span className="flex flex-col overflow-hidden">
                                                    <span className="text-sm font-semibold text-gray-800 truncate sm:whitespace-normal sm:truncate-0">
                                                        Favi Ayomide
                                                    </span>
                                                </span>
                                            </Link>
                                        </td>
                                        <td>faviayomide11@gmail.com</td>
                                        <td>Instructor</td>
                                        <td>Nigeria</td>
                                        <td>
                                            <span className="badge completed">Active</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminVerificationTable