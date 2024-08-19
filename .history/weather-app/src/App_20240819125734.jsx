import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Weather Forecast
        </h1>
        <CityInput onCityChange={setCity} />
        <WeatherList city={city} />
      </div>
    </div>
  );
}

export default App;
