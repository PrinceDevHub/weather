import React from "react";

function InputComponent({ location, setLocation, fetchWeatherData }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeatherData();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
    </div>
  );
}

export default InputComponent;
