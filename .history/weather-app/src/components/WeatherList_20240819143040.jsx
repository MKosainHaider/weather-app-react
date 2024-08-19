import React, { Component } from "react";
import WeatherCard from "./WeatherCard";

const API_KEY = "397a3c1468c2cbe1a8784c7b6a3ba8e8";

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "London", // You can set the city directly here
      weatherData: [],
      currentWeather: null,
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevState) {
    if (prevState.city !== this.state.city) {
      this.fetchWeather();
    }
  }

  async fetchWeather() {
    const { city } = this.state;

    if (city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("12:00:00")
        );

        this.setState({
          weatherData: dailyData,
          currentWeather: dailyData[0], // Highlight the current weather
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }

  render() {
    const { city, weatherData, currentWeather } = this.state;

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
}

export default WeatherList;
