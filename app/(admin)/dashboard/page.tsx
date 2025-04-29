"use client";
import { Select } from "antd";
import Image from "next/image";
import React from "react";
import Bird from "../../../assets/img/bird.svg";
import Egg from "../../../assets/img/egg.svg";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function page() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mb-3">
        <h1 className="font-bold text-xl">DASHBOARD</h1>
        <Select
          defaultValue="thisMonth"
          style={{ width: 120 }}
          // onChange={handleChange}
          options={[{ value: "thisMonth", label: "This Month" }]}
        />
      </div>
      <div className="w-full flex flex-row gap-5">
        <div className="w-[24%] bg-white rounded-2xl px-4 py-3 flex flex-col gap-2">
          <Image src={Bird} alt="Bird" />
          <label className="text-gray-500">Total Broilers</label>
          <h3 className="font-semibold text-xl">29,435</h3>
          <div className="flex flex-row items-center">
            <label className="bg-green-50 p-1 rounded-xl mr-2 text-[0.8rem] text-green-400">
              +0.32%
            </label>
            <h4 className="text-gray-500">Higher than last month</h4>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-2xl px-4 py-3 flex flex-col gap-2">
          <Image src={Bird} alt="Bird" />
          <label className="text-gray-500">Total Spent layer</label>
          <h3 className="font-semibold text-xl">29,435</h3>
          <div className="flex flex-row items-center">
            <label className="bg-red-50 p-1 rounded-xl mr-2 text-[0.8rem] text-red-400">
              -0.32%
            </label>
            <h4 className="text-gray-500">Less than last month</h4>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-2xl px-4 py-3 flex flex-col gap-2">
          <Image src={Egg} alt="Bird" />
          <label className="text-gray-500">Total Crates of eggs</label>
          <h3 className="font-semibold text-xl">29,435</h3>
          <div className="flex flex-row items-center">
            <label className="bg-green-50 p-1 rounded-xl mr-2 text-[0.8rem] text-green-400">
              +0.32%
            </label>
            <h4 className="text-gray-500">Higher than last month</h4>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-2xl px-4 py-3 flex flex-col gap-2">
          <Image src={Bird} alt="Bird" />
          <label className="text-gray-500">Total whole Chicken</label>
          <h3 className="font-semibold text-xl">29,435</h3>
          <div className="flex flex-row items-center">
            <label className="bg-red-50 p-1 rounded-xl mr-2 text-[0.8rem] text-red-400">
              -0.32%
            </label>
            <h4 className="text-gray-500">Less than last month</h4>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-4 mt-10 rounded-2xl">
        <div className="w-full flex flex-row justify-between items-center mb-3">
          <h1 className="font-bold text-sm">Output</h1>
          <Select
            defaultValue="TotalBroilers"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[{ value: "TotalBroilers", label: "Total Broilers" }]}
          />
        </div>
        <div className="w-full">
          <Line options={options} data={data} />;
        </div>
      </div>
    </div>
  );
}

export default page;
