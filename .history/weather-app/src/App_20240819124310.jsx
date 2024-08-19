import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./components/WeatherList";

const API_KEY = "397a3c1468c2cbe1a8784c7b6a3ba8e8";
const CITY = "London";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&cnt=5&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data.list);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        5-Day Weather Forecast
      </h1>
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default App;
