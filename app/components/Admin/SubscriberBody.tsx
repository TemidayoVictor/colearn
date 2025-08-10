'use client';
import React, {useState} from "react";
import { genralStore } from "@/zustand/generalStore";
import EmptyPage from "../EmptyPage";

const SubscriberBody = () => {
    const subscribers = genralStore((state) => state.subscribers)

    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).format(date);
    };

    return (
        <div className="mt-4">
            <div className="table-container mt-2">
                {
                    (subscribers ?? []).length > 0 ? (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Email</th>
                                        <th>Date Subscribed</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        subscribers.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item?.email}</td>
                                                <td>{formatDate(item.created_at)}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <EmptyPage image="/assets/images/empty-image.png" header="No Subscriber" content="No subscriber found" imageWidth={400} imageHeight={240}/>
                        </div>
                    )
                }

                
            </div>

        </div>
    )
}

export default SubscriberBody