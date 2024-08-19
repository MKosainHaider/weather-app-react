import React from "react";
import CityInput from "./components/CityInput";
import WeatherList from "./components/WeatherList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weatherData: [],
      currentWeather: null,
    };
  }

  handleCityChange = (city) => {
    this.setState({ city }, this.fetchWeatherData);
  };

  fetchWeatherData = () => {
    if (this.state.city) {
      const API_KEY = "397a3c1468c2cbe1a8784c7b6a3ba8e8";
      const city = this.state.city;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("12:00:00")
          );
          this.setState({
            weatherData: dailyData,
            currentWeather: dailyData[0],
          });
        })
        .catch((error) => console.error("Error fetching weather data:", error));
    }
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="p-10 text-center bg-white rounded-lg shadow-lg bg-opacity-90">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            5-Day Weather Forecast
          </h1>
          <CityInput onCityChange={this.handleCityChange} />
          <WeatherList
            weatherData={this.state.weatherData}
            currentWeather={this.state.currentWeather}
          />
        </div>
      </div>
    );
  }
}

export default App;
