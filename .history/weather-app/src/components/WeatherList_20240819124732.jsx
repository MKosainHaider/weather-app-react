import React from 'react';
import WeatherCard from './WeatherCard';

function WeatherList({ weatherData, currentWeather }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {weatherData.map((day, index) => (
        <WeatherCard
          key={index}
          day={day}
          isCurrent={currentWeather && day.dt_txt === currentWeather.dt_txt}
        />
      ))}
    </div>
  );
}

export default WeatherList;
