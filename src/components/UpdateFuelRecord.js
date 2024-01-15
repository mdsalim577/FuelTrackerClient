import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateFuelRecord = () => {
  const [record, setRecord] = useState({
    id: 0,
    vehicleNumber: '',
    date: new Date(),
    fuelAmount: 0,
    price: 0,
    name: '',
    fuelType: null, // Set default fuel type
  });

  const fuelTypeOptions = [
    { value: 'Petrol', label: 'Petrol' },
    { value: 'Diesel', label: 'Diesel' },
    // Add other fuel types if needed
  ];

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleFuelTypeChange = (selectedOption) => {
    setRecord({ ...record, fuelType: selectedOption });
  };

  const handleDateChange = (date) => {
    setRecord({ ...record, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/v1/vehicle/${record.vehicleNumber}/correct`, record);
      console.log('Record updated successfully');
    } catch (error) {
      console.error('Error updating record', error);
    }
  };

  return (
    <div>
      <h2>Update Fuel Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle Number:</label>
        <input type="text" name="vehicleNumber" onChange={handleChange} required />

        <label>Date:</label>
        <DatePicker selected={record.date} onChange={handleDateChange} />

        <label>Fuel Amount:</label>
        <input type="number" name="fuelAmount" onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" onChange={handleChange} required />

        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Fuel Type:</label>
        <Select options={fuelTypeOptions} value={record.fuelType} onChange={handleFuelTypeChange} />

        <button type="submit">Update Record</button>
      </form>
    </div>
  );
};

export default UpdateFuelRecord;
