'use client';
import React from "react";
import dynamic from "next/dynamic";
import { genralStore } from "@/zustand/generalStore";

type DashboardRevenueProps = {
  style?: string
  type?: string
}

const ChartBox = dynamic(() => import("../ChartBox"), {
  ssr: false,
});

const UserByCountryChart = dynamic(() => import("../UserByCountryChart"), {
  ssr: false,
});

const DashboardRevenue = ({style, type}:DashboardRevenueProps) => {
  const data = genralStore((state) => state.data);
  return (
    <div className={`bod-grey dashboard-rev rounded-[.5em] ${style == 'two' ? 'two' : ''}`}>
      {
        type == "countries" ? (
          <div>
            <p className="color-grey-text font-semibold">Top Engagements</p>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="color-grey-text font-semibold">Revenue</p>
              <h2 className="title-3">${Number(data?.total_revenue).toLocaleString()}</h2>
            </div>
            {/* <div className="flex items-center gap-2 bod-grey px-2 rounded-[.3em]">
              <p className="text-[.9rem]">2024</p>
              <Image
                aria-hidden
                src="/assets/images/arrow-down.png"
                alt="Colearn Logo"
                width={16}
                height={16}
                className="object-contain"
              />
            </div> */}
          </div>
        )
      }

      <div>
        {
          type == "countries" ? (
            <UserByCountryChart />
          ) : (
            <ChartBox />
          )
        }
      </div>

    </div>

  )
}

export default DashboardRevenue