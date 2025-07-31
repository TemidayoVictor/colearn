'use client';
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { genralStore } from "@/zustand/generalStore";

const ChartBox = () => {
  const series = [
    {
      name: "Earnings",
      data: genralStore.getState().data?.earnings || [],
    },
  ];
  
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
      width: 1,
      colors: ["#22c55e"], // Green line
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    },
    colors: ["#0E8837"],
    fill: {
      type: "solid",
      colors: ["#E7F5EC"], // Light green fill
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: "#e0e0e0",
    },
  };
  
  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartBox;
