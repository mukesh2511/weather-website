import React, { useEffect, useState } from "react";
import "./style.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import BlurOnIcon from "@mui/icons-material/BlurOn";
const WeatherCard = ({ tempData }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    country,
    sunset,
    speed,
  } = tempData;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState(<WbCloudyIcon className="iconSize iconColor" />);
          break;

        case "Haze":
          setWeatherState(<CloudQueueIcon className="iconSize iconColor" />);
          break;

        case "Clear":
          setWeatherState(<FilterDramaIcon className="iconSize iconColor " />);
          break;

        case "Mist":
          setWeatherState(<BlurOnIcon className="iconSize iconColor" />);
          break;

        default:
          setWeatherState(<WbSunnyIcon className="iconSize iconColor " />);
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="main-container">
        <div className="weatherIcon">{weatherState} </div>
        <div className="weather-container">
          <div className="weatherInfo">
            <div className="temperature">
              <span>{temp}&deg;</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name},{country}
              </div>
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="down-container">
          <div className="section">
            <div className="icon-section">
              <WbTwilightIcon className="iconColor" />
            </div>
            <div className="info-section">
              <p className="info">
                {timeStr} pm <br />
                Sunset
              </p>
            </div>
          </div>
          <div className="section">
            <div className="icon-section">
              <OpacityIcon className="iconColor" />
            </div>
            <div className="info-section">
              <p className="info">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="section">
            <div className="icon-section">
              <ThunderstormIcon className="iconColor" />
            </div>
            <div className="info-section">
              <p className="info">
                {pressure} <br />
                Pressure
              </p>
            </div>
          </div>
          <div className="section">
            <div className="icon-section">
              <WindPowerIcon className="iconColor" />
            </div>
            <div className="info-section">
              <p className="info">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
