import TempFormatter from "@/components/shared/temp-formatter";
import { getWeatherInfo } from "@/lib/controllers/weather-controller";
import {
  Calendar,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudRainIcon,
  CloudRainWind,
  CloudSun,
  Cloudy,
  Droplet,
  MapPinIcon,
  RefreshCwOff,
  Shell,
  Snowflake,
  Sun,
  SunIcon,
  Thermometer,
  Waves,
  WindArrowDown,
  WindIcon,
} from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import NotFound from "../not-found";

export default async function InfoPage({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const date = new Date();
  const query = (await params).query;
  const decodedParams = decodeURI(query);
  const weatherInfo = await getWeatherInfo(decodedParams);

  if (!weatherInfo) {
    return <NotFound />;
  }

  // console.log(weatherInfo);
  return (
    <div className=" text-[#fff]">
      <div className="  flex items-center gap-6 justify-center ">
        <span className=" items-center  gap-1 flex flex-row">
          <MapPinIcon className="w-5 h-5" />
          <p className=" text-[12px]">{weatherInfo?.name}</p>
        </span>
        <span className="items-center  gap-1 flex flex-row">
          <Calendar className="w-5 h-5" />
          <p className=" text-[12px]">{date.toDateString()}</p>
        </span>
      </div>
      <div className=" lg:gap-0 mt-[20px] gap-[60px] lg:justify-between flex-col lg:flex-row flex items-center">
        <div className=" lg:text-left text-center">
          <TempFormatter
            className="  text-[100px]"
            value={weatherInfo.main.temp}
          />
          <p className=" capitalize text-[30px]">
            {weatherInfo.weather[0].description}
          </p>
          <div className=" mt-[10px] flex gap-7">
            <div className="">
              <span className=" flex items-center gap-2 mt-[10px] ">
                <WindIcon />
                <p>Wind</p>
              </span>
              <p className="text-[25px]">{weatherInfo.wind.speed} mp/h</p>
            </div>
            <div className="">
              <span className=" flex items-center gap-2 mt-[10px] ">
                <Droplet />
                <p>Humidity</p>
              </span>
              <p className="text-[25px]">{weatherInfo.main.humidity}%</p>
            </div>
          </div>
        </div>
        <div className=" lg:pt-[200px]">
          {weatherInfo.weather[0].description === "clear sky" ? (
            <SunIcon className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "few clouds" ? (
            <CloudSun className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "scattered clouds" ? (
            <Cloud className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "broken clouds" ||
            (weatherInfo.weather[0].id > 800 &&
              weatherInfo.weather[0].id <= 804) ? (
            <Cloudy className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "shower rain" ? (
            <CloudRain className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "rain" ||
            (weatherInfo.weather[0].id >= 500 &&
              weatherInfo.weather[0].id <= 531) ? (
            <CloudRainWind className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "thunderstorm" ? (
            <CloudLightning className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "snow" ||
            (weatherInfo.weather[0].id > 600 &&
              weatherInfo.weather[0].id <= 622) ? (
            <Snowflake className="w-[190px] h-[190px]" />
          ) : weatherInfo.weather[0].description === "mist" ||
            (weatherInfo.weather[0].id >= 701 &&
              weatherInfo.weather[0].id <= 781) ? (
            <CloudFog className="w-[190px] h-[190px]" />
          ) : (
            <RefreshCwOff className="w-[190px] h-[190px]" />
          )}
        </div>
        <div className=" p-[20px] lg:w-[250px] w-full flex flex-col gap-4 rounded-[10px] border border-[#adadad] bg-[#333333be] ">
          <span className="flex gap-2 items-center">
            <WindArrowDown />
            <p>Pressure: </p>
            <p>{weatherInfo.main.pressure} hPa</p>
          </span>
          <span className="flex gap-2 items-center">
            <Thermometer />
            <p>Feels Like: </p>
            <TempFormatter value={weatherInfo.main.feels_like} />
          </span>
          <span className="flex gap-2 items-center">
            <Waves />
            <p>Sea Level: </p>
            <p>{weatherInfo.main.sea_level} atm</p>
          </span>
          <span className="flex gap-2 items-center">
            <Shell />
            <p>Ground Level: </p>
            <TempFormatter value={weatherInfo.main.grnd_level} />
          </span>
        </div>
      </div>
    </div>
  );
}
