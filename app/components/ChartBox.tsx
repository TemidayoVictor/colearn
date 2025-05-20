'use client';
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
  {
    name: "Earnings",
    data: [3000, 4000, 3200, 4500, 5000, 200, 1500, 12000, 1100, 350, 2000, 1200],
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
      formatter: (val) => `₦${val.toLocaleString()}`,
    },
  },
  grid: {
    borderColor: "#e0e0e0",
  },
};

const ChartBox = () => {
  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartBox;
