import React from "react";

function WeatherCard({ weatherData }) {
  const { location, current } = weatherData;

  return (
    <div className="weather-card">
      <h2>
        {location.name}, {location.country}
      </h2>
      <img src={current.condition.icon} alt={current.condition.text} />
      <p>{current.condition.text}</p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind: {current.wind_kph} kph</p>
    </div>
  );
}

export default WeatherCard;
