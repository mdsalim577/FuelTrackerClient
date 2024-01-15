import React from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';

const { Option } = Select;

const FuelAdd = ({ onFinish }) => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="fuel-form">
      <Row gutter={8}>
        <Col xs={24} sm={12}>
          <Form.Item label="Vehicle Number" name="vehicleNumber" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Date" name="date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={24} sm={12}>
          <Form.Item label="Fuel Amount" name="fuelAmount" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Price" name="price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={24} sm={12}>
          <Form.Item label="Fuel Type" name="fuelType" rules={[{ required: true }]}>
            <Select>
              <Option value="Petrol">Petrol</Option>
              <Option value="Diesel">Diesel</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Record
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FuelAdd;