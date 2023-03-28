const GetWeatherData = async (lat, lon) => {
  console.log(lat, "---",  lon)
  
  //parametre olarak aldığı lat ve lon değerlerine göre api'ye istek atar ve response'u json formatında returnler
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cc7f54f9ceffd73110009f0a9a23c815&units=metric`);
  const result = await response.json();
  return result;
};

export default GetWeatherData;
