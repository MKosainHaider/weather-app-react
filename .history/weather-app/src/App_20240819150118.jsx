import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-10 text-center bg-white rounded-lg shadow-lg bg-opacity-90">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          Weather Forecast
        </h1>
        <CityInput onCityChange={setCity} />
        <WeatherList city={city} />
      </div>
    </div>
  );
}

export default App;
