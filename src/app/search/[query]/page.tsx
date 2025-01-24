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
import React from "react";

export default async function InfoPage() {
  const date = new Date();
  const weatherInfo = await getWeatherInfo("Dubai");
  console.log(weatherInfo);
  return (
    <div className=" text-[#fff]">
      <div className=" flex items-center gap-6 justify-center ">
        <span className=" items-center  gap-1 flex flex-row">
          <MapPinIcon className="w-5 h-5" />
          <p className=" text-[12px]">Dubai</p>
        </span>
        <span className="items-center  gap-1 flex flex-row">
          <Calendar className="w-5 h-5" />
          <p className=" text-[12px]">{date.toDateString()}</p>
        </span>
      </div>
      <div className=" justify-between flex items-center">
        <div className="">
          <TempFormatter className=" text-[100px]" value="23" />
          <p className=" text-[30px]">Storm with rain</p>
          <div className=" mt-[30px] flex gap-7">
            <div className="">
              <span className=" flex items-center gap-2 mt-[10px] ">
                <WindIcon />
                <p>Wind</p>
              </span>
              <p className="text-[25px]">20 mp/h</p>
            </div>
            <div className="">
              <span className=" flex items-center gap-2 mt-[10px] ">
                <Droplet />
                <p>Humidity</p>
              </span>
              <p className="text-[25px]">12 %</p>
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
            <p>1010 hPa</p>
          </span>
          <span className="flex gap-2 items-center">
            <Thermometer />
            <p>Feels Like: </p>
            <TempFormatter value="32" />
          </span>
          <span className="flex gap-2 items-center">
            <Waves />
            <p>Sea Level: </p>
            <p>1010 atm</p>
          </span>
          <span className="flex gap-2 items-center">
            <Shell />
            <p>Ground Level: </p>
            <TempFormatter value="32" />
          </span>
        </div>
      </div>
    </div>
  );
}
