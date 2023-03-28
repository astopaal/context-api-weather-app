import React, { useEffect, useState } from "react";
import { useLocation } from "../../context/LocationContext";
import { useWeather } from "../../context/WeatherContext";

const SelectLocation = () => {

  //sehirlerin adını ve koordinatlarını jsonda tutuyoruz
  let data = require("../../assets/cities.json");

  const { setLatitude, setlongitude } = useLocation(); //uselocationdan aldığımız koordinat state'leri
  const { weatherData } = useWeather(); //weather contextten gelen hava durumu bilgisi

  const [navigationCityName, setNavigationCityName] = useState(); //konum izni varsa tutulacak şehir ismi

  const handleChange = (e) => { //bir şehir seçildiğinde gerçekleşen işlemler
    const _item = data.find((item) => item.name === e.target.value);
    let lat = _item.latitude;
    let lon = _item.longitude;

    setLatitude(lat);
    setlongitude(lon);
  };

  useEffect(() => { // havadurumu bilgisi değiştiğinde şehir adını değiştirir
    //bunu handlechange içinde yapmama sebebim ise
    //konum izni varsa otomatik olarak hava durumu bilgisi geldiğinde de şehir adını yakalamak
    //aynı şeyi, yuakrıda konum varsa item.city.name oalrak değiştir şeklinde de yapabiliriz
    console.log("weather data : ", weatherData);
    if (weatherData.length > 0) {
      setNavigationCityName(weatherData[0].city.name);
    }
  }, [weatherData]);

  return (
    <div className="border border-gray-500 p-4 rounded-md">
      <form >

        {/* select içinde şehirleri listeler */}
        <select onChange={handleChange} className="min-w-[150px] ">
          <option value="" disabled selected hidden>
            {navigationCityName}
          </option>
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
