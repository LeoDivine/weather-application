import TempFormatter from "@/components/shared/temp-formatter";
import {
  Calendar,
  CloudLightning,
  CloudRainIcon,
  MapPinIcon,
  Sun,
} from "lucide-react";
import React from "react";

export default function InfoPage() {
  const date = new Date();
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
      <div className=" gap-[300px] flex items-center">
        <div className="">
          <TempFormatter className=" text-[100px]" value="23" />
          <p>Storm with rain</p>
        </div>
        <div className=" pt-[200px]">
          <CloudRainIcon className="w-[180px] h-[180px]" />
        </div>
      </div>
    </div>
  );
}
