import React, { useState } from 'react';

function CityInput({ onCityChange }) {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim()) {
      onCityChange(city);
    }
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded-md shadow-sm mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default CityInput;
