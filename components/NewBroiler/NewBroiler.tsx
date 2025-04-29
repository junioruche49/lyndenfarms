"use client";
import { DatePicker, Form, Input, Modal, Select } from "antd";
import React from "react";

function NewBroiler({
  isModalOpen,
  handleCancel,
  getData,
}: {
  isModalOpen: boolean;
  handleCancel: () => void;
  getData: () => void;
}) {
  const [form] = Form.useForm();
  // const [startDate, setStartDate] = useState();

  const onSubmit = async () => {
    console.log("got here");
    form.submit();
    // try {
    //   const response = await fetch("/api/saveData", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data: "ebere" }),
    //   });

    //   const result = await response.json();
    //   if (response.ok) {
    //     alert(result.message);
    //   } else {
    //     alert("Failed to save data");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    console.log(values);
    const endDate = new Date(values.endDate);
    const startDate = new Date(values.startDate);
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: Math.random(),
          aveWeight1: values.aveWeight1,
          cellID: values.cellID,
          cycleName: values.cycleName,
          location: values.location,
          moratlityNumber: values.moratlityNumber,
          moratlityRate: values.moratlityRate,
          numberBroilers: values.numberBroilers,
          oldChicks: values.oldChicks,
          penID: values.penID,
          weight1: values.weight1,
          weight2: values.weight2,
          weight3: values.weight3,
          weight4: values.weight4,
          weight5: values.weight5,
          endDate: endDate,
          status: "In Cycle",
          startDate: startDate,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        form.resetFields();
        getData();
        handleCancel();
      } else {
        alert("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  const handleChange = (value: string) => {
    form.setFieldsValue({ location: value });
  };
  const handlePenChange = (value: string) => {
    form.setFieldsValue({ penID: value });
  };
  const handleCellIdChange = (value: string) => {
    form.setFieldsValue({ cellID: value });
  };

  return (
    <Modal
      title="New Broiler Mgt. Cycle"
      open={isModalOpen}
      onOk={onSubmit}
      onCancel={handleCancel}
      // loading={loading}
      className="w-full"
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        className="w-full"
        form={form}
      >
        <div className="flex flex-row flex-wrap w-full">
          <Form.Item label="Start Date" name="startDate" className="w-[48%]">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Location" name="location" className="w-[48%]">
            <Select
              defaultValue="Benin"
              value="Benin"
              style={{ width: 150, marginRight: 20 }}
              className="p-10 mr-4"
              size="large"
              onChange={handleChange}
              options={[
                { value: "PortHarcourt", label: "PortHarcourt" },
                { value: "Benin", label: "Benin" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Pen ID" name="penID" className="w-[48%]">
            <Select
              defaultValue="002"
              value="002"
              style={{ width: 150, marginRight: 20 }}
              className="p-10 mr-4"
              size="large"
              onChange={handlePenChange}
              options={[
                { value: "001", label: "001" },
                { value: "002", label: "002" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cell ID" name="cellID" className="w-[48%]">
            <Select
              defaultValue="404A"
              value="404A"
              style={{ width: 150, marginRight: 20 }}
              className="p-10 mr-4"
              size="large"
              onChange={handleCellIdChange}
              options={[
                { value: "204A", label: "204A" },
                { value: "404A", label: "404A" },
              ]}
            />
          </Form.Item>
        </div>
        <label>INPUT</label>
        <div className="flex flex-row flex-wrap w-full gap-2">
          <Form.Item label="Cycle Name" name="cycleName" className="w-[38%]">
            <Input />
          </Form.Item>
          <Form.Item
            label="Opening Population Day Old Chicks"
            name="oldChicks"
            className="w-[60%]"
          >
            <Input />
          </Form.Item>
        </div>
        <label>HEALTH & PERFORMANCE</label>
        <div className="flex flex-row flex-wrap w-full gap-1">
          <Form.Item label="Weight (kg)" name="weight1" className="w-[19%]">
            <Input placeholder="Week 1" />
          </Form.Item>
          <Form.Item label="Weight (kg)" name="weight2" className="w-[19%]">
            <Input placeholder="Week 2" />
          </Form.Item>
          <Form.Item label="Weight (kg)" name="weight3" className="w-[19%]">
            <Input placeholder="Week 3" />
          </Form.Item>
          <Form.Item label="Weight (kg)" name="weight4" className="w-[19%]">
            <Input placeholder="Week 4" />
          </Form.Item>
          <Form.Item label="Weight (kg)" name="weight5" className="w-[19%]">
            <Input placeholder="Week 5" />
          </Form.Item>
        </div>
        <div className="flex flex-row flex-wrap w-full gap-2">
          <Form.Item
            label="Ave. Weight (kg)"
            name="aveWeight1"
            className="w-[30%]"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Total Moratlity Number"
            name="moratlityNumber"
            className="w-[35%]"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mortality Rate"
            name="moratlityRate"
            className="w-[30%]"
          >
            <Input />
          </Form.Item>
        </div>
        <label>OUTPUT</label>
        <div className="flex flex-row flex-wrap w-full gap-2">
          <Form.Item
            label="Number of Broilers"
            name="numberBroilers"
            className="w-[48%]"
          >
            <Input />
          </Form.Item>
          <Form.Item label="End Date" name="endDate" className="w-[48%]">
            <DatePicker />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default NewBroiler;
