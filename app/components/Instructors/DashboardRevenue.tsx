'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ChartBox = dynamic(() => import("../ChartBox"), {
  ssr: false,
});


const DashboardRevenue = () => {
  return (
    <div className="bod-grey dashboard-rev rounded-[.5em]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="color-grey-text font-semibold">Revenue</p>
          <h2 className="title-3">$3,429.45</h2>
        </div>
        <div className="flex items-center gap-2 bod-grey px-2 rounded-[.3em]">
          <p className="text-[.9rem]">2024</p>
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

      <div>
        <ChartBox />
      </div>

    </div>

  )
}

export default DashboardRevenue