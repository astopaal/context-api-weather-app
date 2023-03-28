import React, { useEffect } from "react";
import { useWeather } from "../../context/WeatherContext";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import { useState } from "react";

//HAVA DURUMU CARDLARINI TUTAN COMPONENT
const WeatherForecast = (props) => {
  const { weatherData } = useWeather(); //hava durumu bilgisi
  const [sevenDays, setSevenDays] = useState([]); //gelen datadan ilk 7 veriyi alır.

  //! Api datası artık ücretli olduğu için ilk 7 data 7 günlük değildir
  //! 3er saatlik aralıklarla 21 saatlik veridir.
  //! Ancak her veri bir güne aitmiş varsayıyoruz

  //bir kart seçili mi
  const [selectedCard, setSelectedCard] = useState(0); // -1: Hiçbiri seçili değil
  let date = new Date(); //mevcut günü tutar

  //yuakrıdaki ilk 7 veriyi ayıran kodlar
  useEffect(() => {
    if (weatherData) {
      setSevenDays(weatherData[0]?.list?.slice(0, 8));
    }
  }, [weatherData]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    //seçilen kartı tutar
  };

  return (
    <div className="flex">
      {/* verileri mapleyip her iterasyonda bir card renderlar */}
      {sevenDays?.map((item, key) => {
        // gün adını ing olarak kısaltır.
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

        //gün adını aldıktan sonra mevcut gün übir sonraki güne geçiriyoruz, ki bir sonraki iterasyonda bir sonraki gün elimizde olsun
        date.setDate(date.getDate() + 1);

        const isSelected = key === selectedCard;
        //iconu datadan alıp url içine yazıyoruz
        const img = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        console.log("İMG  ", img);
        return (
          <span
            key={key}
            onClick={() => handleCardClick(key)}
            className={`transition duration-1000 m-1 ${
              //eğer seçili olma durumu true dönerse border atıyoruz bu durumda tıkladıkça border geliyor
              isSelected ? "border-2 border-gray-400" : ""
            }`}
          >
            <DailyWeatherCard
              img={img}
              day={dayName}
              max={item.main.temp_max}
              min={item.main.temp_min}
              weather={item.weather[0].main}
            />
          </span>
        );
      })}
    </div>
  );
};

export default WeatherForecast;
