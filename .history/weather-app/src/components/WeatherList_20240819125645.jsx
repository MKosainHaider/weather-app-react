import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const API_KEY = "397a3c1468c2cbe1a8784c7b6a3ba8e8";

function WeatherList({ city }) {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          );
          const dailyData = response.data.list.filter((reading) =>
            reading.dt_txt.includes("12:00:00")
          );
          setWeatherData(dailyData);
          setCurrentWeather(dailyData[0]); // Highlight the current weather
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeather();
    }
  }, [city]);

  if (!city) return null;

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
