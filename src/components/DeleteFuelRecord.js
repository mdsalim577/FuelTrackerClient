// src/components/DeleteFuelRecord.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteFuelRecord = () => {
  const [recordId, setRecordId] = useState(0);

  const handleChange = (e) => {
    setRecordId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5000/api/v1/vehicle/${recordId}`);
      console.log('Record deleted successfully');
    } catch (error) {
      console.error('Error deleting record', error);
    }
  };

  return (
    <div>
      <h2>Delete Fuel Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Record ID:</label>
        <input type="number" name="recordId" onChange={handleChange} required />
        <button type="submit">Delete Record</button>
      </form>
    </div>
  );
};

export default DeleteFuelRecord;
