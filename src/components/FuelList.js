import React from 'react';
import { Table, Button } from 'antd';

const FuelList = ({ data, onEdit, onDelete, onView }) => {
  const columns = [
    { title: 'Vehicle Number', dataIndex: 'vehicleNumber', key: 'vehicleNumber' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
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

  return <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />;
};

export default FuelList;
