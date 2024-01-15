import React, { useState } from 'react';
import { Input, Button } from 'antd';

const FuelSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <Input
        placeholder="Enter vehicle number"
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
