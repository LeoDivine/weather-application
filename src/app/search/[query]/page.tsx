import TempFormatter from "@/components/shared/temp-formatter";
import { getWeatherInfo } from "@/lib/controllers/weather-controller";
import {
  Calendar,
  CloudLightning,
  CloudRainIcon,
  Droplet,
  MapPinIcon,
  Shell,
  Sun,
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
      <div className=" flex items-center gap-6 justify-center ">
        <span className=" items-center  gap-1 flex flex-row">
          <MapPinIcon className="w-5 h-5" />
          <p className=" text-[12px]">{weatherInfo?.name}</p>
        </span>
        <span className="items-center  gap-1 flex flex-row">
          <Calendar className="w-5 h-5" />
          <p className=" text-[12px]">{date.toDateString()}</p>
        </span>
      </div>
      <div className=" justify-between flex items-center">
        <div className="">
          <TempFormatter
            className=" text-[100px]"
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
        <div className=" pt-[200px]">
          <CloudRainIcon className="w-[190px] h-[190px]" />
        </div>
        <div className=" p-[20px] w-[250px] flex flex-col gap-4 rounded-[10px] border border-[#adadad] bg-[#333333be] ">
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
