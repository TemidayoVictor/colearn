'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";;
import { User } from "@/app/Types/types";
import { genralStore } from "@/zustand/generalStore";

const AccountStudent = () => {
    const userProfile = genralStore((state) => state.user)
    const certifications = userProfile?.enrollments.filter((enrollment) => enrollment.completed_at != null).length
    
    return (
        <div className="student-account">
            <div className="details-sect">
                <Image
                    aria-hidden
                    src={userProfile?.profile_photo ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${userProfile?.profile_photo}` : "/assets/images/course-img-2.png"}
                    alt="Colearn Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-[.3em]"
                />
                <h2 className="font-semibold title-3"> {userProfile?.first_name} {userProfile?.last_name} </h2>
            </div>

            <div className="mt-4">
                <div className="acct-details res">
                    <p className="left">Email Address</p>
                    <p className="right"> {userProfile?.email} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Phone</p>
                    <p className="right">+{userProfile?.country_phone_code} {userProfile?.student?.phone} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Gender</p>
                    <p className="right"> {userProfile?.student?.gender} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Language</p>
                    <p className="right">
                        {
                            Array.isArray(userProfile?.student?.languages)
                            ? userProfile?.student?.languages.join(", ")
                            : JSON.parse(userProfile?.student?.languages || '[]').join(", ")
                        }
                    </p>
                </div>
                <div className="acct-details">
                    <p className="left">Country</p>
                    <p className="right"> {userProfile?.student?.country} </p>
                </div>
                <div className="acct-details">
                    <p className="left">Certifications</p>
                    <p className="right"> {certifications} </p>
                </div>
            </div>
        </div>
    )
}

export default AccountStudent