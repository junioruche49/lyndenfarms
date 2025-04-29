"use client";
import { Select, Table } from "antd";
import Image from "next/image";
import Bird from "../../../assets/img/bird.svg";
import Egg from "../../../assets/img/egg.svg";
import React, { useEffect, useState } from "react";
import NewBroiler from "@/components/NewBroiler/NewBroiler";
import dayjs from "dayjs";
const dateFormat: string = "YYYY/MM/DD";

const columns = [
  {
    title: "Cycle Name",
    dataIndex: "cycleName",
    key: "cycleName",
  },
  {
    title: "Output",
    dataIndex: "numberBroilers",
    key: "numberBroilers",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Date Start",
    dataIndex: "startDate",
    key: "startDate",
    render: (data: string) => dayjs(data, dateFormat).format(dateFormat),
  },
  {
    title: "Date End",
    dataIndex: "startDate",
    key: "endDate",
    render: (data: string) => dayjs(data, dateFormat).format(dateFormat),
  },
];

function Page() {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleCancel = () => {
    setIsModalOpenEdit(false);
  };

  const openModal = () => {
    setIsModalOpenEdit(true);
  };

  const getData = async () => {
    let newdata;
    fetch("/api/getData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.reverse());
        newdata = data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    return newdata;
    // try {
    //   const response = await fetch("/api/getData", {
    //     method: "GET",
    //   });
    //   const data = await response.json();
    //   return data;
    // } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mb-3">
        <h1 className="font-bold text-xl uppercase">Broiler Management</h1>
        <div className="flex flex-row">
          <Select
            defaultValue="thisMonth"
            style={{ width: 150, marginRight: 20 }}
            className="p-10 mr-4"
            size="large"
            // onChange={handleChange}
            options={[{ value: "thisMonth", label: "This Month" }]}
          />
          <button
            className="bg-blue-500 p-1 px-2 text-white rounded-xl cursor-pointer"
            onClick={openModal}
          >
            + New Cycle
          </button>
        </div>
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
        <Table dataSource={data} columns={columns} />
      </div>
      {isModalOpenEdit && (
        <NewBroiler
          isModalOpen={isModalOpenEdit}
          handleCancel={handleCancel}
          getData={getData}
        />
      )}
    </div>
  );
}

export default Page;
