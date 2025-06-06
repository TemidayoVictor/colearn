'use client';
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "USA", "UK"];
const userCounts = [450, 200, 300, 150, 220, 100, 80]; // sample data

const series = [
  {
    name: "Users",
    data: userCounts,
  },
];

const options: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: countries,
    title: {
      text: "Number of Users",
    },
  },
  colors: ["#3B82F6"], // Tailwind blue-500
  tooltip: {
    enabled: true,
    y: {
      formatter: (val) => `${val} users`,
    },
  },
  grid: {
    borderColor: "#e0e0e0",
  },
};

const UserByCountryChart = () => {
  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default UserByCountryChart;
