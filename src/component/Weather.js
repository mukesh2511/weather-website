import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchedData, setSearchedData] = useState("mumbai");
  const [tempData, setTempData] = useState("{}");
  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedData}&units=metric&appid=694c0b7914374e022dd1df808ab56db3`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main; //data.main.temp=temp
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };
      setTempData(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            id="search"
            placeholder="search..."
            className="searchTerm"
            autoFocus
            value={searchedData}
            onChange={(e) => setSearchedData(e.target.value)}
          />
          <button className="searchbtn" type="button" onClick={getWeatherData}>
            search
          </button>
        </div>
        <WeatherCard tempData={tempData} />
      </div>
    </>
  );
};

export default Weather;
