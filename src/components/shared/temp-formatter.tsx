"use client"
import { usePathname } from "next/navigation";
import React from "react";

export default function TempFormatter({
  className,
  value,
}: {
  className?: string;
  value: number;
  }) {
  const pathname = usePathname()
  return (
    <span
      className={`${
        pathname === "/" ? "justify-start flex " : "flex justify-center lg:justify-start flex-row"
      }`}
    >
      {/*Kelvin to celsius*/}
      <p className={className}>{(value - 273.15).toFixed()}</p>{" "}
      <p className={!className ? "text-[13px]" : "text-[50px]"}>°C</p>
    </span>
  );
}
