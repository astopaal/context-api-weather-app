import { createContext, useState, useContext, useEffect } from "react";
import GetWeatherData from "../utils/GetWeatherData";
import { useLocation } from "./LocationContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);

  const { latitude, longitude } = useLocation();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weather = await GetWeatherData(latitude, longitude);
      setWeatherData([weather]);
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  const weatherValues = { weatherData, setWeatherData };

  return (
    <WeatherContext.Provider value={weatherValues}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
