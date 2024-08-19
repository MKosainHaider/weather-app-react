import React, { useState } from "react";

function CityInput({ onCityChange }) {
  const [city, setCity] = useState("");

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
          className="w-64 p-3 mb-4 text-center border border-gray-300 border-solid rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default CityInput;
