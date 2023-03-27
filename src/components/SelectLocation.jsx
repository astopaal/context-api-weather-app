import React, { useEffect } from "react";
import { useLocation } from "../context/LocationContext";
import { useWeather } from "../context/WeatherContext";

const SelectLocation = () => {
  let data = require("../assets/cities.json");

  const { latitude, longitude, setLatitude, setlongitude } = useLocation();
  const { weatherData } = useWeather();

  const handleChange = (e) => {
    const _item = data.find((item) => item.name === e.target.value);
    let lat = _item.latitude;
    let lon = _item.longitude;

    setLatitude(lat);
    setlongitude(lon);
  };

  useEffect(() => {
    console.log("lat : ", latitude, "longitude : ", longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    console.log("weather data : ", weatherData);
  }, [weatherData]);

  return (
    <div>
      <form>
        <select onChange={handleChange}>
          {data.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SelectLocation;
