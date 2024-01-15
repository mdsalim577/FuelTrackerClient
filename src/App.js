// src/App.js

import React, { useState } from 'react';
import FuelList from './components/FuelList';
import FuelSearch from './components/FuelSearch';
import FuelAdd from './components/FuelAdd';

const App = () => {
  const [fuelData, setFuelData] =  useState([
    // Dummy record for testing
    {
      vehicleNumber: 'ABC123',
      date: '2022-01-15',
      fuelAmount: 50,
      price: 100,
      fuelType: 'Petrol',
      name: 'John Doe',
    }
  ]);

  const handleSearch = (searchTerm) => {
    // Implement search logic here
    // Set the filtered data in the state
    // For example: setFuelData(filteredData);
  };

  const handleAdd = (values) => {
    // Implement add logic here
    // Update fuelData with the new record
    // For example: setFuelData([...fuelData, values]);
  };

  const handleEdit = (record) => {
    // Implement edit logic here
    console.log('Edit record:', record);
  };

  const handleDelete = (record) => {
    // Implement delete logic here
    console.log('Delete record:', record);
  };

  const handleView = (record) => {
    // Implement view logic here
    console.log('View record:', record);
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Fuel Tracker</h1>
      <FuelSearch onSearch={handleSearch} />
      <FuelList data={fuelData} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
      <FuelAdd onFinish={handleAdd} />
    </div>
  );
};

export default App;
