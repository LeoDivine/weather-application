import SearchInput from "@/components/shared/search";
import WeatherCard from "@/components/shared/weather-cards";
import { DUMMYDATA } from "@/lib/const";
import { getWeatherInfo } from "@/lib/controllers/weather-controller";
import React from "react";

async function Intro() {
  // const getAll = await getAllLocation();
  return (
    <div className=" text-secondary  ">
      <h1 className=" pb-[20px] text-white text-center  text-[30px] lg:text-[40px] font-bold ">
        Weather Forecast
      </h1>

      <SearchInput />
      <div className=" mt-[300px] flex sm:flex-row flex-col gap-3  ">
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
