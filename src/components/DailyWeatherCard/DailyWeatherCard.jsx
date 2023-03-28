import React from "react";

const DailyWeatherCard = ({day, img, max, min, weather}) => {
    

    //Bir günün verisini gösteren card component
  return (
    <div className="rounded-md flex flex-col min-w-[100px] p-4">
      <div className="text-center">{day}</div>
      <img alt="weather img" src={img} />
      <div className="flex justify-around ">
        <div>{max}</div>
        <div>{min}</div>
      </div>
    </div>
  );
};

export default DailyWeatherCard;
