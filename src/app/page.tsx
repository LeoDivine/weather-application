import SearchInput from "@/components/shared/search";
import WeatherCard from "@/components/shared/weather-cards";
import { DUMMYDATA } from "@/lib/const";
import {
  getAllLocation,
  getWeatherInfo,
} from "@/lib/controllers/weather-controller";
import React from "react";

async function Intro() {
  return (
    <div className=" text-secondary ">
      <h1 className=" pb-[20px] text-white text-center text-[40px] font-bold ">
        Weather Forecast
      </h1>

      <SearchInput />
      <div className=" mt-[300px] flex gap-3  ">
        {DUMMYDATA.map((data, index) => (
          <WeatherCard
            key={index}
            location={data.location}
            temperature={data.temperature}
          />
        ))}
      </div>
    </div>
  );
}

export default Intro;
