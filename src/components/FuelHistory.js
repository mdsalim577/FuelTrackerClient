// src/components/FuelHistory.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuelHistory = ({ vehicleNumber }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/vehicle/${vehicleNumber}/history`);
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching fuel history', error);
      }
    };

    fetchHistory();
  }, [vehicleNumber]);

  return (
    <div>
      <h2>Fuel History</h2>
      <ul>
        {history.map((record) => (
          <li key={record.id}>
            {/* Display each field of the record */}
            <p>Vehicle Number: {record.vehicleNumber}</p>
            {/* Display other fields like date, fuelAmount, price, name, and fuelType */}
            <p>Fuel Type: {record.fuelType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuelHistory;
