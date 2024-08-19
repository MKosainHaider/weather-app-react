import React from 'react';

function WeatherCard({ day, isCurrent }) {
  const { dt_txt, main, weather } = day;
  const date = new Date(dt_txt);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 w-60 ${isCurrent ? 'border-4 border-blue-500' : ''}`}>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{dayName}</h2>
      <p className="text-sm text-gray-500 mb-2">{date.toLocaleDateString()}</p>
      <p className="text-gray-600 mb-1">Temperature: {main.temp}°C</p>
      <p className="text-gray-600">Weather: {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
