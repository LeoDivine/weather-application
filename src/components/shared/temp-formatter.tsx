import React from "react";

export default function TempFormatter({
  className,
  value,
}: {
  className?: string;
  value: number;
}) {
  return (
    <span className="flex flex-row ">
      <p className={className}>{(((value - 32) * 5) / 9).toFixed()}</p>
      <p className={!className ? "text-[13px]" : "text-[50px]"}>°C</p>
    </span>
  );
}
