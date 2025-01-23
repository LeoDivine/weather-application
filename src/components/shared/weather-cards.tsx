import React from "react";
import TempFormatter from "./temp-formatter";

export default function WeatherCard({
  location,
  temperature,
}: WeatherCardProps) {
  return (
    <div className=" px-[20px] py-[10px] w-full rounded-[10px] bg-[#333333a0]">
      <p className="text-[30px]">{location}</p>
      <TempFormatter value={temperature} />
    </div>
  );
}
