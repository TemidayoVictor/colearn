'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import AccountModal from "../Instructors/AccountModal";
import { genralStore } from "@/zustand/generalStore";
import { useAdmin } from "@/hooks/useAdmin";
import ButtonLoader from "../buttonLoader";

type AdminVerificationTableProps = {
    type?: string
}

const userLink = (type: string | undefined) => {
    switch (type) {
        case 'verification':
            return 'user-verification/user'
            break;
        case 'management':
            return 'user-management/user'
            break;
        default:
        return '#';
    }
}

const AdminVerificationTable = ({type}: AdminVerificationTableProps) => {
    const {
        search,
        keyword,
        setKeyword,
        buttonLoader,
    } = useAdmin();

    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => {
        setShowModal(key);
    }

    const closeModal = () => setShowModal(null);

    const users = genralStore((state) => state.users)
    const instructors = genralStore((state) => state.instructors)

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
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="w-[100%] color-grey-text text-[.9rem] p-[.3em]"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)} 
                        />
                    </div>
                    <button className="flex gap-2 btn btn-primary-fill" onClick={search}>
                        {/* <Image
                            aria-hidden
                            src="/assets/images/search-light.png"
                            alt="Colearn Logo"
                            width={20}
                            height={20}
                            className="object-contain desktop"
                        /> */}
                        {
                            buttonLoader ? (
                                <ButtonLoader content="" />
                            ) : 
                            
                            (
                                <p>Search</p>                                    
                            )
                        }
                    </button>
                </div>
                {
                    type != 'admin-users' &&
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
                }

                {
                    type == 'admin-users' &&
                    <button className="btn btn-primary-fill" onClick={() => openModal("add-admin")}>Add User</button>
                }
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
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                type == 'verification' ? (
                                    <>
                                        {
                                            instructors.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td className="flex items-center gap-2">
                                                        <Link href={`user-verification/${item.user?.id}`} className="flex gap-2 items-center">
                                                            <Image
                                                                aria-hidden
                                                                src={item.user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                                                alt="Colearn Logo"
                                                                width={24}
                                                                height={24}
                                                                className="object-contain rounded-[50%]"
                                                            />
                        
                                                            <span className="flex flex-col overflow-hidden">
                                                                <span className="text-sm font-semibold text-gray-800 truncate sm:whitespace-normal sm:truncate-0">
                                                                    {item.user?.first_name} {item.user?.last_name}
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </td>
                                                    <td>{item.user?.email}</td>
                                                    <td className="capitalize">{item.user?.type}</td>
                                                    {
                                                        item.user?.profile_progress != 'completed' ? (
                                                            <td>
                                                                <span className="badge ongoing">Pending</span>
                                                            </td>
                                                        ) : (
                                                            <td>
                                                                <span className="badge completed">Active</span>
                                                            </td>
                                                        )
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </>

                                ) : (
                                    <>
                                        {
                                            users.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td className="flex items-center gap-2">
                                                        <Link href={item.profile_progress == 'completed' ? `user-management/${item.id}` : '#'} className="flex gap-2 items-center">
                                                            <Image
                                                                aria-hidden
                                                                src={item.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.profile_photo}` : "/assets/images/course-img-2.png"}
                                                                alt="Colearn Logo"
                                                                width={24}
                                                                height={24}
                                                                className="object-contain rounded-[50%]"
                                                            />
                        
                                                            <span className="flex flex-col overflow-hidden">
                                                                <span className="text-sm font-semibold text-gray-800 truncate sm:whitespace-normal sm:truncate-0">
                                                                    {item.first_name} {item.last_name}
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </td>
                                                    <td>{item.email}</td>
                                                    <td className="capitalize">{item.type}</td>
                                                    {
                                                        item.profile_progress != 'completed' ? (
                                                            <td>
                                                                <span className="badge ongoing">Pending</span>
                                                            </td>
                                                        ) : (
                                                            <td>
                                                                <span className="badge completed">Active</span>
                                                            </td>
                                                        )
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }
        </div>
    )
}

export default AdminVerificationTable