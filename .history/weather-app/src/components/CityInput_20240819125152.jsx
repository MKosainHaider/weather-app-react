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
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 w-64 text-center"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default CityInput;
