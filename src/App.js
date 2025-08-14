import React, { useState } from "react";
import axios from "axios";
import InputComponent from "./components/InputComponent";
import WeatherCard from "./components/WeatherCard";
import "./App.css";


function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeatherData() {
    if (!location) return;

    setLoading(true);
    setError("");

    try {
   const response = await axios.get(
  `https://api.weatherapi.com/v1/current.json?key=f4e5abb5d82e47059e175413251408&q=${location}&aqi=no`
);

      setWeatherData(response.data);
    } catch (err) {
      setError("Could not fetch weather data. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>

      <InputComponent
        location={location}
        setLocation={setLocation}
        fetchWeatherData={fetchWeatherData}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
