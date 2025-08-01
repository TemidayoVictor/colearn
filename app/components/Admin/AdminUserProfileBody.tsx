'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import AccountAbout from "../Instructors/AccountAbout";
import AccountCareer from "../Instructors/AccountCareer";
import DashboardPerformance from "../Instructors/DashboardPerformance";
import DashboardTopCoursesTable from "../Instructors/DashboardTopCoursesTable";
import { useParams } from "next/navigation";
import { get_user_details } from "@/services/admin";
import { showErrorToast } from "@/utils/toastTypes";
import { useAuthAdmin } from "@/hooks/useAuth";
import { genralStore } from "@/zustand/generalStore";
import { courseStore } from "@/zustand/courseStore";
import { useRouter } from "next/navigation";
import { User } from "@/app/Types/types";
import Loader from "../Loader";
import { Instructor } from "@/app/Types/types";
import AccountModal from "../Instructors/AccountModal";
import AccountInfo from "../Instructors/AccountInfo";

type AdminuserProfileBodyProps = {
    type?: string
}

const AdminuserProfileBody = ({type}: AdminuserProfileBodyProps) => {
    const params = useParams();
    const userId = params?.user as string;

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true)

    const [user, setUser] = useState<User | null>(null);

    const [selectedTab, setSelectedTab] = useState<string>('');

    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);

    const newUpdate = courseStore((state) => state.newUpdate);

    const openModalTrigger = (key:string, item:Instructor | undefined) => {
        if(!item) return
        genralStore.getState().setInstructor(item);
        setShowModal(key);
    }

    function formatDateTime(datetime: string | undefined): string {
        if(!datetime) return 'N/A';
        const date = new Date(datetime);
      
        const day = date.getDate(); // 3
        const month = date.toLocaleString('default', { month: 'long' }); // June
        const year = date.getFullYear(); // 2025
        const time = date.toLocaleTimeString('default', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }); // 11:41 AM
      
        return `${day} ${month}, ${year} · ${time}`;
    }
    
    useEffect(() => {
        if(type == 'management') {
            setSelectedTab('overview')
        }

        else {
            setSelectedTab('personal')
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            setLoading(true)
            await useAuthAdmin(router); // ✅ valid usage
            
            try {
                const response = await get_user_details(userId);
                
                if (response.success) {
                    // save state globally
                    genralStore.getState().setUser(response.data.user);
                    genralStore.getState().setData(response.data.data);
                    genralStore.getState().setInstructor(response.data.instructor);

                    // save state on page
                    setUser(response.data.user);
                } 
    
                else {
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch(error: any) {
                showErrorToast('Something unexpected happened')
                console.log(error)
            }
            
            courseStore.getState().setNewUpdate('reset');
            closeModal();
            setLoading(false);
        };
        init();

    }, [newUpdate]);

    if (loading) return <Loader />

    return (
        <div className="">
            <div className="container-3">
                <div>
                    <Link href='/' className="flex items-center gap-2 cursor-pointer">
                        <div>
                            <Image
                                aria-hidden
                                src="/assets/images/left-arrow.png"
                                alt="Colearn Logo"
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[.9rem] font-semibold">Back</p>
                    </Link>
                </div>

                <div className="res-flex items-start justify-between mt-4 gap-4">
                    <div className="res-flex items-start gap-2">
                        <div className="res-box">
                            <Image
                                aria-hidden
                                src={user?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${user?.profile_photo}` : "/assets/images/course-img-2.png"}
                                alt="Colearn Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />

                            <Image
                                aria-hidden
                                src="/assets/images/dots-big.png"
                                alt="Colearn Logo"
                                width={24}
                                height={24}
                                className="object-contain mobile"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="top flex items-center gap-4">
                                <p className="text-[.9rem] font-bold"> {user?.first_name} {user?.last_name} </p>
                                <div className="flex gap-2">
                                    <span className="badge normal capitalize">
                                        {user?.type}
                                    </span>
                                    {
                                        user?.profile_progress == 'completed' ? (
                                            <span className="badge completed">
                                                Complete
                                            </span>
                                        ) : (
                                            <span className="badge ongoing">
                                                Pending
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="bottom flex items-center gap-4">
                                <div>
                                    <p className="text-[.7em] color-grey-text">Country</p>
                                    {
                                        user?.type == 'instructor' ? (
                                            <p className="text-[.9rem]"> {user?.instructor?.country} </p>
                                        ) : (
                                            <p className="text-[.9rem]"> {user?.student?.country} </p>
                                        )
                                    }
                                </div>
                                
                                <div>
                                    <p className="text-[.7em] color-grey-text">Date Joined</p>
                                    <p className="text-[.9rem]"> {formatDateTime(user?.created_at)} </p>
                                </div>

                                <div>
                                    <p className="text-[.7em] color-grey-text">Wallet Balance</p>
                                    <p className="text-[.9rem]">${user?.wallet?.balance || 0} </p>
                                </div>
                            </div>

                            {
                                type == 'management' ? (
                                    <div className="flex gap-2">
                                        <button className="btn btn-primary-fill" onClick={() => openModal("credit-wallet")}>Credit Wallet</button>
                                        <button className="btn error two" onClick={() => openModal("debit-wallet")}>Debit Wallet</button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <button className="btn btn btn-success tw" onClick={() => openModalTrigger("approve-consultant", user?.instructor)}>Approve</button>
                                        <button className="btn error two" onClick={() => openModalTrigger("decline-consultant", user?.instructor)}>Decline</button>
                                    </div>
                                )
                            }

                        </div>

                        {
                            showModal && 
                            <AccountModal modalType={showModal} modalClose={closeModal}/>
                        }

                    </div>

                    <div className="flex gap-2 items-center">
                        <Image
                            aria-hidden
                            src="/assets/images/dots-big.png"
                            alt="Colearn Logo"
                            width={24}
                            height={24}
                            className="object-contain desktop"
                        />
                        <button className="btn btn-success">Verify User</button>
                    </div>
                </div>
            </div>
            <div className="container-3 admin-profile-body">
                <div className="in-nav admin flex items-center justify-between">
                    <div className="in-nav two scrollable">
                        {
                            type == 'management' &&
                            <span className={`in-nav-link admin  ${selectedTab == 'overview' ? 'active' : ''}`} onClick={() => setSelectedTab('overview')}> <span>Overview</span></span>
                        }
                        <span className={`in-nav-link admin  ${selectedTab == 'personal' ? 'active' : ''}`} onClick={() => setSelectedTab('personal')}> <span>Personal Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'professional' ? 'active' : ''}`} onClick={() => setSelectedTab('professional')}> <span>Professional Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'education' ? 'active' : ''}`} onClick={() => setSelectedTab('education')}> <span>Educational Information</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'video' ? 'active' : ''}`} onClick={() => setSelectedTab('video')}> <span>Intro'd Video</span></span>
                        <span className={`in-nav-link admin  ${selectedTab == 'decline' ? 'active' : ''}`} onClick={() => setSelectedTab('decline')}> <span>Reason for Decline</span></span>
                    </div>
                </div>

                <div className="mt-[1em]">
                    {
                        selectedTab == 'overview' &&
                        <div>
                            <DashboardPerformance />
                            <div className="spacing-inter">
                                <DashboardTopCoursesTable type="instructor-view"/>
                            </div>
                        </div>
                    }

                    {
                        selectedTab == 'personal' &&
                        <AccountAbout type="admin" />
                    }

                    {
                        selectedTab == 'professional' &&
                        <AccountCareer type="admin" />
                    }

                    {
                        selectedTab == 'education' &&
                        <AccountInfo type='education' />
                    }

                    {
                        selectedTab == 'video' &&
                        <AccountInfo type='video' />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminuserProfileBody