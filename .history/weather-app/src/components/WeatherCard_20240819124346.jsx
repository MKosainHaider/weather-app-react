import React from 'react';

function WeatherCard({ day }) {
  const { dt_txt, main, weather } = day;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-60">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{new Date(dt_txt).toLocaleDateString()}</h2>
      <p className="text-gray-600 mb-1">Temperature: {main.temp}°C</p>
      <p className="text-gray-600">Weather: {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
