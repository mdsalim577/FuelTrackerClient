import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';

const { Option } = Select;

const FuelAdd = ({ onFinish }) => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item label="Vehicle Number" name="vehicleNumber" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Date" name="date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item label="Fuel Amount" name="fuelAmount" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Fuel Type" name="fuelType" rules={[{ required: true }]}>
        <Select>
          <Option value="Petrol">Petrol</Option>
          <Option value="Diesel">Diesel</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Record
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FuelAdd;
