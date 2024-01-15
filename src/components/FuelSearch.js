import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';

const FuelSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="fuel-search">
      <Input
        placeholder="Search by vehicle number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default FuelSearch;