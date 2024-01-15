import React from 'react';
import { Table, Button, Row, Col } from 'antd';

const FuelList = ({ data, onEdit, onDelete, onView }) => {
  const columns = [
    { title: 'Vehicle Number', dataIndex: 'vehicleNumber', key: 'vehicleNumber' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'FuelType', dataIndex: 'fuelType', key: 'fuelType' },
    { title: 'Fuel Amount', dataIndex: 'fuelAmount', key: 'fuelAmount' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <div>
          <Button type="primary" onClick={() => onView(record)}>
            View
          </Button>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => onDelete(record)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
      </Col>
    </Row>
  );
};

export default FuelList;