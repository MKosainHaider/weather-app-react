import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        5-Day Weather Forecast
      </h1>
      <CityInput onCityChange={setCity} />
      <WeatherList city={city} />
    </div>
  );
}

export default App;
