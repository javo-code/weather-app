import React, { useEffect, useState } from 'react';
import WeatherForm from '../weatherForm/WeatherForm';
import WeatherMainInfo from '../weatherMainInfo/WeatherMainInfo';

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();//a estar vacio, renderizara la ciudad por defecto => "london".
  }, []);
  
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeather(json);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }


  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  // Agrega este console.log para depurar la estructura de datos
  console.log(weather);

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div className="info">
        <WeatherMainInfo weather={weather} />
      </div>
    </div>
  );
}
