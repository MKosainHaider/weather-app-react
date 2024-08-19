import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherList({ weatherData }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {weatherData.map((day, index) => (
        <WeatherCard key={index} day={day} />
      ))}
    </div>
  );
}

export default WeatherList;
